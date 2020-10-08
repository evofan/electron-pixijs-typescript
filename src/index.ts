import { app as ElectronApp, BrowserWindow } from "electron";

let mainWindow: Electron.BrowserWindow;

ElectronApp.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 640,
    resizable: true,
    webPreferences: {
      nodeIntegration: true // false,
      // preload: `./preload.js`,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

ElectronApp.on("window-all-closed", () => {
  ElectronApp.quit();
});
