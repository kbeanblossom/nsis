// ./main.js
//require('electron-reload')(__dirname);

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const autoUpdater = require('electron-updater').autoUpdater;

require('dotenv').config();
let win = null;

app.on('ready', function () {

  // Implent Auto Update feature
    autoUpdater.on('checking-for-update', () => {
      sendStatusToWindow('Checking for update...');
});
    autoUpdater.on('update-available', (ev, info) => {
      sendStatusToWindow('Update available.');
});
    autoUpdater.on('update-not-available', (ev, info) => {
      sendStatusToWindow('No updates available.');
});
    autoUpdater.on('error', (ev, error) => {
      sendStatusToWindow('Error in auto-updater.');
});
    autoUpdater.on('download-progress', (ev, progressObj) => {
      sendStatusToWindow('download progress...');
});
    autoUpdater.on('update-downloaded', (ev, info) => {
      sendStatusToWindow('Download complete. Installing in 5 seconds');
      setTimeout(function() {
        autoUpdater.quitAndInstall();
      }, 5000)
});


  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});
  win.maximize();

  // Specify entry point
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file',
      slashes: true
    }));


  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
  createWindow()
}
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
