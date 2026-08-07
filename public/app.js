// Category mappings based on transaction type and language
const categories = {
  si: {
    income: [
      { value: 'Offertory', label: 'පඬුරු / එකතු කිරීම්' },
      { value: 'Mass Intentions', label: 'දිව්‍ය පූජා අභිප්‍රායයන්' },
      { value: 'Other Income', label: 'වෙනත් ආදායම්' }
    ],
    donation: [
      { value: 'General Donation', label: 'පොදු පරිත්‍යාග' },
      { value: 'Building Fund', label: 'ගොඩනැගිලි අරමුදල' },
      { value: 'Feast Sponsor', label: 'මංගල්‍ය දායකත්වය' },
      { value: 'Poor Fund', label: 'දුප්පත් අරමුදල' },
      { value: 'Other Donation', label: 'වෙනත් පරිත්‍යාග' }
    ],
    expense: [
      { value: 'Utilities', label: 'විදුලිය / ජලය' },
      { value: 'Maintenance', label: 'නඩත්තු කටයුතු' },
      { value: 'Charity', label: 'දුප්පත් / පුණ්‍ය ආධාර' },
      { value: 'Liturgy', label: 'දේව මෙහෙයන් සහ මංගල්‍ය' },
      { value: 'Salaries', label: 'දීමනා සහ වැටුප්' },
      { value: 'Office', label: 'කාර්යාලීය වියදම්' },
      { value: 'Other Expense', label: 'වෙනත් වියදම්' }
    ]
  },
  en: {
    income: [
      { value: 'Offertory', label: 'Offertory / Collection' },
      { value: 'Mass Intentions', label: 'Mass Intentions' },
      { value: 'Other Income', label: 'Other Income' }
    ],
    donation: [
      { value: 'General Donation', label: 'General Donation' },
      { value: 'Building Fund', label: 'Building Fund' },
      { value: 'Feast Sponsor', label: 'Feast Sponsor' },
      { value: 'Poor Fund', label: 'Poor & Charity Fund' },
      { value: 'Other Donation', label: 'Other Donation' }
    ],
    expense: [
      { value: 'Utilities', label: 'Utilities (Electricity/Water)' },
      { value: 'Maintenance', label: 'Maintenance & Repairs' },
      { value: 'Charity', label: 'Charity & Social Help' },
      { value: 'Liturgy', label: 'Liturgy & Feast' },
      { value: 'Salaries', label: 'Allowances & Salaries' },
      { value: 'Office', label: 'Office & Stationery' },
      { value: 'Other Expense', label: 'Other Expense' }
    ]
  },
  both: {
    income: [
      { value: 'Offertory', label: 'පඬුරු / එකතු කිරීම් (Offertory)' },
      { value: 'Mass Intentions', label: 'දිව්‍ය පූජා අභිප්‍රායයන් (Mass Intentions)' },
      { value: 'Other Income', label: 'වෙනත් ආදායම් (Other)' }
    ],
    donation: [
      { value: 'General Donation', label: 'පොදු පරිත්‍යාග (General Donation)' },
      { value: 'Building Fund', label: 'ගොඩනැගිලි අරමුදල (Building Fund)' },
      { value: 'Feast Sponsor', label: 'මංගල්‍ය දායකත්වය (Feast Sponsor)' },
      { value: 'Poor Fund', label: 'දුප්පත් අරමුදල (Poor Fund)' },
      { value: 'Other Donation', label: 'වෙනත් පරිත්‍යාග (Other Donation)' }
    ],
    expense: [
      { value: 'Utilities', label: 'විදුලිය / ජලය (Utilities)' },
      { value: 'Maintenance', label: 'නඩත්තු කටයුතු (Maintenance)' },
      { value: 'Charity', label: 'දුප්පත් / පුණ්‍ය ආධාර (Charity)' },
      { value: 'Liturgy', label: 'දේව මෙහෙයන් සහ මංගල්‍ය (Liturgy)' },
      { value: 'Salaries', label: 'දීමනා සහ වැටුප් (Salaries)' },
      { value: 'Office', label: 'කාර්යාලීය වියදම් (Office)' },
      { value: 'Other Expense', label: 'වෙනත් වියදම් (Other)' }
    ]
  }
};

