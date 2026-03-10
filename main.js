const { app, BrowserWindow, ipcMain, clipboard } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 200,
    title: "Class Generator",
    resizable: false,
    alwaysOnTop: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('copy', (event, text) => {
  clipboard.writeText(text);
});