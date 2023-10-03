// If the popup window is open, close it when the page loads.
// This will only occur on youtube.com pages

window.addEventListener('load', function() {
    const dismissButton = document.getElementById('dismiss-button');
    if (dismissButton) {
      dismissButton.click();
      console.log('[DEBUG] Popup window closed');
    }
  });