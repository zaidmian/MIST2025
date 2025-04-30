const year = 2025;
const month = 4;
const day = 30;

export const prayerTimes = {
  fajr: new Date(`${year}-${month}-${day}T04:39:00`),
  sunrise: new Date(`${year}-${month}-${day}T06:08:00`),
  dhuhr: new Date(`${year}-${month}-${day}T13:14:00`),
  asr: new Date(`${year}-${month}-${day}T18:12:00`),
  maghrib: new Date(`${year}-${month}-${day}T20:18:00`),
  isha: new Date(`${year}-${month}-${day}T$21:49:00`),
};

export function showPrayerTimes(times, cardbody) {
  const prayers = [
    { id: "fajr", name: "Fajr", time: times.fajr, icon: "fa-sun" },
    { id: "sunrise", name: "Sunrise", time: times.sunrise, icon: "fa-sun" },
    { id: "dhuhr", name: "Dhuhr", time: times.dhuhr, icon: "fa-sun" },
    { id: "asr", name: "Asr", time: times.asr, icon: "fa-sun" },
    { id: "maghrib", name: "Maghrib", time: times.maghrib, icon: "fa-moon" },
    { id: "isha", name: "Isha", time: times.isha, icon: "fa-moon" },
  ];
}