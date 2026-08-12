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
    printBtn: '<i class="fa-solid fa-print"></i> වාර්තාව (Print)',
    totalIncome: 'මුළු ආදායම',
    totalDonations: 'මුළු පරිත්‍යාග',
    totalExpense: 'මුළු වියදම',
    netBalance: 'ඉතිරි ශේෂය',
    addTxTitle: '<i class="fa-solid fa-plus-circle"></i> අලුත් ගනුදෙනුවක් එක් කරන්න',
    addTxTitleEdit: '<i class="fa-solid fa-pen-to-square"></i> ගනුදෙනුව සංස්කරණය කරන්න',
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
    updateBtn: '<i class="fa-solid fa-pen-to-square"></i> යාවත්කාලීන කරන්න',
    cancelBtn: 'අවලංගු කරන්න',
    chartTitle: '<i class="fa-solid fa-chart-pie"></i> මූල්‍ය ප්‍රස්ථාර විශ්ලේෂණය',
    recordsTitle: '<i class="fa-solid fa-list"></i> ගනුදෙනු ලැයිස්තුව',
    thDate: 'දිනය',
    thType: 'වර්ගය',
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
    jan: 'ජනවාරි', feb: 'පෙබරවාරි', mar: 'මාර්තු', apr: 'අප්‍රේල්', may: 'මැයි', jun: 'ජූනි', jul: 'ජූලි', aug: 'අගෝස්තු', sep: 'සැප්තැම්බර්', oct: 'ඔක්තෝබර්', nov: 'නොවැම්බර්', dec: 'දෙසැම්බර්',
    // Print Modal translations
    printModalTitle: '<i class="fa-solid fa-gears"></i> වාර්තා මුද්‍රණ සැකසුම්',
    printTitleLabel: 'වාර්තා ශීර්ෂය',
    printTitleDefault: 'පල්ලියේ මූල්‍ය වාර්තාව',
    printShowCardsLabel: 'සාරාංශ කාඩ්පත් ඇතුළත් කරන්න',
    printShowChartLabel: 'ප්‍රස්ථාරය ඇතුළත් කරන්න',
    printShowTableLabel: 'ගනුදෙනු ලැයිස්තුව ඇතුළත් කරන්න',
    printNotesLabel: 'විශේෂ සටහන් / අත්සන සඳහා ඉඩ',
    printNotesPlaceholder: 'උදා: සභාපතිතුමාගේ අත්සන: ...................',
    printCloseBtn: '<i class="fa-solid fa-xmark"></i> වසන්න',
    printConfirmBtn: '<i class="fa-solid fa-print"></i> මුද්‍රණය කරන්න',
    // Chart Toggle & Maximize View translations
    chartDoughnut: 'රවුම් ප්‍රස්ථාරය',
    chartBar: 'තීරු ප්‍රස්ථාරය',
    viewTableOnly: 'වගුව පමණක්',
    viewDashboard: 'දර්ශන පුවරුව',
    // Receipt translations
    receiptLabel: 'ලදුපත / බිල්පත (Receipt)',
    receiptModalTitle: '<i class="fa-solid fa-file-invoice"></i> ලදුපත / බිල්පත',
    noReceiptText: 'ලදුපතක් නොමැත',
    uploadTriggerLabel: 'ක්ලික් කර ලදුපත එක් කරන්න',
    // Backup & Print Period translations
    printPeriodLabel: 'මුද්‍රණය කළ යුතු කාලසීමාව',
    printPeriodFiltered: 'තෝරාගත් මාසය පමණක්',
    printPeriodAll: 'සම්පූර්ණ ඉතිහාසයම (All-time Full History)',
    printShowReceiptsLabel: 'ලදුපත් ඡායාරූප ඇතුළත් කරන්න',
    // Type badges
    badgeIncome: 'ආදායම',
    badgeDonation: 'පරිත්‍යාග',
    badgeExpense: 'වියදම'
  },
  en: {
    title: 'Church Finance Management',
    subtitle: 'Finance Portal',
    exportBtn: '<i class="fa-solid fa-file-csv"></i> Download CSV Backup',
    printBtn: '<i class="fa-solid fa-print"></i> Print Report',
    totalIncome: 'Total Income',
    totalDonations: 'Total Donations',
    totalExpense: 'Total Expense',
    netBalance: 'Net Balance',
    addTxTitle: '<i class="fa-solid fa-plus-circle"></i> Add New Transaction',
    addTxTitleEdit: '<i class="fa-solid fa-pen-to-square"></i> Edit Transaction',
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
    updateBtn: '<i class="fa-solid fa-pen-to-square"></i> Update Transaction',
    cancelBtn: 'Cancel',
    chartTitle: '<i class="fa-solid fa-chart-pie"></i> Financial Chart Analysis',
    recordsTitle: '<i class="fa-solid fa-list"></i> Transaction Records',
    thDate: 'Date',
    thType: 'Type',
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
    jan: 'January', feb: 'February', mar: 'March', apr: 'April', may: 'May', jun: 'June', jul: 'July', aug: 'August', sep: 'September', oct: 'October', nov: 'November', dec: 'December',
    // Print Modal translations
    printModalTitle: '<i class="fa-solid fa-gears"></i> Report Print Settings',
    printTitleLabel: 'Report Title',
    printTitleDefault: 'Church Finance Report',
    printShowCardsLabel: 'Include Summary Cards',
    printShowChartLabel: 'Include Chart',
    printShowTableLabel: 'Include Transaction List',
    printNotesLabel: 'Custom Notes / Signature Space',
    printNotesPlaceholder: 'e.g. Signature of Parish Priest: ...................',
    printCloseBtn: '<i class="fa-solid fa-xmark"></i> Close',
    printConfirmBtn: '<i class="fa-solid fa-print"></i> Print',
    // Chart Toggle & Maximize View translations
    chartDoughnut: 'Pie / Doughnut',
    chartBar: 'Bar Chart',
    viewTableOnly: 'Table Only',
    viewDashboard: 'Show Dashboard',
    // Receipt translations
    receiptLabel: 'Receipt / Bill Attachment',
    receiptModalTitle: '<i class="fa-solid fa-file-invoice"></i> Receipt / Bill Doc',
    noReceiptText: 'No receipt attached',
    uploadTriggerLabel: 'Click to Upload Receipt',
    // Backup & Print Period translations
    printPeriodLabel: 'Period to Print',
    printPeriodFiltered: 'Selected Month Only',
    printPeriodAll: 'All-time Full History',
    printShowReceiptsLabel: 'Include Receipt Images',
    // Type badges
    badgeIncome: 'Income',
    badgeDonation: 'Donation',
    badgeExpense: 'Expense'
  },
  both: {
    title: 'පල්ලියේ මූල්‍ය කළමනාකරණය (Church Finance)',
    subtitle: 'මූල්‍ය ද්වාරය (Finance Portal)',
    exportBtn: '<i class="fa-solid fa-file-csv"></i> දත්ත බාගත කරන්න (Backup CSV)',
    printBtn: '<i class="fa-solid fa-print"></i> වාර්තාව (Print Report)',
    totalIncome: 'මුළු ආදායම (Total Income)',
    totalDonations: 'මුළු පරිත්‍යාග (Total Donations)',
    totalExpense: 'මුළු වියදම (Total Expense)',
    netBalance: 'ශේෂය (Net Balance)',
    addTxTitle: '<i class="fa-solid fa-plus-circle"></i> අලුත් ගනුදෙනුවක් එක් කරන්න (Add New)',
    addTxTitleEdit: '<i class="fa-solid fa-pen-to-square"></i> ගනුදෙනුව සංස්කරණය කරන්න (Edit)',
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
    updateBtn: '<i class="fa-solid fa-pen-to-square"></i> යාවත්කාලීන කරන්න (Update)',
    cancelBtn: 'අවලංගු කරන්න (Cancel)',
    chartTitle: '<i class="fa-solid fa-chart-pie"></i> ප්‍රස්ථාර විශ්ලේෂණය (Financial Chart)',
    recordsTitle: '<i class="fa-solid fa-list"></i> ගනුදෙනු ලැයිස්තුව (Transaction Records)',
    thDate: 'දිනය (Date)',
    thType: 'වර්ගය (Type)',
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
    jan: 'ජනවාරි (January)', feb: 'පෙබරවාරි (February)', mar: 'මාර්තු (March)', apr: 'අප්‍රේල් (April)', may: 'මැයි (May)', jun: 'ජූනි (June)', jul: 'ජූලි (July)', aug: 'අගෝස්තු (August)', sep: 'සැප්තැම්බර් (September)', oct: 'ඔක්තෝබර් (October)', nov: 'නොවැම්බර් (November)', dec: 'දෙසැම්බර් (December)',
    // Print Modal translations
    printModalTitle: '<i class="fa-solid fa-gears"></i> වාර්තා මුද්‍රණ සැකසුම් (Print Settings)',
    printTitleLabel: 'වාර්තා ශීර්ෂය (Report Title)',
    printTitleDefault: 'පල්ලියේ මූල්‍ය වාර්තාව (Church Finance Report)',
    printShowCardsLabel: 'සාරාංශ කාඩ්පත් ඇතුළත් කරන්න (Include Summary)',
    printShowChartLabel: 'ප්‍රස්ථාරය ඇතුළත් කරන්න (Include Chart)',
    printShowTableLabel: 'ගනුදෙනු ලැයිස්තුව ඇතුළත් කරන්න (Include Records)',
    printNotesLabel: 'විශේෂ සටහන් / අත්සන සඳහා ඉඩ (Custom Notes)',
    printNotesPlaceholder: 'උදා: සභාපතිතුමාගේ අත්සන (Signature space): ...................',
    printCloseBtn: '<i class="fa-solid fa-xmark"></i> වසන්න (Close)',
    printConfirmBtn: '<i class="fa-solid fa-print"></i> මුද්‍රණය කරන්න (Print)',
    // Chart Toggle & Maximize View translations
    chartDoughnut: 'රවුම් ප්‍රස්ථාරය (Pie)',
    chartBar: 'තීරු ප්‍රස්ථාරය (Bar)',
    viewTableOnly: 'වගුව පමණක් (Table Only)',
    viewDashboard: 'දර්ශන පුවරුව (Dashboard)',
    // Receipt translations
    receiptLabel: 'ලදුපත / බිල්පත (Receipt / Bill)',
    receiptModalTitle: '<i class="fa-solid fa-file-invoice"></i> ලදුපත / බිල්පත (Receipt Document)',
    noReceiptText: 'ලදුපතක් නොමැත (No Receipt attached)',
    uploadTriggerLabel: 'ක්ලික් කර ලදුපත එක් කරන්න (Click to Upload)',
    // Backup & Print Period translations
    printPeriodLabel: 'මුද්‍රණය කළ යුතු කාලසීමාව (Period to Print)',
    printPeriodFiltered: 'තෝරාගත් මාසය පමණක් (Selected Month Only)',
    printPeriodAll: 'සම්පූර්ණ ඉතිහාසයම (All-time Full History)',
    printShowReceiptsLabel: 'ලදුපත් ඡායාරූප ඇතුළත් කරන්න (Include Receipt Images)',
    // Type badges
    badgeIncome: 'ආදායම (Inc)',
    badgeDonation: 'පරිත්‍යාග (Don)',
    badgeExpense: 'වියදම (Exp)'
  }
};

