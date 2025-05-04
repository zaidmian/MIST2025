import {CitySelector} from "./location.js";
import {showRandomInspiration} from "./content.js";
import {getPrayerTimes} from "./prayertimes.js";

// Initialize app on DOM load
document.addEventListener("DOMContentLoaded", init);

const newInspirationBtn = document.getElementById("newInspirationBtn");

function init() {
  // Initialization code goes here.
  console.log("Let's gooo!");

  const citySelector = new CitySelector('city-selector-container', (selectedCity) => {
    // This callback function will run when a city is selected
    console.log('Selected city:', selectedCity);
    // Here you would call your prayer time calculation function
    // calculatePrayerTimes(selectedCity.latitude, selectedCity.longitude);
    getPrayerTimes(selectedCity);
  });

  // Step 2: Add this JavaScript code to handle dark mode without CSS classes

<script>
  // Get the button and store a reference
  const darkModeToggle = document.getElementById('darkModeToggle');
  const toggleText = darkModeToggle.querySelector('span');
  const toggleIcon = darkModeToggle.querySelector('i');
  
  // Define style objects for light and dark modes
  const lightStyles = {
    body: { backgroundColor: '#f5f5f5', color: '#666666' },
    h1: { color: '#333333' },
    card: { backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' },
    cardTitle: { color: '#333333', borderBottom: '1px solid #eeeeee' },
    cardText: { color: '#666666' },
    listGroupItem: { backgroundColor: '#ffffff', color: '#666666' }
  };
  
  const darkStyles = {
    body: { backgroundColor: '#121212', color: '#e0e0e0' },
    h1: { color: '#ffffff' },
    card: { backgroundColor: '#2d2d2d', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' },
    cardTitle: { color: '#e0e0e0', borderBottom: '1px solid #444444' },
    cardText: { color: '#b0b0b0' },
    listGroupItem: { backgroundColor: '#2d2d2d', color: '#e0e0e0' }
  };
  
  // Check if user previously enabled dark mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    applyDarkMode();
  }
  
  // Add click event to toggle button
  darkModeToggle.addEventListener('click', () => {
    // Check current mode based on localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
      applyLightMode();
    } else {
      applyDarkMode();
    }
  });
  
  // Function to apply dark mode
  function applyDarkMode() {
    // Apply dark mode styles using JavaScript
    applyStyles(darkStyles);
    
    // Update button text and icon
    toggleText.textContent = 'Light Mode';
    toggleIcon.className = 'fas fa-sun';
    
    // Update toggle button style
    darkModeToggle.style.backgroundColor = '#555';
    
    // Save user preference
    localStorage.setItem('darkMode', 'enabled');
  }
  
  // Function to apply light mode
  function applyLightMode() {
    // Apply light mode styles using JavaScript
    applyStyles(lightStyles);
    
    // Update button text and icon
    toggleText.textContent = 'Dark Mode';
    toggleIcon.className = 'fas fa-moon';
    
    // Update toggle button style
    darkModeToggle.style.backgroundColor = '#333';
    
    // Save user preference
    localStorage.setItem('darkMode', 'disabled');
  }
  
  // Helper function to apply styles
  function applyStyles(styles) {
    // Apply body styles
    Object.assign(document.body.style, styles.body);
    
    // Apply heading styles
    document.querySelectorAll('h1').forEach(el => {
      Object.assign(el.style, styles.h1);
    });
    
    // Apply card styles
    document.querySelectorAll('.card').forEach(el => {
      Object.assign(el.style, styles.card);
    });
    
    // Apply card title styles
    document.querySelectorAll('.card-title').forEach(el => {
      Object.assign(el.style, styles.cardTitle);
    });
    
    // Apply card text styles
    document.querySelectorAll('.card-text, .card-body p').forEach(el => {
      Object.assign(el.style, styles.cardText);
    });
    
    // Apply list group item styles
    document.querySelectorAll('.list-group-item').forEach(el => {
      Object.assign(el.style, styles.listGroupItem);
    });
  }
</script>

  newInspirationBtn.addEventListener("click", showRandomInspiration)
  showRandomInspiration();
}

