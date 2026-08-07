const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database setup
const dbPath = path.join(__dirname, 'church_finance.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL CHECK(type IN ('income', 'expense', 'donation')),
        category TEXT NOT NULL,
        amount REAL NOT NULL,
        date TEXT NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
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

// Add new transaction
app.post('/api/transactions', (req, res) => {
  const { type, category, amount, date, description } = req.body;

  if (!type || !category || !amount || !date) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  const sql = 'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [type, category, amount, date, description], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, type, category, amount, date, description });
  });
});

// Delete transaction
app.delete('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.run(sql, id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Transaction deleted successfully', changes: this.changes });
  });
});

// Export database as CSV
app.get('/api/export-csv', (req, res) => {
  db.all('SELECT id, type, category, amount, date, description FROM transactions ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      res.status(500).send('Error retrieving data for export');
      return;
    }

    // Generate CSV content
    let csvContent = 'ID,Type,Category,Amount (LKR),Date,Description\n';
    rows.forEach(row => {
      const desc = row.description ? row.description.replace(/"/g, '""') : '';
      csvContent += `${row.id},${row.type},"${row.category}",${row.amount},${row.date},"${desc}"\n`;
    });

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=church_finance_export.csv');
    res.status(200).send(csvContent);
  });
});

// Serve index.html for any other requests
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
