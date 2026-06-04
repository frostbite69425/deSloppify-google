chrome.storage.sync.get("deslopEnabled", (data) => {
  applyState(data.deslopEnabled);
});

chrome.runtime.onMessage.addListener((message) => {
  applyState(message.deslopEnabled);
});

function applyState(state) {
  const slopNode = document.querySelector(".h7Tj7e");
  if (!slopNode) return;
  slopNode.style.display = state === "OFF" ? "block" : "none";
}
