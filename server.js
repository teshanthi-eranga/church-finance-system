const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads folder if not exists
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(uploadsDir));

// Database setup
const dbPath = path.join(__dirname, 'church_finance.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create table if not exists
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          type TEXT NOT NULL CHECK(type IN ('income', 'expense', 'donation')),
          category TEXT NOT NULL,
          amount REAL NOT NULL,
          date TEXT NOT NULL,
          description TEXT,
          receipt TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, () => {
        // Run migration query to add receipt column in case DB file existed previously without it
        db.run(`ALTER TABLE transactions ADD COLUMN receipt TEXT`, (err) => {
          if (err) {
            // Column already exists, ignore error
          } else {
            console.log("Migrated: Added 'receipt' column to transactions table.");
          }
        });
      });
    });
  }
});

// API Routes

// Get transactions (with filters for month and year)
app.get('/api/transactions', (req, res) => {
  const { year, month } = req.query;
  let sql = 'SELECT * FROM transactions';
  const params = [];

  if (year && month) {
    sql += ' WHERE strftime("%Y", date) = ? AND strftime("%m", date) = ?';
    params.push(year, month.padStart(2, '0'));
  } else if (year) {
    sql += ' WHERE strftime("%Y", date) = ?';
    params.push(year);
  }

  sql += ' ORDER BY date DESC, id DESC';

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get financial summary (totals and by categories)
app.get('/api/summary', (req, res) => {
  const { year, month } = req.query;
  let dateFilter = '';
  const params = [];

  if (year && month) {
    dateFilter = 'WHERE strftime("%Y", date) = ? AND strftime("%m", date) = ?';
    params.push(year, month.padStart(2, '0'));
  } else if (year) {
    dateFilter = 'WHERE strftime("%Y", date) = ?';
    params.push(year);
  }

  const sqlTotals = `
    SELECT 
      SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) as totalIncome,
      SUM(CASE WHEN type = 'donation' THEN amount ELSE 0 END) as totalDonation,
      SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) as totalExpense
    FROM transactions
    ${dateFilter}
  `;

  const sqlCategories = `
    SELECT type, category, SUM(amount) as total
    FROM transactions
    ${dateFilter}
    GROUP BY type, category
  `;

  db.get(sqlTotals, params, (err, totals) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    db.all(sqlCategories, params, (err, categories) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({
        totals: {
          income: totals.totalIncome || 0,
          donation: totals.totalDonation || 0,
          expense: totals.totalExpense || 0,
          balance: (totals.totalIncome || 0) + (totals.totalDonation || 0) - (totals.totalExpense || 0)
        },
        categories
      });
    });
  });
});

// Add new transaction (supporting receipt file uploads)
app.post('/api/transactions', (req, res) => {
  const { type, category, amount, date, description } = req.body;

  if (!type || !category || !amount || !date) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  // Handle uploaded file
  let receiptFilename = null;
  if (req.files && req.files.receipt) {
    const file = req.files.receipt;
    receiptFilename = Date.now() + '_' + file.name.replace(/\s+/g, '_');
    const uploadPath = path.join(uploadsDir, receiptFilename);
    file.mv(uploadPath, (err) => {
      if (err) console.error("Error moving upload file:", err);
    });
  }

  const sql = 'INSERT INTO transactions (type, category, amount, date, description, receipt) VALUES (?, ?, ?, ?, ?, ?)';
  db.run(sql, [type, category, parseFloat(amount), date, description, receiptFilename], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, type, category, amount, date, description, receipt: receiptFilename });
  });
});

// Delete transaction
app.delete('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  
  // First find the receipt filename to delete it from disk
  db.get('SELECT receipt FROM transactions WHERE id = ?', [id], (err, row) => {
    if (row && row.receipt) {
      const filePath = path.join(uploadsDir, row.receipt);
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
          if (err) console.error("Error deleting receipt file:", err);
        });
      }
    }
    
    // Now delete from database
    const sql = 'DELETE FROM transactions WHERE id = ?';
    db.run(sql, id, function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Transaction deleted successfully', changes: this.changes });
    });
  });
});

