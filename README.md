# deSloppify Google

A Chrome extension that automatically removes the AI Overview from Google Search results. Togglable — turn it off when you want it, on when you don't. State persists across page loads and browser sessions.

![Badge](https://img.shields.io/badge/manifest-v3-blue) ![License](https://img.shields.io/badge/license-GPL-green)

---

## Why

Google's AI Overview takes up a significant portion of search results and often surfaces before actual useful links. This extension hides it by default. One click brings it back if you need it.

---

## Features

- Automatically hides AI Overview on every Google Search page load
- Toggle on/off via the extension icon — badge shows current state
- State persists across reloads and sessions via `chrome.storage.sync`
- Lightweight — no external dependencies, pure vanilla JS

---

## How It Works

The extension loads a CSS file at `document_start` that hides the AI Overview container by default. A content script checks persisted toggle state on every page load and overrides the CSS if the user has switched it off. The background service worker handles icon click events and uses Chrome's message passing API to communicate state changes to the active tab in real time — no reload required.

---

## Installation (Manual / Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (top right toggle)
4. Click **Load unpacked**
5. Select the project folder

The extension icon will appear in your toolbar. Badge shows **ON** (AI Overview hidden) by default.

---

## Usage

- **ON** — AI Overview is hidden (default)
- **OFF** — AI Overview is visible
- Click the extension icon on any Google Search page to toggle

---

## Tech

- Chrome Extensions Manifest V3
- Chrome Storage API (`chrome.storage.sync`)
- Chrome Scripting API
- Chrome Message Passing (`chrome.tabs.sendMessage` / `chrome.runtime.onMessage`)
- Vanilla JavaScript

---

## License

GPL
