chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { toggleFullscreen: true });
  window.close(); // Close the popup after triggering fullscreen
});