const translations = {
  si: {
    title: 'පල්ලියේ මූල්‍ය කළමනාකරණය',
    subtitle: 'මූල්‍ය ද්වාරය',
    exportBtn: '<i class="fa-solid fa-file-csv"></i> දත්ත බාගත කරන්න (Backup)',
    totalIncome: 'මුළු ආදායම',
    totalDonations: 'මුළු පරිත්‍යාග',
    totalExpense: 'මුළු වියදම',
    netBalance: 'ඉතිරි ශේෂය',
    addTxTitle: '<i class="fa-solid fa-plus-circle"></i> අලුත් ගනුදෙනුවක් එක් කරන්න',
    txType: 'ගනුදෙනු වර්ගය',
    income: '<i class="fa-solid fa-circle-arrow-up"></i> ආදායම',
    donation: '<i class="fa-solid fa-hand-holding-heart"></i> පරිත්‍යාග',
    expense: '<i class="fa-solid fa-circle-arrow-down"></i> වියදම',
    category: 'කාණ්ඩය',
    amount: 'මුදල LKR',
    date: 'දිනය',
    description: 'විස්තරය',
    descriptionPlaceholder: 'ගනුදෙනුව පිළිබඳ කෙටි විස්තරයක් ඇතුළත් කරන්න...',
    categoryPlaceholder: 'තෝරන්න හෝ අලුත් එකක් ලියන්න...',
    saveBtn: '<i class="fa-solid fa-cloud-arrow-up"></i> සුරකින්න',
    chartTitle: '<i class="fa-solid fa-chart-pie"></i> වියදම් ප්‍රස්ථාර විශ්ලේෂණය',
    recordsTitle: '<i class="fa-solid fa-list"></i> ගනුදෙනු ලැයිස්තුව',
    thDate: 'දිනය',
    thDesc: 'විස්තරය',
    thCat: 'කාණ්ඩය',
    thAmt: 'මුදල',
    thAct: 'ක්‍රියා',
    noChartData: '<i class="fa-solid fa-chart-line"></i> මෙම මාසය සඳහා දත්ත නොමැත',
    noRecords: '<i class="fa-regular fa-folder-open"></i> ඇතුළත් කළ ගනුදෙනු කිසිවක් නොමැත.',
    confirmDelete: 'මෙම ගනුදෙනුව සම්පූර්ණයෙන්ම මකා දැමීමට අවශ්‍යද?',
    errorSave: 'ගනුදෙනුව සුරැකීමට නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න.',
    errorServer: 'සර්වර් එක සමඟ සම්බන්ධ වීමට නොහැකි විය.',
    errorDelete: 'මකා දැමීමට නොහැකි විය.',
    statusProfit: 'ලාභදායී මාසයකි',
    statusLoss: 'වියදම් අධික මාසයකි',
    statusBalanced: 'සමබරයි',
    allMonths: 'සියලු මාස',
    jan: 'ජනවාරි', feb: 'පෙබරවාරි', mar: 'මාර්තු', apr: 'අප්‍රේල්', may: 'මැයි', jun: 'ජූනි', jul: 'ජූලි', aug: 'අගෝස්තු', sep: 'සැප්තැම්බර්', oct: 'ඔක්තෝබර්', nov: 'නොවැම්බර්', dec: 'දෙසැම්බර්'
  },
  en: {
    title: 'Church Finance Management',
    subtitle: 'Finance Portal',
    exportBtn: '<i class="fa-solid fa-file-csv"></i> Download CSV Backup',
    totalIncome: 'Total Income',
    totalDonations: 'Total Donations',
    totalExpense: 'Total Expense',
    netBalance: 'Net Balance',
    addTxTitle: '<i class="fa-solid fa-plus-circle"></i> Add New Transaction',
    txType: 'Transaction Type',
    income: '<i class="fa-solid fa-circle-arrow-up"></i> Income',
    donation: '<i class="fa-solid fa-hand-holding-heart"></i> Donation',
    expense: '<i class="fa-solid fa-circle-arrow-down"></i> Expense',
    category: 'Category',
    amount: 'Amount (LKR)',
    date: 'Date',
    description: 'Description',
    descriptionPlaceholder: 'Enter a short description of the transaction...',
    categoryPlaceholder: 'Select or type a custom category...',
    saveBtn: '<i class="fa-solid fa-cloud-arrow-up"></i> Save Transaction',
    chartTitle: '<i class="fa-solid fa-chart-pie"></i> Expense Category Breakdown',
    recordsTitle: '<i class="fa-solid fa-list"></i> Transaction Records',
    thDate: 'Date',
    thDesc: 'Details',
    thCat: 'Category',
    thAmt: 'Amount',
    thAct: 'Action',
    noChartData: '<i class="fa-solid fa-chart-line"></i> No data available for this period',
    noRecords: '<i class="fa-regular fa-folder-open"></i> No transactions found.',
    confirmDelete: 'Are you sure you want to delete this transaction?',
    errorSave: 'Failed to save transaction. Please try again.',
    errorServer: 'Could not connect to the server.',
    errorDelete: 'Failed to delete transaction.',
    statusProfit: 'Surplus Month',
    statusLoss: 'Deficit Month',
    statusBalanced: 'Balanced Month',
    allMonths: 'All Months',
    jan: 'January', feb: 'February', mar: 'March', apr: 'April', may: 'May', jun: 'June', jul: 'July', aug: 'August', sep: 'September', oct: 'October', nov: 'November', dec: 'December'
  },
  both: {
    title: 'පල්ලියේ මූල්‍ය කළමනාකරණය (Church Finance)',
    subtitle: 'මූල්‍ය ද්වාරය (Finance Portal)',
    exportBtn: '<i class="fa-solid fa-file-csv"></i> දත්ත බාගත කරන්න (Backup CSV)',
    totalIncome: 'මුළු ආදායම (Total Income)',
    totalDonations: 'මුළු පරිත්‍යාග (Total Donations)',
    totalExpense: 'මුළු වියදම (Total Expense)',
    netBalance: 'ශේෂය (Net Balance)',
    addTxTitle: '<i class="fa-solid fa-plus-circle"></i> අලුත් ගනුදෙනුවක් එක් කරන්න (Add New)',
    txType: 'ගනුදෙනු වර්ගය (Transaction Type)',
    income: '<i class="fa-solid fa-circle-arrow-up"></i> ආදායම (Income)',
    donation: '<i class="fa-solid fa-hand-holding-heart"></i> පරිත්‍යාග (Donation)',
    expense: '<i class="fa-solid fa-circle-arrow-down"></i> වියදම (Expense)',
    category: 'කාණ්ඩය (Category)',
    amount: 'මුදල LKR (Amount)',
    date: 'දිනය (Date)',
    description: 'විස්තරය (Description)',
    descriptionPlaceholder: 'ගනුදෙනුව පිළිබඳ කෙටි විස්තරයක් ඇතුළත් කරන්න (Enter details)...',
    categoryPlaceholder: 'තෝරන්න හෝ අලුත් එකක් ලියන්න (Select or type)...',
    saveBtn: '<i class="fa-solid fa-cloud-arrow-up"></i> සුරකින්න (Save Transaction)',
    chartTitle: '<i class="fa-solid fa-chart-pie"></i> ප්‍රස්ථාර විශ්ලේෂණය (Expenses Chart)',
    recordsTitle: '<i class="fa-solid fa-list"></i> ගනුදෙනු ලැයිස්තුව (Transaction Records)',
    thDate: 'දිනය (Date)',
    thDesc: 'විස්තරය (Details)',
    thCat: 'කාණ්ඩය (Category)',
    thAmt: 'මුදල (Amount)',
    thAct: 'ක්‍රියා (Action)',
    noChartData: '<i class="fa-solid fa-chart-line"></i> මෙම මාසය සඳහා දත්ත නොමැත (No Chart Data)',
    noRecords: '<i class="fa-regular fa-folder-open"></i> ඇතුළත් කළ ගනුදෙනු කිසිවක් නොමැත (No Records).',
    confirmDelete: 'මෙම ගනුදෙනුව සම්පූර්ණයෙන්ම මකා දැමීමට අවශ්‍යද? (Delete transaction?)',
    errorSave: 'ගනුදෙනුව සුරැකීමට නොහැකි විය (Failed to save).',
    errorServer: 'සර්වර් එක සමඟ සම්බන්ධ වීමට නොහැකි විය (Connection failed).',
    errorDelete: 'මකා දැමීමට නොහැකි විය (Delete failed).',
    statusProfit: 'ලාභදායී මාසයකි (Surplus)',
    statusLoss: 'වියදම් අධික මාසයකි (Deficit)',
    statusBalanced: 'සමබරයි (Balanced)',
    allMonths: 'සියලු මාස (All Months)',
    jan: 'ජනවාරි (January)', feb: 'පෙබරවාරි (February)', mar: 'මාර්තු (March)', apr: 'අප්‍රේල් (April)', may: 'මැයි (May)', jun: 'ජූනි (June)', jul: 'ජූලි (July)', aug: 'අගෝස්තු (August)', sep: 'සැප්තැම්බර් (September)', oct: 'ඔක්තෝබර් (October)', nov: 'නොවැම්බර් (November)', dec: 'දෙසැම්බර් (December)'
  }
};

