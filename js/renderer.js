const { ipcRenderer } = require('electron');

const CLASS_LENGTH = 10;
const MAX_POOL_SIZE = 3000;
const FIRST_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALL_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Границы отсечения для снятия смещения по модулю (rejection sampling)
const FIRST_LIMIT = Math.floor(256 / FIRST_CHARS.length) * FIRST_CHARS.length; // 208
const ALL_LIMIT = Math.floor(256 / ALL_CHARS.length) * ALL_CHARS.length;       // 248

const rngBuf = new Uint8Array(64);
let rngIdx = rngBuf.length;
const buttonTimers = new WeakMap();

function nextSecureByte() {
  if (rngIdx >= rngBuf.length) {
    crypto.getRandomValues(rngBuf);
    rngIdx = 0;
  }
  return rngBuf[rngIdx++];
}

function randomChar(alphabet, limit) {
  while (true) {
    const byte = nextSecureByte();
    if (byte < limit) {
      return alphabet.charAt(byte % alphabet.length);
    }
  }
}

function createRandomClass() {
  let res = randomChar(FIRST_CHARS, FIRST_LIMIT);
  for (let i = 1; i < CLASS_LENGTH; i++) {
    res += randomChar(ALL_CHARS, ALL_LIMIT);
  }
  return res;
}

function flashCopied(btn, defaultLabel) {
  const prevTimer = buttonTimers.get(btn);
  if (prevTimer !== undefined) {
    clearTimeout(prevTimer);
  }
  btn.textContent = 'COPIED';
  const timerId = setTimeout(() => {
    btn.textContent = defaultLabel;
    buttonTimers.delete(btn);
  }, 700);
  buttonTimers.set(btn, timerId);
}

function generateSingle() {
  const res = createRandomClass();
  document.getElementById('result').textContent = res;
  ipcRenderer.send('copy', res);
  flashCopied(document.getElementById('generate-single-btn'), 'GENERATE');
}

function copySingle() {
  const text = document.getElementById('result').textContent;
  if (text && text !== '----------') {
    ipcRenderer.send('copy', text);
    flashCopied(document.getElementById('copy-single-btn'), 'COPY');
  }
}

function generatePool() {
  const input = document.getElementById('pool-count');
  const btn = document.getElementById('generate-pool-btn');

  let count = Number.parseInt(input.value, 10);
  if (!Number.isFinite(count) || count < 1) {
    count = 1;
  } else if (count > MAX_POOL_SIZE) {
    count = MAX_POOL_SIZE;
  }
  input.value = String(count);

  const uniquePool = new Set();
  while (uniquePool.size < count) {
    uniquePool.add(createRandomClass());
  }

  ipcRenderer.send('copy', Array.from(uniquePool).join(' '));
  flashCopied(btn, 'GENERATE');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate-single-btn').addEventListener('click', generateSingle);
  document.getElementById('copy-single-btn').addEventListener('click', copySingle);
  document.getElementById('generate-pool-btn').addEventListener('click', generatePool);

  document.getElementById('pool-count').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      generatePool();
    }
  });
});