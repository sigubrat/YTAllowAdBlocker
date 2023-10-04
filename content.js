// Start observing the document with the configured parameters
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        console.log("[DEBUG] Mutation detected, checking for specific element...");
        const specificElement = document.querySelector('ytd-enforcement-message-view-model');
        if (specificElement) {
          console.log("[DEBUG] Specific element found, starting new observer...");
          observer.disconnect(); // stop observing the document
          
          // Start observing the specific element
          const newObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.type === 'childList') {
                console.log("[DEBUG] Mutation detected, checking for popup...");
                const dismissButton = document.getElementById('dismiss-button');
                if (dismissButton) {
                  dismissButton.click();
                  dismissButton.remove(); // removes the popup from the DOM
                  console.log('[DEBUG] DISGUSTING UGLY POPUP WAS CLOSED HELLO NOTICE ME HELLO IT WORKED HOPEFULLY');
          
                  const playButton = document.querySelector('button.ytp-play-button');
                  if (playButton) {
                    console.log("[DEBUG] Play button found, resuming video...");
                    playButton.click(); // resumes the video
                  } else {
                    console.log("[DEBUG] Play button not found, cannot resume video.");
                  }
                } else {
                  console.log("[DEBUG] Dismiss button not found, cannot close popup.");
                }
              }
            });
          });

          newObserver.observe(specificElement, { childList: true, subtree: true });
        }
      }
    });
});

observer.observe(document, { childList: true, subtree: true });
