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
      icon: "fa-sun"
    },
    {
      name: "Sunrise",
      time: convertTo12HFormat(prayerTimes.sunrise),
      icon: "fa-sun"
    },
    {
      name: "Dhuhr",
      time: prayerTimes.dhuhr,
      icon: "fa-sun"
    },
    {
      name: "Asr",
      time: prayerTimes.asr,
      icon: "fa-sun"
    },
    {
      name: "Maghrib",
      time: prayerTimes.maghrib,
      icon: "fa-moon"
    },
    {
      name: "Isha",
      time: prayerTimes.isha,
      icon: "fa-moon"
    },
  ];

  container.innerHTML = prayerArray.map((prayer) => `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div><i class="fas ${prayer.icon} me-3"></i>${prayer.name}</div>
      <div>${prayer.time}</div>
    </li>
  `).join("\n");
}

function convertTo12HFormat(time24) {
  // Do some magic
  // Return 12H format.
  return time24;
}

