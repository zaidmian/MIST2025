import {setupCitySelector} from "./location.js";
import {showRandomInspiration} from "./content.js";
import {setupStreakHandlers} from "./streak.js";
import {setupDarkModeToggle} from "./darkmode.js";
import {setupEidCounter} from "./eid.js";

// Initialize app on DOM load
document.addEventListener("DOMContentLoaded", init);

const newInspirationBtn = document.getElementById("newInspirationBtn");

function init() {
  // Initialization code goes here.
  console.log("Let's gooo!");

  // const citySelector = new CitySelector('cityList', (selectedCity) => {
  //   // This callback function will run when a city is selected
  //   console.log('Selected city:', selectedCity);
  //   // Here you would call your prayer time calculation function
  //   getPrayerTimes(selectedCity);
  // });
  setupCitySelector();

  newInspirationBtn.addEventListener("click", showRandomInspiration)
  showRandomInspiration();
  setupStreakHandlers();
  setupDarkModeToggle();
  setupEidCounter()
}

