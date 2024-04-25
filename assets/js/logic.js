const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');


// Function to set light or dark mode
function setThemeMode(mode) {
  if (mode === 'dark') {
    container.setAttribute('class', 'dark');
    themeSwitcher.checked = false;
  } else {
    container.setAttribute('class', 'light');
    themeSwitcher.checked = true;
  }
}

// Store the light or dark mode
const storedMode = localStorage.getItem('themeMode');
if (storedMode) {
  setThemeMode(storedMode);
} else {
  setThemeMode('dark');
}

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {

  // If mode is dark, apply light background
  if (container.classList.contains('dark')) {
    container.setAttribute('class', 'light');
    localStorage.setItem('themeMode', 'light');
  }
  // If mode is light, apply dark background
  else {
    container.setAttribute('class', 'dark');
    localStorage.setItem('themeMode', 'dark');
  }});


