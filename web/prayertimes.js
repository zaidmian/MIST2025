
export class PrayerTimes {
 
  function getPrayerTimes(location) {
    
  const dateTime = new Date();
  const currentYear = dateTime.getFullYear();
  const currentMonth = dateTime.getMonth() + 1;
  const currentDay = dateTime.getDate();

  // API URL for Aladhan API
  const API = `https://api.aladhan.com/v1/timingsByAddress/${currentDay}-${currentMonth}-${currentYear}`?location.name;

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
      
    })
    .catch((error) => {
      console.error("Failed to grab prayer times!", error);
    });
}
