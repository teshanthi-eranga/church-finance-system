const { app, BrowserWindow } = require('electron');
const path = require('path');

// Require the server file to start the Express backend
require('./server'); 

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Church Finance System',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // The server runs on localhost:3000
  // Wait a brief moment for the express server to bind, then load the URL
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:3000');
  }, 1000);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
