// app.js

// Function to get advice from the API
async function getAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
  
      // Extracting advice from the response and displaying it
      const advice = data.slip.advice;
      document.getElementById('advice').textContent = `"${advice}"`;
    } catch (error) {
      console.error('Error fetching advice:', error);
      document.getElementById('advice').textContent = 'Oops! Something went wrong. Please try again later.';
    }
  }
  