const prayerChecks = [
  document.getElementById('fajrCheck'),
  document.getElementById('dhuhrCheck'),
  document.getElementById('asrCheck'),
  document.getElementById('maghribCheck'),
  document.getElementById('ishaCheck')
];

export function setupStreakHandlers() {
  prayerChecks.forEach((check, idx) => {
    check.addEventListener('click', (e) => {handlePrayerCompletionUpdate(idx, e.target.checked)});
  })
}

// whichPrayer will be an int from 0-4 corresponding to Fajr, Dhuhr, Asr, Maghrib, and Isha
// completed will be a boolean value indicating whether the indicated prayer is marked completed (true) or not (false)
export function handlePrayerCompletionUpdate(whichPrayer, completed) {
  console.log(`Prayer completion update: ${whichPrayer} -> ${completed}`);
}