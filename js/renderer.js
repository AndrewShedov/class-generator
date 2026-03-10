const { ipcRenderer } = require('electron');

const classLength = 10;

function generate() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let res = chars.charAt(Math.floor(Math.random() * 52));

  for (let i = 1; i < classLength; i++) {
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById('result').innerText = res;
  ipcRenderer.send('copy', res);
}

function copyResult() {
  const text = document.getElementById('result').innerText;
  if (text !== "----------") {
    ipcRenderer.send('copy', text);
  }
}
