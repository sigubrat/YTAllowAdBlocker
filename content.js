// If the popup window is open, close it when the page loads.
// This will only occur on youtube.com pages

// Function to check for the dismiss button and click it
function checkAndClickButton() {
    const dismissButton = document.getElementById('dismiss-button');
    if (dismissButton) {
        dismissButton.click();
        dismissButton.remove();
        console.log('[DEBUG] Popup window closed');
        
        const playButton = document.querySelector('button.ytp-play-button');
        if (playButton) {
            console.log("[DEBUG] Play button found, resuming video...");
            playButton.click(); // resumes the video
        }
        
        // Clear the interval once we've found and clicked the button
        clearInterval(intervalId);
    }
}

// Set up a polling interval to check for the button every 1000ms
const intervalId = setInterval(checkAndClickButton, 1000);

