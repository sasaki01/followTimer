const { app, BrowserWindow } = require('electron')
const path = require('node:path')

let win

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 220,
        height: 220,
        alwaysOnTop: true,                 // 常に前面
        frame: true,                      // 枠なし（PiP風）
        transparent: false,                 // 背景透過
        skipTaskbar: false,                 // Dockに出さない
        fullscreenable: true,             // フルスクリーン化可能
    })

    // 🔑 macOS: すべてのデスクトップ + フルスクリーンアプリに表示
    win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    win.setAlwaysOnTop(true, 'screen-saver'); // より強制的に最前面
    win.loadFile("./index.html");
})