// Global variables
let expenseChartInstance = null;
let currentLanguage = 'si';

// DOM Elements
const typeIncomeRadio = document.getElementById('typeIncome');
const typeDonationRadio = document.getElementById('typeDonation');
const typeExpenseRadio = document.getElementById('typeExpense');
const categoryInput = document.getElementById('category');
const categoryList = document.getElementById('categoryList');
const dateInput = document.getElementById('date');
const transactionForm = document.getElementById('transactionForm');
const filterMonth = document.getElementById('filterMonth');
const filterYear = document.getElementById('filterYear');
const themeToggle = document.getElementById('themeToggle');
const langSelect = document.getElementById('langSelect');

const totalIncomeEl = document.getElementById('totalIncome');
const totalDonationEl = document.getElementById('totalDonation');
const totalExpenseEl = document.getElementById('totalExpense');
const netBalanceEl = document.getElementById('netBalance');
const balanceCard = document.getElementById('balanceCard');
const balanceIconWrap = document.getElementById('balanceIconWrap');
const profitStatusEl = document.getElementById('profitStatus');

const transactionsList = document.getElementById('transactionsList');
const noRecordsMsg = document.getElementById('noRecordsMsg');
const noChartDataMsg = document.getElementById('noChartData');
const expenseChartCanvas = document.getElementById('expenseChart');

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;

  // Set default filter values to current month and year
  const currentDate = new Date();
  const currentMonthStr = String(currentDate.getMonth() + 1).padStart(2, '0');
  const currentYearStr = String(currentDate.getFullYear());

  filterMonth.value = currentMonthStr;
  filterYear.value = currentYearStr;

  // Load language preference
  currentLanguage = localStorage.getItem('language') || 'si';
  langSelect.value = currentLanguage;
  updateLanguageUI();

  // Load theme preference
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.remove('light-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  // Load initial data
  loadDashboardData();
});

