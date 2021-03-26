const electron = require('electron');
// 创建electron应用
const app = electron.app
// 创建窗口应用
const BrowserWindow = electron.BrowserWindow;
// 声明要打开的窗口
let mainWindow = null;

app.on('ready', () => {
  // 设置打开的窗口大小
  mainWindow = new BrowserWindow( {
    width: 1000,
    height: 800
  });
  // 加载目标页面
  mainWindow.loadFile('index.html');
  // 监听关闭事件，把主窗口设置为null
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})