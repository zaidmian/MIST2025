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
    getPrayerTimes(selectedCity);
  });

  newInspirationBtn.addEventListener("click", showRandomInspiration)
  showRandomInspiration();
}