// Event Listeners
typeIncomeRadio.addEventListener('change', () => updateCategoryOptions('income'));
typeDonationRadio.addEventListener('change', () => updateCategoryOptions('donation'));
typeExpenseRadio.addEventListener('change', () => updateCategoryOptions('expense'));

filterMonth.addEventListener('change', loadDashboardData);
filterYear.addEventListener('change', loadDashboardData);

transactionForm.addEventListener('submit', handleFormSubmit);

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  loadDashboardData();
});

langSelect.addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  localStorage.setItem('language', currentLanguage);
  updateLanguageUI();
  loadDashboardData();
});

// Functions
function updateCategoryOptions(type) {
  categoryList.innerHTML = '';
  categoryInput.value = ''; // Clear value on type change
  categories[currentLanguage][type].forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.label;
    categoryList.appendChild(option);
  });
}

function updateLanguageUI() {
  const t = translations[currentLanguage];

  // Header
  document.querySelector('.logo-area h1').textContent = t.title;
  document.querySelector('.logo-area .subtitle').textContent = t.subtitle;
  document.getElementById('exportBtn').innerHTML = t.exportBtn;

  // Stats Grid labels
  document.querySelector('.income-card .card-header span').textContent = t.totalIncome;
  document.querySelector('.donation-card .card-header span').textContent = t.totalDonations;
  document.querySelector('.expense-card .card-header span').textContent = t.totalExpense;
  document.getElementById('balanceTitle').textContent = t.netBalance;

  // Form
  document.querySelector('.form-section .section-title').innerHTML = t.addTxTitle;
  document.querySelector('#transactionForm .form-group:nth-child(1) > label').textContent = t.txType;
  document.querySelector('.toggle-income').innerHTML = t.income;
  document.querySelector('.toggle-donation').innerHTML = t.donation;
  document.querySelector('.toggle-expense').innerHTML = t.expense;
  document.querySelector('#transactionForm .form-group:nth-child(2) > label').textContent = t.category;
  categoryInput.placeholder = t.categoryPlaceholder;
  document.querySelector('#transactionForm .form-group:nth-child(3) > label').textContent = t.amount;
  document.querySelector('#transactionForm .form-group:nth-child(4) > label').textContent = t.date;
  document.querySelector('#transactionForm .form-group:nth-child(5) > label').textContent = t.description;
  document.getElementById('description').placeholder = t.descriptionPlaceholder;
  document.querySelector('#transactionForm button[type="submit"]').innerHTML = t.saveBtn;

  // Panels
  document.querySelector('.chart-panel .section-title').innerHTML = t.chartTitle;
  document.querySelector('.records-panel .section-title').innerHTML = t.recordsTitle;

  // Table Headers
  const ths = document.querySelectorAll('.records-table th');
  if (ths.length >= 5) {
    ths[0].textContent = t.thDate;
    ths[1].textContent = t.thDesc;
    ths[2].textContent = t.thCat;
    ths[3].textContent = t.thAmt;
    ths[4].textContent = t.thAct;
  }

  // Month select options
  const monthOpts = filterMonth.options;
  monthOpts[0].textContent = t.allMonths;
  monthOpts[1].textContent = t.jan;
  monthOpts[2].textContent = t.feb;
  monthOpts[3].textContent = t.mar;
  monthOpts[4].textContent = t.apr;
  monthOpts[5].textContent = t.may;
  monthOpts[6].textContent = t.jun;
  monthOpts[7].textContent = t.jul;
  monthOpts[8].textContent = t.aug;
  monthOpts[9].textContent = t.sep;
  monthOpts[10].textContent = t.oct;
  monthOpts[11].textContent = t.nov;
  monthOpts[12].textContent = t.dec;

  // Default type selection category list reload
  const selectedType = document.querySelector('input[name="type"]:checked').value;
  updateCategoryOptions(selectedType);
}

