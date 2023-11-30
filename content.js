function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  } catch (error) {
    console.error('Error toggling fullscreen:', error);
  }
}