// Global variables
let expenseChartInstance = null;
let currentLanguage = 'si';
let editingTransactionId = null;
let latestTransactions = [];
let isTableOnlyMode = false;
let latestTotals = { income: 0, donation: 0, expense: 0 };
let currentReceiptFilename = null;

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
const printReportBtn = document.getElementById('printReportBtn');
const chartTypeSelect = document.getElementById('chartTypeSelect');
const toggleViewBtn = document.getElementById('toggleViewBtn');

const totalIncomeEl = document.getElementById('totalIncome');
const totalDonationEl = document.getElementById('totalDonation');
const totalExpenseEl = document.getElementById('totalExpense');
const netBalanceEl = document.getElementById('netBalance');
const balanceCard = document.getElementById('balanceCard');
const balanceIconWrap = document.getElementById('balanceIconWrap');
const profitStatusEl = document.getElementById('profitStatus');

const tablesContainer = document.getElementById('tablesContainer');
const noRecordsMsg = document.getElementById('noRecordsMsg');
const noChartDataMsg = document.getElementById('noChartData');
const expenseChartCanvas = document.getElementById('expenseChart');

// Receipt Upload elements
const receiptInput = document.getElementById('receipt');
const receiptPreviewContainer = document.getElementById('receiptPreviewContainer');
const receiptPreviewText = document.getElementById('receiptPreviewText');
const removeReceiptBtn = document.getElementById('removeReceiptBtn');
const uploadTriggerText = document.getElementById('uploadTriggerText');

// Receipt Modal Elements
const receiptModal = document.getElementById('receiptModal');
const closeReceiptModalBtn = document.getElementById('closeReceiptModalBtn');
const receiptModalContent = document.getElementById('receiptModalContent');

// Print Modal Elements
const printModal = document.getElementById('printModal');
const cancelPrintBtn = document.getElementById('cancelPrintBtn');
const confirmPrintBtn = document.getElementById('confirmPrintBtn');
const printTitleInput = document.getElementById('printTitle');
const printShowCardsCheck = document.getElementById('printShowCards');
const printShowChartCheck = document.getElementById('printShowChart');
const printShowTableCheck = document.getElementById('printShowTable');
const printShowReceiptsCheck = document.getElementById('printShowReceipts');
const printNotesInput = document.getElementById('printNotes');
const printArea = document.getElementById('printArea');
const printPeriodSelect = document.getElementById('printPeriodSelect');

// Export CSV button
const exportBtn = document.getElementById('exportBtn');

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

  // Initialize and populate year dropdown dynamically
  updateYearDropdown(currentYearStr);

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

  // Table View Mode toggle listener
  const tableViewModeSelect = document.getElementById('tableViewModeSelect');
  if (tableViewModeSelect) {
    tableViewModeSelect.addEventListener('change', (e) => {
      tableViewMode = e.target.value;
      renderTransactionsTable(latestTransactions);
    });
  }

chartTypeSelect.addEventListener('change', () => {
  renderCharts(latestTotals);
});