// Format number to currency (LKR)
function formatLKR(amount) {
  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 2
  }).format(amount);
}

// Fetch and load everything
async function loadDashboardData() {
  const month = filterMonth.value;
  const year = filterYear.value;

  let queryParams = `?year=${year}`;
  if (month) queryParams += `&month=${month}`;

  try {
    // 1. Fetch summary
    const summaryRes = await fetch(`/api/summary${queryParams}`);
    const summary = await summaryRes.json();
    updateSummaryCards(summary.totals);
    renderCharts(summary.categories);

    // 2. Fetch transactions list
    const listRes = await fetch(`/api/transactions${queryParams}`);
    const transactions = await listRes.json();
    renderTransactionsTable(transactions);

  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }
}

// Update Totals Dashboard
function updateSummaryCards(totals) {
  const t = translations[currentLanguage];
  totalIncomeEl.textContent = formatLKR(totals.income);
  totalDonationEl.textContent = formatLKR(totals.donation);
  totalExpenseEl.textContent = formatLKR(totals.expense);
  netBalanceEl.textContent = formatLKR(totals.balance);

  // Profit / Loss status indicator
  profitStatusEl.className = 'status-badge';
  
  if (totals.balance > 0) {
    profitStatusEl.textContent = t.statusProfit;
    profitStatusEl.classList.add('status-profit');
    balanceCard.style.borderLeftColor = 'var(--income-color)';
    balanceIconWrap.style.color = 'var(--income-color)';
    balanceIconWrap.style.backgroundColor = 'var(--income-light)';
  } else if (totals.balance < 0) {
    profitStatusEl.textContent = t.statusLoss;
    profitStatusEl.classList.add('status-loss');
    balanceCard.style.borderLeftColor = 'var(--expense-color)';
    balanceIconWrap.style.color = 'var(--expense-color)';
    balanceIconWrap.style.backgroundColor = 'var(--expense-light)';
  } else {
    profitStatusEl.textContent = t.statusBalanced;
    profitStatusEl.classList.add('status-profit');
    balanceCard.style.borderLeftColor = 'var(--primary-color)';
    balanceIconWrap.style.color = 'var(--primary-color)';
    balanceIconWrap.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
  }
}

