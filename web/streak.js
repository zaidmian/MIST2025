const prayerChecks = [
  document.getElementById('fajrCheck'),
  document.getElementById('dhuhrCheck'),
  document.getElementById('asrCheck'),
  document.getElementById('maghribCheck'),
  document.getElementById('ishaCheck')
];

const prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

export function setupStreakHandlers() {
  prayerChecks.forEach((check, idx) => {
    check.addEventListener('click', (e) => {handlePrayerCompletionUpdate(idx, e.target.checked)});
  })
}

// whichPrayer will be an int from 0-4 corresponding to Fajr, Dhuhr, Asr, Maghrib, and Isha
// completed will be a boolean value indicating whether the indicated prayer is marked completed (true) or not (false)
export function handlePrayerCompletionUpdate(whichPrayer, completed) {
  console.log(`Prayer completion update: ${whichPrayer} -> ${completed}`);
  let streakData = JSON.parse(localStorage.getItem("prayerStreak"));
  
  if (streakData == null) {
    streakData = {
      streak: 0,
      today: {
        date: new Date().toDateString(),
        prayers: {
          fajr: false,
          dhuhr: false,
          asr: false,
          maghrib: false,
          isha: false,
        },
      },
    };
  }

  streakData.today.prayers[prayerNames[whichPrayer]] = completed;

  let prayerCheckPassed = true;
  
  for (let prayer in streakData.today.prayers) {
    if (streakData.today.prayers[prayer] === false) {
      prayerCheckPassed = false;
      break;
    }
  }

  if (prayerCheckPassed) {
      const currentDay = new Date().toDateString();
      if (streakData.today.date !== currentDay) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (yesterday.toDateString() === streakData.today.date) {
           streakData.streak += 1;
        } else {
          streakData.streak = 1;
        }
        streakData.today.date = currentDay;
      }
  }

  localStorage.setItem("prayerStreak", JSON.stringify(streakData));
}