toggleViewBtn.addEventListener('click', () => {
  isTableOnlyMode = !isTableOnlyMode;
  const mainContent = document.querySelector('.main-content');
  mainContent.classList.toggle('table-only-mode', isTableOnlyMode);
  
  const t = translations[currentLanguage];
  if (isTableOnlyMode) {
    toggleViewBtn.innerHTML = `<i class="fa-solid fa-compress"></i> <span id="toggleViewBtnText">${t.viewDashboard}</span>`;
  } else {
    toggleViewBtn.innerHTML = `<i class="fa-solid fa-expand"></i> <span id="toggleViewBtnText">${t.viewTableOnly}</span>`;
  }
});

// Receipt Event Listeners
closeReceiptModalBtn.addEventListener('click', () => {
  receiptModal.style.display = 'none';
});

receiptInput.addEventListener('change', () => {
  if (receiptInput.files[0]) {
    const displayName = receiptInput.files[0].name;
    receiptPreviewText.innerHTML = `<i class="fa-solid fa-paperclip"></i> ${displayName}`;
    receiptPreviewContainer.style.display = 'flex';
  } else if (!currentReceiptFilename) {
    receiptPreviewContainer.style.display = 'none';
  }
});

removeReceiptBtn.addEventListener('click', () => {
  currentReceiptFilename = null;
  receiptPreviewContainer.style.display = 'none';
  receiptInput.value = '';
});

// Print Event Listeners
printReportBtn.addEventListener('click', () => {
  const t = translations[currentLanguage];
  const selectedPeriod = filterMonth.options[filterMonth.selectedIndex].text + ' ' + filterYear.value;
  
  // Set default report title based on current selection
  printTitleInput.value = `${t.printTitleDefault} - ${selectedPeriod}`;
  printNotesInput.placeholder = t.printNotesPlaceholder;
  
  // Show modal
  printModal.style.display = 'flex';
});

cancelPrintBtn.addEventListener('click', () => {
  printModal.style.display = 'none';
});

confirmPrintBtn.addEventListener('click', executePrint);

// CSV Download Event Listener using Fetch Blob (forces UTF-8 BOM prepending on the client side!)
exportBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const month = filterMonth.value;
    const year = filterYear.value;
    let queryParams = `?lang=${currentLanguage}&t=${Date.now()}&year=${year}`;
    if (month) queryParams += `&month=${month}`;

    const res = await fetch(`/api/export-csv${queryParams}`);
    if (!res.ok) throw new Error('Download failed');
    
    // Read response as text
    const text = await res.text();
    
    // Explicitly construct UTF-8 BOM in Javascript blob compilation
    const blob = new Blob(['\ufeff' + text], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `church_finance_backup_${currentLanguage}.csv`;
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (err) {
    console.error('Error downloading CSV backup:', err);
    alert(currentLanguage === 'si' ? 'බාගත කිරීම අසාර්ථක විය.' : 'Download failed.');
  }
});

// Functions

// Populate year dropdown dynamically with options (Current Year +- 10 and existing data years)
function updateYearDropdown(defaultYear) {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const endYear = currentYear + 10;
  
  const yearsSet = new Set();
  
  // Add base range
  for (let y = startYear; y <= endYear; y++) {
    yearsSet.add(y);
  }
  
  // Add years from existing transactions if available
  latestTransactions.forEach(tx => {
    if (tx.date) {
      const txYear = new Date(tx.date).getFullYear();
      if (!isNaN(txYear)) {
        yearsSet.add(txYear);
      }
    }
  });
  
  // Sort years in descending order (newest first)
  const sortedYears = Array.from(yearsSet).sort((a, b) => b - a);
  
  const currentSelection = filterYear.value || defaultYear || String(currentYear);
  filterYear.innerHTML = '';
  
  sortedYears.forEach(y => {
    const option = document.createElement('option');
    option.value = String(y);
    option.textContent = String(y);
    filterYear.appendChild(option);
  });
  
  // Set value if valid, fallback to current year
  if (sortedYears.includes(Number(currentSelection))) {
    filterYear.value = currentSelection;
  } else {
    filterYear.value = String(currentYear);
  }
}

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
  
  // Update export backup link text
  exportBtn.innerHTML = t.exportBtn;

  document.getElementById('printReportBtn').innerHTML = t.printBtn;

  // Stats Grid labels
  document.querySelector('.income-card .card-header span').textContent = t.totalIncome;
  document.querySelector('.donation-card .card-header span').textContent = t.totalDonations;
  document.querySelector('.expense-card .card-header span').textContent = t.totalExpense;
  document.getElementById('balanceTitle').textContent = t.netBalance;

  // Form (checks if editing)
  if (editingTransactionId) {
    document.querySelector('.form-section .section-title').innerHTML = t.addTxTitleEdit;
    document.querySelector('#transactionForm button[type="submit"]').innerHTML = t.updateBtn;
    const cancelBtn = document.getElementById('cancelEditBtn');
    if (cancelBtn) cancelBtn.innerHTML = `<i class="fa-solid fa-xmark"></i> ${t.cancelBtn}`;
  } else {
    document.querySelector('.form-section .section-title').innerHTML = t.addTxTitle;
    document.querySelector('#transactionForm button[type="submit"]').innerHTML = t.saveBtn;
  }
  
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
  
  // Receipt upload labels
  document.getElementById('receiptLabel').textContent = t.receiptLabel;
  document.getElementById('receiptModalTitle').innerHTML = t.receiptModalTitle;
  uploadTriggerText.textContent = t.uploadTriggerLabel;

  // Panels
  document.getElementById('chartTitle').innerHTML = t.chartTitle;
  document.getElementById('recordsTitle').innerHTML = t.recordsTitle;

  // Table headers are now generated dynamically in renderTransactionsTable

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

  // Print Modal elements translation
  document.querySelector('#printModal h2').innerHTML = t.printModalTitle;
  document.querySelector('#printModal label[for="printTitle"]').textContent = t.printTitleLabel;
  document.querySelector('#printShowCards').parentNode.childNodes[2].textContent = ` ${t.printShowCardsLabel}`;
  document.querySelector('#printShowChart').parentNode.childNodes[2].textContent = ` ${t.printShowChartLabel}`;
  document.querySelector('#printShowTable').parentNode.childNodes[2].textContent = ` ${t.printShowTableLabel}`;
  document.querySelector('#printShowReceipts').parentNode.childNodes[2].textContent = ` ${t.printShowReceiptsLabel}`;
  document.querySelector('#printModal label[for="printNotes"]').textContent = t.printNotesLabel;
  document.getElementById('cancelPrintBtn').innerHTML = t.printCloseBtn;
  document.getElementById('confirmPrintBtn').innerHTML = t.printConfirmBtn;
  
  // Print Modal Period translation
  document.getElementById('printPeriodLabel').textContent = t.printPeriodLabel;
  const periodOpts = printPeriodSelect.options;
  periodOpts[0].textContent = t.printPeriodFiltered;
  periodOpts[1].textContent = t.printPeriodAll;

  // Chart type options translations
  const chartTypeOpts = chartTypeSelect.options;
  chartTypeOpts[0].textContent = t.chartDoughnut;
  chartTypeOpts[1].textContent = t.chartBar;

  // View toggle button text update
  if (isTableOnlyMode) {
    toggleViewBtn.innerHTML = `<i class="fa-solid fa-compress"></i> <span id="toggleViewBtnText">${t.viewDashboard}</span>`;
  } else {
    toggleViewBtn.innerHTML = `<i class="fa-solid fa-expand"></i> <span id="toggleViewBtnText">${t.viewTableOnly}</span>`;
  }

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
    latestTotals = summary.totals;
    updateSummaryCards(summary.totals);
    renderCharts(summary.totals);

    // 2. Fetch transactions list
    const listRes = await fetch(`/api/transactions${queryParams}`);
    const transactions = await listRes.json();
    latestTransactions = transactions;
    
    // Dynamically update Year list in the UI if there is data outside default ranges
    updateYearDropdown();

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

