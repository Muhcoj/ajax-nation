// assets/js/ticker.js
document.addEventListener('DOMContentLoaded', function() {
  // Function to update the ticker with new content
  function updateTicker(tickerItems) {
    const ticker = document.getElementById('ticker');
    if (!ticker) return;
    
    const tickerList = ticker.querySelector('.ticker-items');
    if (!tickerList) return;
    
    // Add new ticker items to the top
    tickerItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'ticker-item';
      li.innerHTML = `
        <span class="ticker-time">${item.time}</span>
        <span class="ticker-content">${item.content}</span>
      `;
      
      // Add the new item to the top of the list with a fade-in effect
      li.style.opacity = '0';
      tickerList.insertBefore(li, tickerList.firstChild);
      
      // Trigger reflow
      void li.offsetWidth;
      
      // Fade in the new item
      li.style.transition = 'opacity 0.5s ease-in-out';
      li.style.opacity = '1';
    });
  }
  
  // Function to poll for new ticker items (simulated in this example)
  // In a real implementation, this would fetch from an API endpoint
  function pollForUpdates() {
    // Example: In a real implementation, this would be an API call
    // fetch('/api/ticker-updates')
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.items && data.items.length > 0) {
    //       updateTicker(data.items);
    //     }
    //   })
    //   .catch(error => console.error('Error fetching ticker updates:', error));
    
    // Simulated update for demonstration
    const shouldUpdate = Math.random() > 0.7; // 30% chance of an update
    
    if (shouldUpdate) {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const updates = [{
        time: timeString,
        content: 'This is a simulated live update at ' + timeString
      }];
      
      updateTicker(updates);
    }
  }
  
  // If ticker exists on the page, set up polling
  const ticker = document.getElementById('ticker');
  if (ticker) {
    // Poll for updates every 10 seconds
    setInterval(pollForUpdates, 10000);
    
    // Add manual refresh button functionality
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh Updates';
    refreshButton.className = 'ticker-refresh-btn';
    refreshButton.style.margin = '10px';
    refreshButton.style.padding = '5px 10px';
    refreshButton.style.backgroundColor = '#f0f0f0';
    refreshButton.style.border = '1px solid #ddd';
    refreshButton.style.borderRadius = '4px';
    refreshButton.style.cursor = 'pointer';
    
    refreshButton.addEventListener('click', function() {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const updates = [{
        time: timeString,
        content: 'Manual refresh triggered at ' + timeString
      }];
      
      updateTicker(updates);
    });
    
    ticker.parentNode.insertBefore(refreshButton, ticker);
  }
});