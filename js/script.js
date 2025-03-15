// Get references to the theme button and mode text
const themeButton = document.getElementById('theme-button');
const modeText = document.getElementById('mode-text');
const body = document.body;

// Function to toggle the theme
function toggleTheme() {
  // Check if the body has the light-theme class
  if (body.classList.contains('light-theme')) {
    // Switch to dark theme
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
    modeText.textContent = 'Dark Mode';
  } else {
    // Switch to light theme
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    modeText.textContent = 'Light Mode';
  }
}

// Function to initialize the theme
function initializeTheme() {
  // Get the saved theme from local storage
  const savedTheme = localStorage.getItem('theme');

  // Apply the saved theme (or default to dark theme)
  if (savedTheme === 'light-theme') {
    body.classList.add('light-theme');
    modeText.textContent = 'Light Mode';
  } else {
    body.classList.remove('light-theme');
    modeText.textContent = 'Dark Mode';
  }
}

// Add event listener to the theme button
themeButton.addEventListener('click', toggleTheme);

// Initialize the theme when the page loads
initializeTheme();