chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "ON",
  });
  chrome.storage.sync.set({ deslopEnabled: "ON" });
});

const search = `https://www.google.com/search`;

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(search)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "ON" ? "OFF" : "ON";

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    chrome.storage.sync.get("deslopEnabled", async (data) => {
      const toggledData = data.deslopEnabled === "ON" ? "OFF" : "ON";
      chrome.storage.sync.set({ deslopEnabled: toggledData });
      chrome.tabs.sendMessage(tab.id, { deslopEnabled: toggledData });
    });
  }
});
