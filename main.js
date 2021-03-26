const electron = require('electron');
const app = electron.app
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false// v12.0.0 需要加上这句require才不会报错
    }
  });
  mainWindow.loadFile('index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})