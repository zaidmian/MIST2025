import {CitySelector} from "./location.js";

// Initialize app on DOM load
document.addEventListener("DOMContentLoaded", init);

function init() {
  // Initialization code goes here.
  console.log("Let's gooo!");

  const citySelector = new CitySelector('city-selector-container', (selectedCity) => {
    // This callback function will run when a city is selected
    console.log('Selected city:', selectedCity);
    // Here you would call your prayer time calculation function
    // calculatePrayerTimes(selectedCity.latitude, selectedCity.longitude);
  });
}
