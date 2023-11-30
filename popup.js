document.addEventListener('DOMContentLoaded', function() {
    var fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {toggleFullscreen: true});
      });
    });
  });
  