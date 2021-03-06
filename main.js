const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

const ipc = require('electron').ipcMain
const fs = require('fs');

// 準備ができたタイミングで呼ばれるイベント
app.on('ready', function() {
    // メインウィンドウを作成
    // fs.writeFileSync("test.txt", 'data');

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

// 同期メッセージの受信
ipc.on('test', function(event, _) {
    event.sender.send('test-reply', 'pong')
})