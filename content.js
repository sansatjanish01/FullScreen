chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggleFullscreen) {
      toggleFullscreen();
    }
  });
  
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }  