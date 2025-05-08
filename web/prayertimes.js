export function getPrayerTimes(location) {
  const dateTime = new Date();
  const currentYear = dateTime.getFullYear();
  const currentMonth = dateTime.getMonth() + 1;
  const currentDay = dateTime.getDate();

  // API URL for Aladhan API
  const API = `https://api.aladhan.com/v1/timings/${currentDay}-${currentMonth}-${currentYear}?latitude=${location.latitude}&longitude=${location.longitude}&method=2&school=1`;

  fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to grab prayer times");
      }
      return response.json();
    })
    .then((data) => { //Data of the JSON returned from the API
      const time = data.data.timings;
      const prayerTimes = {
        fajr: time.Fajr,
        sunrise: time.Sunrise,
        dhuhr: time.Dhuhr,
        asr: time.Asr,
        maghrib: time.Maghrib,
        isha: time.Isha,
      };

      console.log(prayerTimes);
      showPrayerTimes(prayerTimes);
    })
    .catch((error) => {
      console.error("Failed to grab prayer times!", error);
    });
}

function showPrayerTimes(prayerTimes) {
  const container = document.getElementById("prayer-times-container");

  const prayerArray = [
    {
      name: "Fajr",
      time: convertTo12HFormat(prayerTimes.fajr),
      icon: "fa-sun",
      timeValue: getTimeInMinutes(prayerTimes.fajr)
    },
    {
      name: "Sunrise",
      time: convertTo12HFormat(prayerTimes.sunrise),
      icon: "fa-sun",
      timeValue: getTimeInMinutes(prayerTimes.sunrise)
    },
    {
      name: "Dhuhr",
      time: convertTo12HFormat(prayerTimes.dhuhr),
      icon: "fa-sun",
      timeValue: getTimeInMinutes(prayerTimes.dhuhr)
    },
    {
      name: "Asr",
      time: convertTo12HFormat(prayerTimes.asr),
      icon: "fa-sun",
      timeValue: getTimeInMinutes(prayerTimes.asr)
    },
    {
      name: "Maghrib",
      time: convertTo12HFormat(prayerTimes.maghrib),
      icon: "fa-moon",
      timeValue: getTimeInMinutes(prayerTimes.maghrib)
    },
    {
      name: "Isha",
      time: convertTo12HFormat(prayerTimes.isha),
      icon: "fa-moon",
      timeValue: getTimeInMinutes(prayerTimes.isha)
    },
  ];

  // Determine current and next prayer
  const { currentPrayer, nextPrayer } = determineCurrentAndNextPrayer(prayerArray);
  
  // Generate prayer time list items
  const prayerListItems = prayerArray.map((prayer) => {
    const isCurrentPrayer = prayer.name === currentPrayer.name;
    
    return `
      <li class="list-group-item d-flex justify-content-between align-items-center ${isCurrentPrayer ? 'bg-success bg-opacity-25 fw-bold' : ''}">
        <div><i class="fas ${prayer.icon} me-3 ${isCurrentPrayer ? 'text-success' : ''}"></i>${prayer.name}</div>
        <div>${prayer.time}</div>
      </li>
    `;
  }).join("\n");
  
  // Generate next prayer info row
  const nextPrayerInfo = `
    <li class="list-group-item d-flex justify-content-between align-items-center mt-3 bg-success bg-opacity-10 border-success">
      <div class="d-flex align-items-center">
        <i class="fas fa-arrow-right text-success me-3"></i>
        <div>
          <span class="d-block fw-bold">Next Prayer</span>
          <span class="text-success">${nextPrayer.name}</span>
        </div>
      </div>
      <div class="d-flex flex-column align-items-end">
        <div class="badge bg-success rounded-pill p-2">${nextPrayer.time}</div>
        <div class="small text-muted me-1" id="time-remaining"></div>
      </div>
    </li>
  `;

  // Update the container with all prayer times
  container.innerHTML = prayerListItems + nextPrayerInfo;
  
  // Start countdown timer for next prayer
  updateTimeRemaining(nextPrayer.timeValue);
}

//conversion into 12 hour format
function convertTo12HFormat(time24) {
  let [hour, minute] = time24.split(":").map(Number);
  let period = hour < 12 ? "AM" : "PM";
  hour = hour % 12 || 12;
  return `${hour}:${minute.toString().padStart(2,'0')} ${period}`;
}

// Convert time string to minutes for easier comparison
function getTimeInMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

// Determine current and next prayer times
function determineCurrentAndNextPrayer(prayerArray) {
  const now = new Date();
  const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
  
  // Find the first prayer that's after current time
  let nextPrayerIndex = prayerArray.findIndex(prayer => prayer.timeValue > currentTimeInMinutes);
  
  // If no prayer is found after current time, the next prayer is tomorrow's Fajr
  if (nextPrayerIndex === -1) {
    nextPrayerIndex = 0;
  }
  
  // Current prayer is the one before the next prayer (or the last prayer if next is Fajr)
  const currentPrayerIndex = nextPrayerIndex === 0 ? prayerArray.length - 1 : nextPrayerIndex - 1;
  
  return {
    currentPrayer: prayerArray[currentPrayerIndex],
    nextPrayer: prayerArray[nextPrayerIndex]
  };
}

// Update the time remaining display
function updateTimeRemaining(nextPrayerTimeInMinutes) {
  const timeRemainingElement = document.getElementById("time-remaining");
  
  const updateCountdown = () => {
    const now = new Date();
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    const currentTimeInSeconds = currentTimeInMinutes * 60 + now.getSeconds();
    
    // Calculate time until next prayer in seconds
    let nextPrayerTimeInSeconds = nextPrayerTimeInMinutes * 60;
    
    // If next prayer is tomorrow (e.g., next is Fajr and current time is after Isha)
    if (nextPrayerTimeInMinutes < currentTimeInMinutes) {
      nextPrayerTimeInSeconds += 24 * 60 * 60; // Add 24 hours
    }
    
    const diffInSeconds = nextPrayerTimeInSeconds - currentTimeInSeconds;
    
    // Calculate hours, minutes, seconds
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;
    
    // Display in format: "in 2h 30m 45s"
    timeRemainingElement.textContent = `in ${hours}h ${minutes}m`;
  };
  
  // Update immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