let tableViewMode = 'single'; // default

function renderTransactionsTable(transactions) {
  const t = translations[currentLanguage];
  tablesContainer.innerHTML = '';
  
  if (transactions.length === 0) {
    noRecordsMsg.style.display = 'block';
    return;
  }
  noRecordsMsg.style.display = 'none';

  const groups = { income: [], donation: [], expense: [] };
  transactions.forEach(tx => groups[tx.type].push(tx));

  const groupConfig = [
    {
      type: 'income',
      icon: 'fa-arrow-trend-up',
      color: 'var(--income-color)',
      headerLabel: currentLanguage === 'si' ? 'ආදායම් ලැයිස්තුව' : (currentLanguage === 'en' ? 'Income Records' : 'ආදායම් ලැයිස්තුව (Income)'),
      amtClass: 'inc-amt',
      sign: '+',
      totalLabel: currentLanguage === 'si' ? 'මුළු ආදායම' : (currentLanguage === 'en' ? 'Total Income' : 'මුළු ආදායම (Total Income)')
    },
    {
      type: 'donation',
      icon: 'fa-hand-holding-heart',
      color: '#3b82f6',
      headerLabel: currentLanguage === 'si' ? 'පරිත්‍යාග ලැයිස්තුව' : (currentLanguage === 'en' ? 'Donation Records' : 'පරිත්‍යාග ලැයිස්තුව (Donations)'),
      amtClass: 'don-amt',
      sign: '+',
      totalLabel: currentLanguage === 'si' ? 'මුළු පරිත්‍යාග' : (currentLanguage === 'en' ? 'Total Donations' : 'මුළු පරිත්‍යාග (Total Donations)')
    },
    {
      type: 'expense',
      icon: 'fa-arrow-trend-down',
      color: 'var(--expense-color)',
      headerLabel: currentLanguage === 'si' ? 'වියදම් ලැයිස්තුව' : (currentLanguage === 'en' ? 'Expense Records' : 'වියදම් ලැයිස්තුව (Expenses)'),
      amtClass: 'exp-amt',
      sign: '-',
      totalLabel: currentLanguage === 'si' ? 'මුළු වියදම' : (currentLanguage === 'en' ? 'Total Expense' : 'මුළු වියදම (Total Expense)')
    }
  ];

  let grandTotalIncome = 0;
  let grandTotalExpense = 0;

  if (tableViewMode === 'single') {
    // ----------------------------------------------------
    // SINGLE TABLE MODE WITH NET PROFIT/LOSS CALCULATION
    // ----------------------------------------------------
    const wrapper = document.createElement('div');
    wrapper.className = 'records-list-wrapper single-table-wrapper';

    const table = document.createElement('table');
    table.className = 'records-table single-records-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th style="width: 14%;">${t.thDate}</th>
          <th style="width: 34%;">${t.thDesc}</th>
          <th style="width: 22%;">${t.thCat}</th>
          <th class="text-right" style="width: 20%;">${t.thAmt}</th>
          <th class="text-center print-hide" style="width: 10%;">${t.thAct}</th>
        </tr>
      </thead>
    `;

    const tbody = document.createElement('tbody');

    groupConfig.forEach(group => {
      const txs = groups[group.type];
      if (txs.length === 0) return;

      const total = txs.reduce((sum, tx) => sum + tx.amount, 0);
      if (group.type === 'income' || group.type === 'donation') grandTotalIncome += total;
      if (group.type === 'expense') grandTotalExpense += total;

      const recordsWord = currentLanguage === 'si' ? 'ගනුදෙනු' : (currentLanguage === 'en' ? 'records' : 'ගනුදෙනු (records)');
      const totalStr = total.toLocaleString('en-LK', { minimumFractionDigits: 2 });

      // Internal Section Header Row
      const headerRow = document.createElement('tr');
      headerRow.className = `single-table-section-header group-header-${group.type}`;
      headerRow.innerHTML = `
        <td colspan="5">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div class="grouped-header-left" style="color: ${group.color};">
              <i class="fa-solid ${group.icon}"></i>
              <span>${group.headerLabel}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="grouped-header-count">${txs.length} ${recordsWord}</span>
            </div>
          </div>
        </td>
      `;
      tbody.appendChild(headerRow);

      let rowNum = 0;

      txs.forEach(tx => {
        rowNum++;
        const tr = document.createElement('tr');
        const amtStr = tx.amount.toLocaleString('en-LK', { minimumFractionDigits: 2 });

        // Category translation
        let canonicalValue = tx.category;
        for (const lang of ['si', 'en', 'both']) {
          const allLangCats = [...categories[lang].income, ...categories[lang].donation, ...categories[lang].expense];
          const match = allLangCats.find(c => c.value === tx.category || c.label === tx.category);
          if (match) { canonicalValue = match.value; break; }
        }
        const currentLangCats = [...categories[currentLanguage].income, ...categories[currentLanguage].donation, ...categories[currentLanguage].expense];
        const matchCurrent = currentLangCats.find(c => c.value === canonicalValue);
        let catLabel = matchCurrent ? matchCurrent.label : tx.category;

        const receiptBtn = tx.receipt ? `
          <span class="badge" onclick="viewReceipt('${tx.receipt}')" style="background-color: rgba(16, 185, 129, 0.12); color: var(--income-color); border: 1px solid rgba(16, 185, 129, 0.2); cursor: pointer; margin-left: 0.4rem; font-size: 0.72rem; padding: 0.12rem 0.35rem;" onmouseover="this.style.backgroundColor='rgba(16, 185, 129, 0.2)'" onmouseout="this.style.backgroundColor='rgba(16, 185, 129, 0.12)'">
            <i class="fa-solid fa-paperclip"></i>
          </span>
        ` : '';

        tr.innerHTML = `
          <td><span class="row-num">${rowNum}</span>${tx.date}</td>
          <td title="${tx.description || '-'}"><strong>${tx.description || '-'}</strong>${receiptBtn}</td>
          <td title="${catLabel}"><span class="badge">${catLabel}</span></td>
          <td class="text-right ${group.amtClass}">${group.sign} LKR ${amtStr}</td>
          <td class="text-center print-hide">
            <div style="display: flex; gap: 0.35rem; justify-content: center; align-items: center;">
              <button class="btn-edit-icon" onclick="startEditTransaction(${JSON.stringify(tx).replace(/"/g, '&quot;')})" title="${currentLanguage === 'si' ? 'සංස්කරණය කරන්න' : 'Edit'}">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-danger-icon" onclick="deleteTransaction(${tx.id})" title="${currentLanguage === 'si' ? 'මකා දැමන්න' : 'Delete'}">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      // Internal Total Row
      const totalRow = document.createElement('tr');
      totalRow.className = `single-table-total-row group-total-${group.type}`;
      totalRow.innerHTML = `
        <td colspan="3" class="total-label" style="text-align: right; padding-right: 1.5rem !important;">
          <i class="fa-solid fa-calculator" style="margin-right: 0.4rem; opacity: 0.6;"></i> <strong>${group.totalLabel}</strong>
        </td>
        <td class="text-right ${group.amtClass}"><strong>${group.sign} LKR ${totalStr}</strong></td>
        <td class="print-hide"></td>
      `;
      tbody.appendChild(totalRow);
    });

    // GRAND TOTAL ROW (Net Profit / Loss)
    const netBalance = grandTotalIncome - grandTotalExpense;
    const isProfit = netBalance >= 0;
    let profitLabel;
    if (isProfit) {
      profitLabel = currentLanguage === 'si' ? 'ශුද්ධ ලාභය' : (currentLanguage === 'en' ? 'Net Profit' : 'ශුද්ධ ලාභය (Net Profit)');
    } else {
      profitLabel = currentLanguage === 'si' ? 'ශුද්ධ අලාභය' : (currentLanguage === 'en' ? 'Net Loss' : 'ශුද්ධ අලාභය (Net Loss)');
    }
    
    const grandTotalRow = document.createElement('tr');
    grandTotalRow.className = `single-table-total-row`;
    grandTotalRow.style.background = isProfit ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
    grandTotalRow.style.borderTop = `3px double ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'}`;
    grandTotalRow.style.borderBottom = `3px double ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'}`;
    grandTotalRow.innerHTML = `
      <td colspan="3" class="total-label" style="text-align: right; padding-right: 1.5rem !important; color: ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'}; font-size: 1.05rem;">
        <strong>${profitLabel}</strong>
      </td>
      <td class="text-right" style="color: ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'}; font-size: 1.1rem;">
        <strong>${isProfit ? '+' : '-'} LKR ${Math.abs(netBalance).toLocaleString('en-LK', { minimumFractionDigits: 2 })}</strong>
      </td>
      <td class="print-hide"></td>
    `;
    tbody.appendChild(grandTotalRow);

    table.appendChild(tbody);
    wrapper.appendChild(table);
    tablesContainer.appendChild(wrapper);
  } else {
    // ----------------------------------------------------
    // SEPARATE TABLE MODE (3 individual boxes)
    // ----------------------------------------------------
    groupConfig.forEach(group => {
      const txs = groups[group.type];
      if (txs.length === 0) return;

      const total = txs.reduce((sum, tx) => sum + tx.amount, 0);
      if (group.type === 'income' || group.type === 'donation') grandTotalIncome += total;
      if (group.type === 'expense') grandTotalExpense += total;
      
      const recordsWord = currentLanguage === 'si' ? 'ගනුදෙනු' : (currentLanguage === 'en' ? 'records' : 'ගනුදෙනු (records)');
      const totalStr = total.toLocaleString('en-LK', { minimumFractionDigits: 2 });

      // Section container
      const section = document.createElement('div');
      section.className = 'grouped-table-section';

      // Section header with total amount preview
      const header = document.createElement('div');
      header.className = 'grouped-table-header';
      header.style.borderLeftColor = group.color;
      header.innerHTML = `
        <div class="grouped-header-left">
          <i class="fa-solid ${group.icon}" style="color: ${group.color};"></i>
          <span>${group.headerLabel}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="grouped-header-count">${txs.length} ${recordsWord}</span>
          <span style="font-weight: 700; font-size: 0.9rem; color: ${group.color};">${group.sign} LKR ${totalStr}</span>
        </div>
      `;
      section.appendChild(header);

      // Table wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'records-list-wrapper';

      // Table
      const table = document.createElement('table');
      table.className = 'records-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th style="width: 14%;">${t.thDate}</th>
            <th style="width: 34%;">${t.thDesc}</th>
            <th style="width: 22%;">${t.thCat}</th>
            <th class="text-right" style="width: 20%;">${t.thAmt}</th>
            <th class="text-center print-hide" style="width: 10%;">${t.thAct}</th>
          </tr>
        </thead>
      `;

      const tbody = document.createElement('tbody');
      let rowNum = 0;

      txs.forEach(tx => {
        rowNum++;
        const tr = document.createElement('tr');
        const amtStr = tx.amount.toLocaleString('en-LK', { minimumFractionDigits: 2 });

        // Category translation
        let canonicalValue = tx.category;
        for (const lang of ['si', 'en', 'both']) {
          const allLangCats = [...categories[lang].income, ...categories[lang].donation, ...categories[lang].expense];
          const match = allLangCats.find(c => c.value === tx.category || c.label === tx.category);
          if (match) { canonicalValue = match.value; break; }
        }
        const currentLangCats = [...categories[currentLanguage].income, ...categories[currentLanguage].donation, ...categories[currentLanguage].expense];
        const matchCurrent = currentLangCats.find(c => c.value === canonicalValue);
        let catLabel = matchCurrent ? matchCurrent.label : tx.category;

        // Receipt badge
        const receiptBtn = tx.receipt ? `
          <span class="badge" onclick="viewReceipt('${tx.receipt}')" style="background-color: rgba(16, 185, 129, 0.12); color: var(--income-color); border: 1px solid rgba(16, 185, 129, 0.2); cursor: pointer; margin-left: 0.4rem; font-size: 0.72rem; padding: 0.12rem 0.35rem;" onmouseover="this.style.backgroundColor='rgba(16, 185, 129, 0.2)'" onmouseout="this.style.backgroundColor='rgba(16, 185, 129, 0.12)'">
            <i class="fa-solid fa-paperclip"></i>
          </span>
        ` : '';

        tr.innerHTML = `
          <td><span class="row-num">${rowNum}</span>${tx.date}</td>
          <td title="${tx.description || '-'}"><strong>${tx.description || '-'}</strong>${receiptBtn}</td>
          <td title="${catLabel}"><span class="badge">${catLabel}</span></td>
          <td class="text-right ${group.amtClass}">${group.sign} LKR ${amtStr}</td>
          <td class="text-center print-hide">
            <div style="display: flex; gap: 0.35rem; justify-content: center; align-items: center;">
              <button class="btn-edit-icon" onclick="startEditTransaction(${JSON.stringify(tx).replace(/"/g, '&quot;')})" title="${currentLanguage === 'si' ? 'සංස්කරණය කරන්න' : 'Edit'}">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-danger-icon" onclick="deleteTransaction(${tx.id})" title="${currentLanguage === 'si' ? 'මකා දැමන්න' : 'Delete'}">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      // Total row
      const totalRow = document.createElement('tr');
      totalRow.className = 'total-row';
      totalRow.innerHTML = `
        <td colspan="3" class="total-label"><i class="fa-solid fa-calculator" style="margin-right: 0.4rem; opacity: 0.6;"></i> <strong>${group.totalLabel}</strong></td>
        <td class="text-right ${group.amtClass}"><strong>${group.sign} LKR ${totalStr}</strong></td>
        <td class="print-hide"></td>
      `;
      tbody.appendChild(totalRow);

      table.appendChild(tbody);
      wrapper.appendChild(table);
      section.appendChild(wrapper);
      tablesContainer.appendChild(section);
    });

    // Add Net Profit/Loss standalone table at the bottom
    const netBalance = grandTotalIncome - grandTotalExpense;
    const isProfit = netBalance >= 0;
    
    let profitLabel;
    if (isProfit) {
      profitLabel = currentLanguage === 'si' ? 'ශුද්ධ ලාභය' : (currentLanguage === 'en' ? 'Net Profit' : 'ශුද්ධ ලාභය (Net Profit)');
    } else {
      profitLabel = currentLanguage === 'si' ? 'ශුද්ධ අලාභය' : (currentLanguage === 'en' ? 'Net Loss' : 'ශුද්ධ අලාභය (Net Loss)');
    }

    const netBalanceSection = document.createElement('div');
    netBalanceSection.className = 'grouped-table-section';
    netBalanceSection.style.border = `2px solid ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'}`;

    const nbHeader = document.createElement('div');
    nbHeader.className = 'grouped-table-header';
    nbHeader.style.background = isProfit ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
    nbHeader.style.borderLeft = 'none';
    nbHeader.style.justifyContent = 'space-between';

    nbHeader.innerHTML = `
      <div class="grouped-header-left" style="color: ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'}; font-size: 1.15rem;">
        <i class="fa-solid fa-scale-balanced"></i>
        <strong>${profitLabel}</strong>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-weight: 800; font-size: 1.25rem; color: ${isProfit ? 'var(--income-color)' : 'var(--expense-color)'};">${isProfit ? '+' : '-'} LKR ${Math.abs(netBalance).toLocaleString('en-LK', { minimumFractionDigits: 2 })}</span>
      </div>
    `;

    netBalanceSection.appendChild(nbHeader);
    tablesContainer.appendChild(netBalanceSection);
  }
}