// Render Table
function renderTransactionsTable(transactions) {
  const t = translations[currentLanguage];
  transactionsList.innerHTML = '';
  
  if (transactions.length === 0) {
    noRecordsMsg.innerHTML = t.noRecords;
    noRecordsMsg.style.display = 'block';
    return;
  }
  
  noRecordsMsg.style.display = 'none';

  transactions.forEach(tx => {
    const tr = document.createElement('tr');
    
    // Format LKR without symbol in tables to keep it neat
    const amtStr = tx.amount.toLocaleString('en-LK', { minimumFractionDigits: 2 });
    const isIncome = tx.type === 'income';
    const isDonation = tx.type === 'donation';
    const amtClass = isIncome ? 'inc-amt' : (isDonation ? 'don-amt' : 'exp-amt');
    const sign = (isIncome || isDonation) ? '+' : '-';

    // Find the canonical category value by looking up in any language array
    let canonicalValue = tx.category;
    for (const lang of ['si', 'en', 'both']) {
      const allLangCats = [...categories[lang].income, ...categories[lang].donation, ...categories[lang].expense];
      const match = allLangCats.find(c => c.value === tx.category || c.label === tx.category);
      if (match) {
        canonicalValue = match.value;
        break;
      }
    }

    // Translate display category to current active language
    const currentLangCats = [...categories[currentLanguage].income, ...categories[currentLanguage].donation, ...categories[currentLanguage].expense];
    const matchCurrent = currentLangCats.find(c => c.value === canonicalValue);
    
    let catLabel = matchCurrent ? matchCurrent.label : tx.category;

    tr.innerHTML = `
      <td>${tx.date}</td>
      <td><strong>${tx.description || '-'}</strong></td>
      <td><span class="badge">${catLabel}</span></td>
      <td class="text-right ${amtClass}">${sign} LKR ${amtStr}</td>
      <td class="text-center">
        <button class="btn-danger-icon" onclick="deleteTransaction(${tx.id})" title="${currentLanguage === 'si' ? 'මකා දමන්න' : 'Delete'}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;
    transactionsList.appendChild(tr);
  });
}

// Render Charts (Expenses Category Breakdown)
function renderCharts(categoriesData) {
  const t = translations[currentLanguage];
  // Filter for expenses only
  const expensesData = categoriesData.filter(c => c.type === 'expense');

  if (expensesData.length === 0) {
    if (expenseChartInstance) {
      expenseChartInstance.destroy();
      expenseChartInstance = null;
    }
    expenseChartCanvas.style.display = 'none';
    noChartDataMsg.innerHTML = t.noChartData;
    noChartDataMsg.style.display = 'flex';
    return;
  }

  expenseChartCanvas.style.display = 'block';
  noChartDataMsg.style.display = 'none';

  const labels = expensesData.map(c => {
    // Find the canonical value
    let canonicalValue = c.category;
    for (const lang of ['si', 'en', 'both']) {
      const allLangCats = categories[lang].expense;
      const match = allLangCats.find(cat => cat.value === c.category || cat.label === c.category);
      if (match) {
        canonicalValue = match.value;
        break;
      }
    }

    // Get current language equivalent
    const matchCurrent = categories[currentLanguage].expense.find(cat => cat.value === canonicalValue);
    return matchCurrent ? matchCurrent.label : c.category;
  });
  const data = expensesData.map(c => c.total);

  const backgroundColors = [
    '#f43f5e', // Utilities
    '#fb923c', // Maintenance
    '#fbbf24', // Charity
    '#2dd4bf', // Liturgy
    '#3b82f6', // Salaries
    '#a855f7', // Office
    '#64748b'  // Other
  ];

  if (expenseChartInstance) {
    expenseChartInstance.destroy();
  }

  const isLightTheme = document.body.classList.contains('light-theme');
  const legendColor = isLightTheme ? '#475569' : '#94a3b8';
  const borderColor = isLightTheme ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)';

  expenseChartInstance = new Chart(expenseChartCanvas, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors.slice(0, data.length),
        borderWidth: 1,
        borderColor: borderColor
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: legendColor,
            font: {
              family: 'Outfit',
              size: 11
            }
          }
        }
      }
    }
  });
}

// Handle Form Submit
async function handleFormSubmit(e) {
  e.preventDefault();
  const t = translations[currentLanguage];

  const type = document.querySelector('input[name="type"]:checked').value;
  const category = categoryInput.value;
  const amount = parseFloat(document.getElementById('amount').value);
  const date = dateInput.value;
  const description = document.getElementById('description').value;

  try {
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type, category, amount, date, description })
    });

    if (res.ok) {
      categoryInput.value = '';
      document.getElementById('amount').value = '';
      document.getElementById('description').value = '';
      
      const txDate = new Date(date);
      const txMonth = String(txDate.getMonth() + 1).padStart(2, '0');
      const txYear = String(txDate.getFullYear());

      filterMonth.value = txMonth;
      filterYear.value = txYear;

      loadDashboardData();
    } else {
      alert(t.errorSave);
    }
  } catch (err) {
    console.error('Error submitting transaction:', err);
    alert(t.errorServer);
  }
}

// Delete Transaction
async function deleteTransaction(id) {
  const t = translations[currentLanguage];
  if (!confirm(t.confirmDelete)) return;

  try {
    const res = await fetch(`/api/transactions/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      loadDashboardData();
    } else {
      alert(t.errorDelete);
    }
  } catch (err) {
    console.error('Error deleting transaction:', err);
  }
}
