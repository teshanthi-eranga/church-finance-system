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

const transactionsList = document.getElementById('transactionsList');
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
    const res = await fetch(`/api/export-csv?lang=${currentLanguage}&t=${Date.now()}`);
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

  // Table Headers
  const ths = document.querySelectorAll('.records-table th');
  if (ths.length >= 6) {
    ths[0].textContent = t.thDate;
    ths[1].textContent = t.thType;
    ths[2].textContent = t.thDesc;
    ths[3].textContent = t.thCat;
    ths[4].textContent = t.thAmt;
    ths[5].textContent = t.thAct;
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

    // Highlight border left style based on transaction type
    let borderStyle = '';
    let typeBadge = '';
    if (isIncome) {
      borderStyle = 'border-left: 4.5px solid var(--income-color);';
      typeBadge = `<span class="badge type-badge-income"><i class="fa-solid fa-arrow-trend-up"></i> ${t.badgeIncome}</span>`;
    } else if (isDonation) {
      borderStyle = 'border-left: 4.5px solid var(--donation-color);';
      typeBadge = `<span class="badge type-badge-donation"><i class="fa-solid fa-hand-holding-heart"></i> ${t.badgeDonation}</span>`;
    } else {
      borderStyle = 'border-left: 4.5px solid var(--expense-color);';
      typeBadge = `<span class="badge type-badge-expense"><i class="fa-solid fa-arrow-trend-down"></i> ${t.badgeExpense}</span>`;
    }

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

    // Construct receipt link button badge next to details
    const receiptBtn = tx.receipt ? `
      <span class="badge" onclick="viewReceipt('${tx.receipt}')" style="background-color: rgba(16, 185, 129, 0.15); color: var(--income-color); border: 1px solid rgba(16, 185, 129, 0.25); cursor: pointer; margin-left: 0.5rem; display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; padding: 0.15rem 0.4rem; border-radius: 4px; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='rgba(16, 185, 129, 0.25)'" onmouseout="this.style.backgroundColor='rgba(16, 185, 129, 0.15)'">
        <i class="fa-solid fa-paperclip"></i> ${currentLanguage === 'si' ? 'ලදුපත' : (currentLanguage === 'en' ? 'Receipt' : 'ලදුපත (Receipt)')}
      </span>
    ` : '';

    tr.innerHTML = `
      <td style="${borderStyle} padding-left: 12px;">${tx.date}</td>
      <td>${typeBadge}</td>
      <td><strong>${tx.description || '-'}</strong> ${receiptBtn}</td>
      <td><span class="badge">${catLabel}</span></td>
      <td class="text-right ${amtClass}">${sign} LKR ${amtStr}</td>
      <td class="text-center" style="display: flex; gap: 0.5rem; justify-content: center; align-items: center;">
        <button class="btn-edit-icon" onclick="startEditTransaction(${JSON.stringify(tx).replace(/"/g, '&quot;')})" title="${currentLanguage === 'si' ? 'සංස්කරණය කරන්න' : 'Edit'}">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-danger-icon" onclick="deleteTransaction(${tx.id})" title="${currentLanguage === 'si' ? 'මකා දැමන්න' : 'Delete'}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;
    transactionsList.appendChild(tr);
  });
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
  const printPeriodType = printPeriodSelect.value;
  
  let transactionsToPrint = latestTransactions;
  let selectedPeriod = filterMonth.options[filterMonth.selectedIndex].text + ' ' + filterYear.value;
  
  // If printing full history, fetch all transactions from server
  if (printPeriodType === 'all') {
    selectedPeriod = currentLanguage === 'si' ? 'සම්පූර්ණ ඉතිහාසයම' : (currentLanguage === 'en' ? 'All-time Full History' : 'සම්පූර්ණ ඉතිහාසයම (All-time)');
    try {
      const res = await fetch('/api/transactions');
      transactionsToPrint = await res.json();
    } catch (err) {
      console.error('Error fetching all transactions for printing:', err);
    }
  }

  // Clear print area
  printArea.innerHTML = '';
  
  // 1. Construct Header
  let printHTML = `
    <div class="print-header">
      <h1>${printTitleInput.value}</h1>
      <p>${currentLanguage === 'si' ? 'මුද්‍රිත දිනය' : 'Printed Date'}: ${new Date().toLocaleDateString()} | ${currentLanguage === 'si' ? 'කාල සීමාව' : 'Period'}: ${selectedPeriod}</p>
    </div>
  `;
  
  // 2. Add Stats Grid if checked (calculates totals of transactionsToPrint dynamically)
  if (printShowCardsCheck.checked) {
    let printIncome = 0;
    let printDonation = 0;
    let printExpense = 0;
    
    transactionsToPrint.forEach(tx => {
      if (tx.type === 'income') printIncome += tx.amount;
      else if (tx.type === 'donation') printDonation += tx.amount;
      else if (tx.type === 'expense') printExpense += tx.amount;
    });
    
    const printBalance = (printIncome + printDonation) - printExpense;

    printHTML += `
      <div class="print-grid">
        <div class="print-card">
          <span>${currentLanguage === 'si' ? 'මුළු ආදායම' : 'Total Income'}</span>
          <h3>${formatLKR(printIncome)}</h3>
        </div>
        <div class="print-card">
          <span>${currentLanguage === 'si' ? 'මුළු පරිත්‍යාග' : 'Total Donations'}</span>
          <h3>${formatLKR(printDonation)}</h3>
        </div>
        <div class="print-card">
          <span>${currentLanguage === 'si' ? 'මුළු වියදම' : 'Total Expense'}</span>
          <h3>${formatLKR(printExpense)}</h3>
        </div>
        <div class="print-card">
          <span>${currentLanguage === 'si' ? 'ඉතිරි ශේෂය' : 'Net Balance'}</span>
          <h3>${formatLKR(printBalance)}</h3>
        </div>
      </div>
    `;
  }
  
  // 3. Add Chart image if checked (only makes sense for current selection or if data exists)
  if (printShowChartCheck.checked && expenseChartInstance) {
    const chartImgUrl = expenseChartCanvas.toDataURL('image/png');
    printHTML += `
      <div class="print-chart-container">
        <h4 style="margin-bottom: 10px;">${currentLanguage === 'si' ? 'මූල්‍ය විශ්ලේෂණ ප්‍රස්ථාරය' : 'Financial Chart Breakdown'}</h4>
        <img src="${chartImgUrl}" class="print-chart-image">
      </div>
    `;
  }
  
  // 4. Add Transaction list table if checked
  if (printShowTableCheck.checked) {
    let tableHTML = `
      <table class="print-table">
        <thead>
          <tr>
            <th>${currentLanguage === 'si' ? 'දිනය' : 'Date'}</th>
            <th>${currentLanguage === 'si' ? 'වර්ගය' : 'Type'}</th>
            <th>${currentLanguage === 'si' ? 'විස්තරය' : 'Details'}</th>
            <th>${currentLanguage === 'si' ? 'කාණ්ඩය' : 'Category'}</th>
            <th class="text-right">${currentLanguage === 'si' ? 'මුදල' : 'Amount'}</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    if (transactionsToPrint.length === 0) {
      tableHTML += `<tr><td colspan="5" style="text-align: center;">${currentLanguage === 'si' ? 'කිසිදු දත්තයක් නොමැත' : 'No records available'}</td></tr>`;
    } else {
      transactionsToPrint.forEach(tx => {
        const isIncome = tx.type === 'income';
        const isDonation = tx.type === 'donation';
        const amtClass = isIncome ? 'inc-amt' : (isDonation ? 'don-amt' : 'exp-amt');
        const sign = (isIncome || isDonation) ? '+' : '-';
        const amtStr = tx.amount.toLocaleString('en-LK', { minimumFractionDigits: 2 });
        
        let canonicalValue = tx.category;
        for (const lang of ['si', 'en', 'both']) {
          const allLangCats = [...categories[lang].income, ...categories[lang].donation, ...categories[lang].expense];
          const match = allLangCats.find(c => c.value === tx.category || c.label === tx.category);
          if (match) {
            canonicalValue = match.value;
            break;
          }
        }
        const currentLangCats = [...categories[currentLanguage].income, ...categories[currentLanguage].donation, ...categories[currentLanguage].expense];
        const matchCurrent = currentLangCats.find(c => c.value === canonicalValue);
        let catLabel = matchCurrent ? matchCurrent.label : tx.category;
        
        // Render colored type badges in print layout
        let printTypeBadge = '';
        if (isIncome) printTypeBadge = `<span class="badge type-badge-income">${t.badgeIncome}</span>`;
        else if (isDonation) printTypeBadge = `<span class="badge type-badge-donation">${t.badgeDonation}</span>`;
        else printTypeBadge = `<span class="badge type-badge-expense">${t.badgeExpense}</span>`;

        tableHTML += `
          <tr>
            <td>${tx.date}</td>
            <td>${printTypeBadge}</td>
            <td><strong>${tx.description || '-'}</strong></td>
            <td>${catLabel}</td>
            <td class="text-right ${amtClass}">${sign} LKR ${amtStr}</td>
          </tr>
        `;
      });
    }
    
    tableHTML += `</tbody></table>`;
    printHTML += tableHTML;
  }
  
  // 5. Add Receipt Images if checked
  if (printShowReceiptsCheck.checked) {
    const txsWithReceipts = transactionsToPrint.filter(tx => tx.receipt);
    if (txsWithReceipts.length > 0) {
      printHTML += `
        <div style="page-break-before: always; margin-top: 30px;" class="print-receipts-section">
          <h3 style="border-bottom: 2px solid #000000; padding-bottom: 8px; margin-bottom: 20px; font-size: 16px;">
            ${currentLanguage === 'si' ? 'අමුණා ඇති ලදුපත් / බිල්පත්' : (currentLanguage === 'en' ? 'Attached Receipts / Bills' : 'අමුණා ඇති ලදුපත් (Attached Receipts)')}
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      `;
      
      txsWithReceipts.forEach(tx => {
        const ext = tx.receipt.split('.').pop().toLowerCase();
        // Only display images in the printable layout, as PDFs cannot be printed inside layout divs directly
        if (ext !== 'pdf') {
          const amtStr = tx.amount.toLocaleString('en-LK', { minimumFractionDigits: 2 });
          printHTML += `
            <div style="border: 1px solid #cccccc; padding: 10px; border-radius: 6px; text-align: center; page-break-inside: avoid; background-color: #fafafa;">
              <p style="font-size: 11px; margin-bottom: 8px; font-weight: bold; color: #333333;">
                ${tx.date} - ${tx.description || tx.category} (LKR ${amtStr})
              </p>
               <img src="/uploads/${tx.receipt}" style="max-width: 100%; max-height: 280px; object-fit: contain; display: block; margin: 0 auto; border: 1px solid #eeeeee;">
            </div>
          `;
        }
      });
      
      printHTML += `
          </div>
        </div>
      `;
    }
  }

  // 6. Add Custom Remarks/Notes
  if (printNotesInput.value.trim() !== '') {
    printHTML += `
      <div class="print-notes">${printNotesInput.value.replace(/\n/g, '<br>')}</div>
    `;
  }
  
  // Insert to print area
  printArea.innerHTML = printHTML;
  
  // Hide modal and trigger print
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
