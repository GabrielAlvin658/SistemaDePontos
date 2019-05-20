import { app, BrowserWindow, BrowserView } from 'electron';
import { join } from 'path';

let win

function createWindow () {
  
  win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    frame: false,
    icon: join(__dirname, 'img/icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.on('ready', createWindow)