const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

const ipc = require('electron').ipcMain
const fs = require('fs');

// 準備ができたタイミングで呼ばれるイベント
app.on('ready', function() {
    // メインウィンドウを作成
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

// 同期メッセージの受信
ipc.on('test', function(event, _) {
    event.sender.send('test-reply', 'pong')
})