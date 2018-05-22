'use strict';

import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null;

const getScreenSize = (): Electron.Rectangle =>
  screen.getDisplayNearestPoint(screen.getCursorScreenPoint()).workArea;

function createMainWindow() {
  const screenSize = getScreenSize();
  const x = Math.floor(screenSize.x + (screenSize.width - 200));
  const y = Math.floor(screenSize.height - (446 - screenSize.y)) + 100;

  const window = new BrowserWindow({
    frame: false,
    transparent: true,
    height: 446,
    width: 400,
    x,
    y,
    alwaysOnTop: true,
  });

  if (isDevelopment) {
    window.webContents.openDevTools({
      mode: 'detach',
    });
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      }),
    );
  }

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});