// Open Receipt View modal
function viewReceipt(filename) {
  receiptModalContent.innerHTML = '';
  
  const ext = filename.split('.').pop().toLowerCase();
  
  if (ext === 'pdf') {
    receiptModalContent.innerHTML = `<iframe src="/uploads/${filename}" style="width: 100%; height: 55vh; border: none; border-radius: var(--radius-sm);"></iframe>`;
  } else {
    receiptModalContent.innerHTML = `<img src="/uploads/${filename}" style="max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: var(--radius-sm);">`;
  }
  
  receiptModal.style.display = 'flex';
}

// Start Edit Mode
function startEditTransaction(tx) {
  editingTransactionId = tx.id;
  
  // Set form values
  document.getElementById(`type${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}`).checked = true;
  updateCategoryOptions(tx.type);
  categoryInput.value = tx.category;
  
  document.getElementById('amount').value = tx.amount;
  dateInput.value = tx.date;
  document.getElementById('description').value = tx.description || '';
  
  // Receipt fields update
  receiptInput.value = '';
  currentReceiptFilename = tx.receipt;
  
  if (tx.receipt) {
    // Show current filename without timestamp prefix
    const displayName = tx.receipt.split('_').slice(1).join('_');
    receiptPreviewText.innerHTML = `<i class="fa-solid fa-paperclip"></i> ${displayName}`;
    receiptPreviewContainer.style.display = 'flex';
  } else {
    receiptPreviewContainer.style.display = 'none';
  }
  
  // Update Form Header and Save Button to Edit Mode
  const t = translations[currentLanguage];
  document.querySelector('.form-section .section-title').innerHTML = t.addTxTitleEdit;
  
  const submitBtn = document.querySelector('#transactionForm button[type="submit"]');
  
  const oldCancel = document.getElementById('cancelEditBtn');
  if (oldCancel) oldCancel.remove();

  submitBtn.innerHTML = t.updateBtn;
  submitBtn.className = 'btn btn-primary btn-block';
  
  // Insert a cancel button next to update button
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.id = 'cancelEditBtn';
  cancelBtn.className = 'btn btn-secondary btn-block';
  cancelBtn.style.marginTop = '0.5rem';
  cancelBtn.innerHTML = `<i class="fa-solid fa-xmark"></i> ${t.cancelBtn}`;
  cancelBtn.onclick = cancelEditTransaction;
  
  submitBtn.parentNode.appendChild(cancelBtn);
  
  // Scroll to form
  document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// Cancel Edit Mode
function cancelEditTransaction() {
  editingTransactionId = null;
  currentReceiptFilename = null;
  
  document.getElementById('amount').value = '';
  document.getElementById('description').value = '';
  categoryInput.value = '';
  receiptInput.value = '';
  receiptPreviewContainer.style.display = 'none';
  
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
  
  const t = translations[currentLanguage];
  document.querySelector('.form-section .section-title').innerHTML = t.addTxTitle;
  
  const submitBtn = document.querySelector('#transactionForm button[type="submit"]');
  submitBtn.innerHTML = t.saveBtn;
  
  const cancelBtn = document.getElementById('cancelEditBtn');
  if (cancelBtn) cancelBtn.remove();
  
  const selectedType = document.querySelector('input[name="type"]:checked').value;
  updateCategoryOptions(selectedType);
}

// Render Charts representing Income, Donation, Expense in 3 colors
function renderCharts(totals) {
  const t = translations[currentLanguage];
  const chartType = chartTypeSelect.value;

  // Check if all totals are zero
  if (totals.income === 0 && totals.donation === 0 && totals.expense === 0) {
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

  // Labels for the three transaction types
  let labels = [];
  if (currentLanguage === 'si') {
    labels = ['ආදායම', 'පරිත්‍යාග', 'වියදම'];
  } else if (currentLanguage === 'en') {
    labels = ['Income', 'Donation', 'Expense'];
  } else {
    labels = ['ආදායම (Income)', 'පරිත්‍යාග (Donation)', 'වියදම (Expense)'];
  }

  const dataValues = [totals.income, totals.donation, totals.expense];
  const backgroundColors = [
    '#10b981', // Income (Green)
    '#3b82f6', // Donation (Blue)
    '#f43f5e'  // Expense (Red)
  ];

  if (expenseChartInstance) {
    expenseChartInstance.destroy();
  }

  const isLightTheme = document.body.classList.contains('light-theme');
  const textColor = isLightTheme ? '#475569' : '#94a3b8';
  const borderColor = isLightTheme ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)';

  // Chart configuration
  const config = {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: currentLanguage === 'si' ? 'මුළු එකතුව' : (currentLanguage === 'en' ? 'Total Amount' : 'මුළු එකතුව (Total)'),
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        borderColor: borderColor
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: chartType !== 'bar', // Hide legend on bar chart to save space
          position: 'right',
          labels: {
            color: textColor,
            font: {
              family: 'Outfit',
              size: 11
            }
          }
        }
      }
    }
  };

  // Add specific bar scales if bar chart is chosen
  if (chartType === 'bar') {
    config.options.scales = {
      x: {
        grid: {
          color: borderColor
        },
        ticks: {
          color: textColor,
          font: { family: 'Outfit', size: 10 }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: borderColor
        },
        ticks: {
          color: textColor,
          font: { family: 'Outfit', size: 10 }
        }
      }
    };
  }

  expenseChartInstance = new Chart(expenseChartCanvas, config);
}