// Update transaction (supporting file updates)
app.put('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  
  if (!type || !category || !amount || !date) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  let receiptFilename = req.body.receipt || null;

  // Handle new uploaded file
  if (req.files && req.files.receipt) {
    const file = req.files.receipt;
    receiptFilename = Date.now() + '_' + file.name.replace(/\s+/g, '_');
    const uploadPath = path.join(uploadsDir, receiptFilename);
    file.mv(uploadPath, (err) => {
      if (err) console.error("Error moving upload file:", err);
    });

    // Try to delete old receipt from disk if exists
    db.get('SELECT receipt FROM transactions WHERE id = ?', [id], (err, row) => {
      if (row && row.receipt && row.receipt !== receiptFilename) {
        const oldPath = path.join(uploadsDir, row.receipt);
        if (fs.existsSync(oldPath)) {
          fs.unlink(oldPath, (err) => {
            if (err) console.error("Error deleting old receipt file:", err);
          });
        }
      }
    });
  }

  const sql = 'UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ?, receipt = ? WHERE id = ?';
  db.run(sql, [type, category, parseFloat(amount), date, description, receiptFilename, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Transaction updated successfully', changes: this.changes });
  });
});

// Export database as CSV
app.get('/api/export-csv', (req, res) => {
  const lang = req.query.lang || 'si';

  // Headers
  let csvContent = 'ID,Type,Category,Amount (LKR),Date,Description,ReceiptFile\n';
  if (lang === 'si') {
    csvContent = 'අනුක්‍රමික අංකය,ගනුදෙනු වර්ගය,කාණ්ඩය,මුදල (LKR),දිනය,විස්තරය,ලදුපත\n';
  } else if (lang === 'both') {
    csvContent = 'අනුක්‍රමික අංකය (ID),වර්ගය (Type),කාණ්ඩය (Category),මුදල LKR (Amount),දිනය (Date),විස්තරය (Description),ලදුපත (Receipt)\n';
  }

  // Translators
  const typeMap = {
    si: { income: 'ආදායම', donation: 'පරිත්‍යාග', expense: 'වියදම' },
    en: { income: 'Income', donation: 'Donation', expense: 'Expense' },
    both: { income: 'ආදායම (Income)', donation: 'පරිත්‍යාග (Donation)', expense: 'වියදම (Expense)' }
  };

  const catMap = {
    'Offertory': { si: 'පඬුරු / එකතු කිරීම්', en: 'Offertory / Collection', both: 'පඬුරු / එකතු කිරීම් (Offertory)' },
    'Mass Intentions': { si: 'දිව්‍ය පූජා අභිප්‍රායයන්', en: 'Mass Intentions', both: 'දිව්‍ය පූජා අභිප්‍රායයන් (Mass Intentions)' },
    'Other Income': { si: 'වෙනත් ආදායම්', en: 'Other Income', both: 'වෙනත් ආදායම් (Other)' },
    'General Donation': { si: 'පොදු පරිත්‍යාග', en: 'General Donation', both: 'පොදු පරිත්‍යාග (General Donation)' },
    'Building Fund': { si: 'ගොඩනැගිලි අරමුදල', en: 'Building Fund', both: 'ගොඩනැගිලි අරමුදල (Building Fund)' },
    'Feast Sponsor': { si: 'මංගල්‍ය දායකත්වය', en: 'Feast Sponsor', both: 'මංගල්‍ය දායකත්වය (Feast Sponsor)' },
    'Poor Fund': { si: 'දුප්පත් අරමුදල', en: 'Poor & Charity Fund', both: 'දුප්පත් අරමුදල (Poor Fund)' },
    'Other Donation': { si: 'වෙනත් පරිත්‍යාග', en: 'Other Donation', both: 'වෙනත් පරිත්‍යාග (Other Donation)' },
    'Utilities': { si: 'විදුලිය / ජලය', en: 'Utilities (Electricity/Water)', both: 'විදුලිය / ජලය (Utilities)' },
    'Maintenance': { si: 'නඩත්තු කටයුතු', en: 'Maintenance & Repairs', both: 'නඩත්තු කටයුතු (Maintenance)' },
    'Charity': { si: 'දුප්පත් / පුණ්‍ය ආධාර', en: 'Charity & Social Help', both: 'දුප්පත් / පුණ්‍ය ආධාර (Charity)' },
    'Liturgy': { si: 'දේව මෙහෙයන් සහ මංගල්‍ය', en: 'Liturgy & Feast', both: 'දේව මෙහෙයන් සහ මංගල්‍ය (Liturgy)' },
    'Salaries': { si: 'දීමනා සහ වැටුප්', en: 'Allowances & Salaries', both: 'දීමනා සහ වැටුප් (Salaries)' },
    'Office': { si: 'කාර්යාලීය වියදම්', en: 'Office & Stationery', both: 'කාර්යාලීය වියදම් (Office)' },
    'Other Expense': { si: 'වෙනත් වියදම්', en: 'Other Expense', both: 'වෙනත් වියදම් (Other)' }
  };

  db.all('SELECT id, type, category, amount, date, description, receipt FROM transactions ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      res.status(500).send('Error retrieving data for export');
      return;
    }

    // Groups
    const incomeRows = [];
    const donationRows = [];
    const expenseRows = [];
    let totalIncome = 0;
    let totalDonation = 0;
    let totalExpense = 0;

    rows.forEach(row => {
      let canonicalCat = row.category;
      for (const catKey of Object.keys(catMap)) {
        if (catKey === row.category || catMap[catKey].si === row.category || catMap[catKey].en === row.category || catMap[catKey].both === row.category) {
          canonicalCat = catKey;
          break;
        }
      }
      const catLabel = catMap[canonicalCat]?.[lang] || row.category;
      const desc = row.description ? row.description.replace(/"/g, '""') : '';
      const csvLine = `${row.id},"${catLabel}",${row.amount},${row.date},"${desc}","${row.receipt || ''}"\n`;

      if (row.type === 'income') {
        incomeRows.push(csvLine);
        totalIncome += row.amount;
      } else if (row.type === 'donation') {
        donationRows.push(csvLine);
        totalDonation += row.amount;
      } else if (row.type === 'expense') {
        expenseRows.push(csvLine);
        totalExpense += row.amount;
      }
    });

    const net = (totalIncome + totalDonation) - totalExpense;

    // Headers config
    let tIncome = 'INCOME', tDonation = 'DONATIONS', tExpense = 'EXPENSES', tNet = 'NET PROFIT / LOSS', tTotal = 'Total';
    let tHeader = 'ID,Category,Amount (LKR),Date,Description,ReceiptFile\n';
    
    if (lang === 'si') {
      tIncome = 'ආදායම'; tDonation = 'පරිත්‍යාග'; tExpense = 'වියදම්'; tNet = 'ශුද්ධ ලාභය / අලාභය'; tTotal = 'මුළු';
      tHeader = 'අනුක්‍රමික අංකය,කාණ්ඩය,මුදල (LKR),දිනය,විස්තරය,ලදුපත\n';
    } else if (lang === 'both') {
      tIncome = 'ආදායම (INCOME)'; tDonation = 'පරිත්‍යාග (DONATIONS)'; tExpense = 'වියදම් (EXPENSES)'; tNet = 'ශුද්ධ ලාභය / අලාභය (NET BALANCE)'; tTotal = 'Total';
      tHeader = 'ID,කාණ්ඩය (Category),මුදල LKR (Amount),දිනය (Date),විස්තරය (Description),ලදුපත (Receipt)\n';
    }

    let finalCsv = '';
    
    // Income Section
    finalCsv += `--- ${tIncome} ---\n`;
    finalCsv += tHeader;
    incomeRows.forEach(r => finalCsv += r);
    finalCsv += `,,${tTotal} ${tIncome}:,${totalIncome},,\n\n`;

    // Donation Section
    finalCsv += `--- ${tDonation} ---\n`;
    finalCsv += tHeader;
    donationRows.forEach(r => finalCsv += r);
    finalCsv += `,,${tTotal} ${tDonation}:,${totalDonation},,\n\n`;

    // Expense Section
    finalCsv += `--- ${tExpense} ---\n`;
    finalCsv += tHeader;
    expenseRows.forEach(r => finalCsv += r);
    finalCsv += `,,${tTotal} ${tExpense}:,${totalExpense},,\n\n`;

    // Net
    finalCsv += `=== ${tNet} ===,,,${net},,\n`;
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    // Set utf-8 BOM for Excel to open Sinhala characters correctly! (BOM is \ufeff)
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename=church_finance_backup_${lang}.csv`);
    res.status(200).send('\ufeff' + finalCsv);
  });
});

// Serve index.html for any other requests
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
