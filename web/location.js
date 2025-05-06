import {getPrayerTimes} from "./prayertimes.js";

// Predefined locations with coordinates
const northAmericanCities = [
  {name: "New York, USA", latitude: 40.7128, longitude: -74.006},
  {name: "Toronto, Canada", latitude: 43.6532, longitude: -79.3832},
  {name: "Chicago, USA", latitude: 41.8781, longitude: -118.2426},
  {name: "Los Angeles, USA", latitude: 34.0549, longitude: -87.6298},
  {name: "Vancouver, Canada", latitude: 49.2827, longitude: -123.1207},
  {name: "Houston, USA", latitude: 29.7601, longitude: -95.3701},
  {name: "Dearborn, USA", latitude: 42.3223, longitude: -83.1763},
  {name: "Philadelphia, USA", latitude: 39.9526, longitude: -75.1652},
  {name: "Detroit, USA", latitude: 42.3297, longitude: -83.0425},
  {name: "Washington DC, USA", latitude: 38.9072, longitude: -77.0369},
  {name: "San Francisco, USA", latitude: 37.7749, longitude: -122.4194},
  {name: "Montreal, Canada", latitude: 45.5019, longitude: -73.5674},
  {name: "Surrey, Canada", latitude: 49.1913, longitude: -122.8490},
  {name: "Halifax, Canada", latitude: 44.6509, longitude: -63.5923},
  {name: "Barrie, Canada", latitude: 44.3894, longitude: -79.6903},
  {name: "Mississauga, Canada", latitude: 43.5853, longitude: -79.6450},
  {name: "Vaughan, Canada", latitude: 43.8262, longitude: -79.5562},
  {name: "Markham, Canada", latitude: 43.8599, longitude: -79.3350},
  {name: "Dallas, USA", latitude: 32.7767, longitude: -96.7970},
  {name: "Ajax, Canada", latitude: 43.8611, longitude: -79.0259},
  {name: "Scarborough, Canada", latitude: 43.7764, longitude: -79.2318},
]

const citiesDropdownList = document.getElementById("cityList");
const selectedCity = document.getElementById("selectedCity");
const useLocation = document.getElementById("useLocation");

export function setupCitySelector() {
  const sortedCities = northAmericanCities.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  // Create dropdown UI
  selectedCity.innerHTML = "Select your city ";

  citiesDropdownList.innerHTML = sortedCities.map(city => `
    <li>
      <a class="dropdown-item" href="#" data-city='${JSON.stringify(city)}'>${city.name}</a>
    </li>
    `).join("\n");
  const listItems = citiesDropdownList.getElementsByTagName("li");
  for (let listItem of listItems) {
    listItem.addEventListener("click", (e) => {
      let city = JSON.parse(e.target.getAttribute("data-city"));
      citySelected(city);
    })
  }

  useLocation.addEventListener("click", () => {
    getUserLocation();
  })
}

export function citySelected(selectedCity) {
  document.getElementById("selectedCity").innerHTML = selectedCity.name;
  console.log(selectedCity);
  getPrayerTimes(selectedCity);
}

function getUserLocation() {
  if (navigator.geolocation) {
    useLocation.innerHTML = '<div class="spinner-border spinner-border-sm" role="status"></div>'
    useLocation.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Find the closest city to user's current location
        const closestCity = findClosestCity(
          position.coords.latitude,
          position.coords.longitude
        );

        // Update dropdown to show the closest city
        selectedCity.innerHTML = closestCity.name;

        // Trigger the change event
        citySelected(closestCity);

        // Reset button
        useLocation.innerHTML = '<i class="fas fa-location-crosshairs"></i>';
        useLocation.disabled = false;
      },
      () => {
        alert('Unable to retrieve your location. Please select a city from the dropdown.');
        useLocation.textContent = '<i class="fas fa-location-crosshairs"></i>';
        useLocation.disabled = false;
      }
    );
  } else {
    alert('Geolocation is not supported by your browser. Please select a city from the dropdown.');
  }
}

function findClosestCity(userLat, userLng) {
  // Calculate distance between two points using Haversine formula
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }

  // Find the closest city
  let closestCity = northAmericanCities[0];
  let minDistance = getDistance(
    userLat, userLng,
    northAmericanCities[0].latitude,
    northAmericanCities[0].longitude
  );

  for (let i = 1; i < northAmericanCities.length; i++) {
    const city = northAmericanCities[i];
    const distance = getDistance(userLat, userLng, city.latitude, city.longitude);
    if (distance < minDistance) {
      minDistance = distance;
      closestCity = city;
    }
  }

  return closestCity;
}