// Generate Printable Report (handles full history backups beautifully)
async function executePrint() {
  const t = translations[currentLanguage];
  const isSi = currentLanguage === 'si';
  const isEn = currentLanguage === 'en';
  const printPeriodType = printPeriodSelect.value;
  
  let transactionsToPrint = latestTransactions;
  let selectedPeriod = filterMonth.options[filterMonth.selectedIndex].text + ' ' + filterYear.value;
  
  // If printing full history, fetch all transactions from server
  if (printPeriodType === 'all') {
    selectedPeriod = isSi ? 'සම්පූර්ණ ඉතිහාසයම' : (isEn ? 'All-time Full History' : 'සම්පූර්ණ ඉතිහාසයම (All-time)');
    try {
      const res = await fetch('/api/transactions');
      transactionsToPrint = await res.json();
    } catch (err) {
      console.error('Error fetching all transactions for printing:', err);
    }
  }

  // Calculate totals
  let totalIncome = 0, totalDonation = 0, totalExpense = 0;
  transactionsToPrint.forEach(tx => {
    if (tx.type === 'income') totalIncome += tx.amount;
    else if (tx.type === 'donation') totalDonation += tx.amount;
    else if (tx.type === 'expense') totalExpense += tx.amount;
  });
  const netBalance = (totalIncome + totalDonation) - totalExpense;

  // Helper to format amounts
  const fmt = (n) => n.toLocaleString('en-LK', { minimumFractionDigits: 2 });

  // Helper to translate category
  const translateCat = (catValue) => {
    let canonical = catValue;
    for (const lang of ['si', 'en', 'both']) {
      const allCats = [...categories[lang].income, ...categories[lang].donation, ...categories[lang].expense];
      const m = allCats.find(c => c.value === catValue || c.label === catValue);
      if (m) { canonical = m.value; break; }
    }
    const currentCats = [...categories[currentLanguage].income, ...categories[currentLanguage].donation, ...categories[currentLanguage].expense];
    const mc = currentCats.find(c => c.value === canonical);
    return mc ? mc.label : catValue;
  };

  // Helper to aggregate transactions by category
  const aggregateByCategory = (txs) => {
    const map = {};
    txs.forEach(tx => {
      const catLabel = translateCat(tx.category);
      if (!map[catLabel]) {
        map[catLabel] = { label: catLabel, items: [], total: 0 };
      }
      map[catLabel].items.push(tx);
      map[catLabel].total += tx.amount;
    });
    return Object.values(map);
  };

  // Clear print area
  printArea.innerHTML = '';

  // ═══════════════════════════════
  // BUILD P&L STATEMENT HTML
  // ═══════════════════════════════

  let html = '';

  // 1. P&L Header (Church Name / Title)
  html += `
    <div class="pnl-header">
      <h1>${printTitleInput.value}</h1>
      <div class="pnl-subtitle">
        ${isSi ? 'මුද්‍රිත දිනය' : 'Printed'}: ${new Date().toLocaleDateString()}
      </div>
      <h2>${isSi ? 'ලාභ හා අලාභ ප්‍රකාශනය' : (isEn ? 'Profit & Loss Statement' : 'ලාභ හා අලාභ ප්‍රකාශනය (Profit & Loss Statement)')}</h2>
      <div class="pnl-period">${isSi ? 'කාල සීමාව' : 'For the Period Ended'}: ${selectedPeriod}</div>
    </div>
  `;

  // 2. Chart (optional)
  if (printShowChartCheck.checked && expenseChartInstance) {
    const chartImgUrl = expenseChartCanvas.toDataURL('image/png');
    html += `
      <div class="pnl-chart-container">
        <img src="${chartImgUrl}">
      </div>
    `;
  }

  // 3. P&L Table
  if (printShowTableCheck.checked || printShowCardsCheck.checked) {
    const incomeGroup = transactionsToPrint.filter(tx => tx.type === 'income');
    const donationGroup = transactionsToPrint.filter(tx => tx.type === 'donation');
    const expenseGroup = transactionsToPrint.filter(tx => tx.type === 'expense');

    html += `<div class="records-list-wrapper single-table-wrapper" style="border: none; margin-top: 20px;">`;
    html += `<table class="records-table single-records-table">`;
    html += `
      <thead>
        <tr>
          <th style="width: 50%; border-bottom: 2px solid var(--panel-border) !important;">${isSi ? 'විස්තරය (Description)' : 'Description'}</th>
          <th style="width: 25%; text-align: right; border-bottom: 2px solid var(--panel-border) !important;">${isSi ? 'මුදල LKR (Amount)' : 'Amount (LKR)'}</th>
        </tr>
      </thead>
      <tbody>
    `;

    // Helper for section headers
    const getHeaderRow = (type, label, color, icon) => `
      <tr class="single-table-section-header group-header-${type}">
        <td colspan="2">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div class="grouped-header-left" style="color: ${color}; font-size: 1.05rem;">
              <i class="fa-solid ${icon}"></i>
              <span>${label}</span>
            </div>
          </div>
        </td>
      </tr>
    `;

    // ── INCOME SECTION ──
    if (incomeGroup.length > 0) {
      const incomeCats = aggregateByCategory(incomeGroup);
      const label = isSi ? 'ආදායම' : (isEn ? 'Income' : 'ආදායම (Income)');
      // Use a darker green for print income instead of var(--income-color)
      html += getHeaderRow('income', label, '#059669', 'fa-arrow-trend-up');

      incomeCats.forEach(cat => {
        if (cat.items.length === 1) {
          html += `<tr><td>${cat.label}</td><td class="text-right inc-amt" style="color: #059669 !important; font-weight: 500;">${fmt(cat.total)}</td></tr>`;
        } else {
          cat.items.forEach(tx => {
            const desc = tx.description ? ` — ${tx.description}` : '';
            html += `<tr><td style="padding-left: 2rem;">${cat.label}${desc} <span style="color:#999; font-size:11px;">(${tx.date})</span></td><td class="text-right inc-amt" style="color: #059669 !important; font-weight: 500;">${fmt(tx.amount)}</td></tr>`;
          });
        }
      });

      html += `
        <tr class="single-table-total-row group-total-income">
          <td class="total-label" style="text-align: right; padding-right: 1.5rem !important;">
            <i class="fa-solid fa-calculator" style="margin-right: 0.4rem; opacity: 0.6;"></i> <strong>${isSi ? 'මුළු ආදායම' : (isEn ? 'Total Income' : 'මුළු ආදායම (Total Income)')}</strong>
          </td>
          <td class="text-right inc-amt" style="color: #059669 !important;"><strong>+ LKR ${fmt(totalIncome)}</strong></td>
        </tr>
      `;
    }

    // ── DONATION SECTION ──
    if (donationGroup.length > 0) {
      const donationCats = aggregateByCategory(donationGroup);
      const label = isSi ? 'පරිත්‍යාග' : (isEn ? 'Donations' : 'පරිත්‍යාග (Donations)');
      html += getHeaderRow('donation', label, '#3b82f6', 'fa-hand-holding-heart');

      donationCats.forEach(cat => {
        if (cat.items.length === 1) {
          html += `<tr><td>${cat.label}</td><td class="text-right don-amt" style="color: #3b82f6 !important; font-weight: 500;">${fmt(cat.total)}</td></tr>`;
        } else {
          cat.items.forEach(tx => {
            const desc = tx.description ? ` — ${tx.description}` : '';
            html += `<tr><td style="padding-left: 2rem;">${cat.label}${desc} <span style="color:#999; font-size:11px;">(${tx.date})</span></td><td class="text-right don-amt" style="color: #3b82f6 !important; font-weight: 500;">${fmt(tx.amount)}</td></tr>`;
          });
        }
      });

      html += `
        <tr class="single-table-total-row group-total-donation">
          <td class="total-label" style="text-align: right; padding-right: 1.5rem !important;">
            <i class="fa-solid fa-calculator" style="margin-right: 0.4rem; opacity: 0.6;"></i> <strong>${isSi ? 'මුළු පරිත්‍යාග' : (isEn ? 'Total Donations' : 'මුළු පරිත්‍යාග (Total Donations)')}</strong>
          </td>
          <td class="text-right don-amt" style="color: #3b82f6 !important;"><strong>+ LKR ${fmt(totalDonation)}</strong></td>
        </tr>
      `;
    }

    // ── EXPENSE SECTION ──
    if (expenseGroup.length > 0) {
      const expenseCats = aggregateByCategory(expenseGroup);
      const label = isSi ? 'වියදම්' : (isEn ? 'Expenses' : 'වියදම් (Expenses)');
      html += getHeaderRow('expense', label, '#ef4444', 'fa-arrow-trend-down');

      expenseCats.forEach(cat => {
        if (cat.items.length === 1) {
          html += `<tr><td>${cat.label}</td><td class="text-right exp-amt" style="color: #ef4444 !important; font-weight: 500;">${fmt(cat.total)}</td></tr>`;
        } else {
          cat.items.forEach(tx => {
            const desc = tx.description ? ` — ${tx.description}` : '';
            html += `<tr><td style="padding-left: 2rem;">${cat.label}${desc} <span style="color:#999; font-size:11px;">(${tx.date})</span></td><td class="text-right exp-amt" style="color: #ef4444 !important; font-weight: 500;">${fmt(tx.amount)}</td></tr>`;
          });
        }
      });

      html += `
        <tr class="single-table-total-row group-total-expense">
          <td class="total-label" style="text-align: right; padding-right: 1.5rem !important;">
            <i class="fa-solid fa-calculator" style="margin-right: 0.4rem; opacity: 0.6;"></i> <strong>${isSi ? 'මුළු වියදම' : (isEn ? 'Total Expenses' : 'මුළු වියදම (Total Expenses)')}</strong>
          </td>
          <td class="text-right exp-amt" style="color: #ef4444 !important;"><strong>- LKR ${fmt(totalExpense)}</strong></td>
        </tr>
      `;
    }

    // ── GRAND TOTAL: NET PROFIT / LOSS ──
    const isProfit = netBalance >= 0;
    let profitLabel;
    if (isProfit) {
      profitLabel = isSi ? 'ශුද්ධ ලාභය' : (isEn ? 'Net Profit' : 'ශුද්ධ ලාභය (Net Profit)');
    } else {
      profitLabel = isSi ? 'ශුද්ධ අලාභය' : (isEn ? 'Net Loss' : 'ශුද්ධ අලාභය (Net Loss)');
    }
    
    html += `
      <tr class="single-table-total-row" style="background: ${isProfit ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'} !important; border-top: 3px double ${isProfit ? '#059669' : '#ef4444'} !important; border-bottom: 3px double ${isProfit ? '#059669' : '#ef4444'} !important;">
        <td style="text-align: right; padding-right: 1.5rem !important; font-size: 1.05rem; color: ${isProfit ? '#059669' : '#ef4444'};">
          <strong>${profitLabel}</strong>
        </td>
        <td class="text-right" style="font-size: 1.1rem; color: ${isProfit ? '#059669' : '#ef4444'};">
          <strong>${isProfit ? '+' : '-'} LKR ${fmt(Math.abs(netBalance))}</strong>
        </td>
      </tr>
    `;

    html += `</tbody></table></div>`;
  }

  // 4. Receipt Images (appendix)
  if (printShowReceiptsCheck.checked) {
    const txsWithReceipts = transactionsToPrint.filter(tx => tx.receipt);
    if (txsWithReceipts.length > 0) {
      html += `
        <div class="pnl-receipts-section">
          <h3 class="pnl-receipts-title">
            ${isSi ? 'අමුණා ඇති ලදුපත් / බිල්පත්' : (isEn ? 'Attached Receipts / Bills' : 'අමුණා ඇති ලදුපත් (Attached Receipts)')}
          </h3>
          <div class="pnl-receipts-grid">
      `;
      
      txsWithReceipts.forEach(tx => {
        const ext = tx.receipt.split('.').pop().toLowerCase();
        if (ext !== 'pdf') {
          const amtStr = fmt(tx.amount);
          html += `
            <div class="pnl-receipt-card">
              <p>${tx.date} — ${tx.description || translateCat(tx.category)} (LKR ${amtStr})</p>
              <img src="/uploads/${tx.receipt}">
            </div>
          `;
        }
      });
      
      html += `
          </div>
        </div>
      `;
    }
  }

  // 5. Notes / Signature
  if (printNotesInput.value.trim() !== '') {
    html += `<div class="pnl-notes">${printNotesInput.value.replace(/\n/g, '<br>')}</div>`;
  }

  // 6. Footer
  html += `<div class="pnl-footer">${isSi ? 'පරිගණක සකසන ලද වාර්තාව' : 'Computer Generated Report'} | ${new Date().toLocaleString()}</div>`;
  
  // Insert and print
  printArea.innerHTML = html;
  printModal.style.display = 'none';
  window.print();
}

