[![Members](https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=&logo=discord&logoColor=white&labelColor=black&color=%23f3f3f3&query=$.approximate_member_count&url=https%3A%2F%2Fdiscord.com%2Fapi%2Finvites%2FENB7RbxVZE%3Fwith_counts%3Dtrue)](https://discord.gg/ENB7RbxVZE)&nbsp;[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=5865F2&logoColor=black&labelColor=black&color=%23f3f3f3)](https://github.com/CrystalSystems/crystal-v2.0/blob/main/LICENSE)

# Class Generator

Minimalist desktop tool for generating CSS class names. Built with [Electron](https://github.com/electron/electron).

### ✨ Features

- **One-click** generation.
- **Auto-copy** — the class is automatically copied to the clipboard upon generation, or you can use the <code>COPY</code> button to copy it manually.
- **High collision resistance** — with a 10-character length and a pool of 62 characters, there are approximately **700 quadrillion ($$7 \times 10^{17}$$)** possible combinations. Even if you generate one class every second, it would take about **22 billion years** for a significant chance of a collision to occur. The probability of a duplicate in a real-world project is practically zero.
- **Portable** — no installation required. Just run the executable.

<p align="center">
<img src="https://raw.githubusercontent.com/AndrewShedov/class-generator/refs/heads/main/assets/gif.gif"/>
</p>

### 🚀 Installation

Download the latest version for your OS from the [Releases](https://github.com/AndrewShedov/class-generator/releases) page:

- 🪟 [Class Generator.exe](https://github.com/AndrewShedov/class-generator/releases/download/v1.0.0/Class.Generator.exe) (Windows Portable)
- 🐧 [Class Generator.deb](https://github.com/AndrewShedov/class-generator/releases/download/v1.0.0/Class.Generator.deb) (Linux Debian/Ubuntu)


### 🛠️ Customization

If you want to tailor the tool to your specific needs, you can easily modify the source code:

- **Adjust Generation Logic:** Update the <code>const classLength</code> to change the number of characters, or modify the <code>const chars</code> string to change the available character pool in <code>[index.html](https://github.com/AndrewShedov/class-generator/blob/main/index.html)</code>.

- **Toggle "Always on Top":** In <code>[main.js](https://github.com/AndrewShedov/class-generator/blob/main/main.js)</code>, you can change alwaysOnTop: true to false if you don't want the window to stay above other applications.

#### How to apply changes:

1. Download the [source code](https://github.com/AndrewShedov/class-generator/archive/refs/tags/v1.0.0.zip).

2. Open the project folder in your terminal.

3. Install dependencies:

```bash
npm install
```

4. Build the application for your OS:

Windows:

```bash
npm run build:win
```

Linux:

```bash
npm run build:linux
```

After the build finishes, your custom executable will be waiting in the dist folder. All other files can be deleted.

[![SHEDOV.TOP](https://img.shields.io/badge/SHEDOV.TOP-black?style=for-the-badge)](https://shedov.top/) 
[![CRYSTAL](https://img.shields.io/badge/CRYSTAL-black?style=for-the-badge)](https://crystal.you/AndrewShedov)
[![Discord](https://img.shields.io/badge/Discord-black?style=for-the-badge&logo=discord&color=black&logoColor=white)](https://discord.gg/ENB7RbxVZE)
[![Telegram](https://img.shields.io/badge/Telegram-black?style=for-the-badge&logo=telegram&color=black&logoColor=white)](https://t.me/ShedovTop)
[![X](https://img.shields.io/badge/%20-black?style=for-the-badge&logo=x&logoColor=white)](https://x.com/AndrewShedov)
[![VK](https://img.shields.io/badge/VK-black?style=for-the-badge&logo=vk)](https://vk.com/ShedovTop)
[![VK Video](https://img.shields.io/badge/VK%20Video-black?style=for-the-badge&logo=vk)](https://vkvideo.ru/@ShedovTop)
[![YouTube](https://img.shields.io/badge/YouTube-black?style=for-the-badge&logo=youtube)](https://www.youtube.com/@AndrewShedov)
 