// Handle Form Submit (now using FormData to support file upload)
async function handleFormSubmit(e) {
  e.preventDefault();
  const t = translations[currentLanguage];

  const type = document.querySelector('input[name="type"]:checked').value;
  const category = categoryInput.value;
  const amount = parseFloat(document.getElementById('amount').value);
  const date = dateInput.value;
  const description = document.getElementById('description').value;

  // Build Multipart Form Data for uploading receipt
  const formData = new FormData();
  formData.append('type', type);
  formData.append('category', category);
  formData.append('amount', amount);
  formData.append('date', date);
  formData.append('description', description);
  
  const receiptFile = receiptInput.files[0];
  if (receiptFile) {
    formData.append('receipt', receiptFile);
  } else if (editingTransactionId && currentReceiptFilename) {
    formData.append('receipt', currentReceiptFilename);
  }

  try {
    let res;
    if (editingTransactionId) {
      res = await fetch(`/api/transactions/${editingTransactionId}`, {
        method: 'PUT',
        body: formData
      });
    } else {
      res = await fetch('/api/transactions', {
        method: 'POST',
        body: formData
      });
    }

    if (res.ok) {
      if (editingTransactionId) {
        cancelEditTransaction();
      } else {
        categoryInput.value = '';
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
        receiptInput.value = '';
        receiptPreviewContainer.style.display = 'none';
      }
      
      const txDate = new Date(date);
      const txMonth = String(txDate.getMonth() + 1).padStart(2, '0');
      const txYear = String(txDate.getFullYear());

      filterMonth.value = txMonth;
      
      // Update year dropdown dynamic options when adding new transaction with custom years
      updateYearDropdown(txYear);

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
