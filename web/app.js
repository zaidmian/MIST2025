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
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Inspiration</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: auto;
    }
    #output {
      margin-top: 20px;
      font-size: 1.1em;
      color: #222;
      background: #f9f9f9;
      padding: 15px;
      border-left: 4px solid #4caf50;
    }
    button {
      padding: 10px 20px;
      font-size: 1em;
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <h1>Random Hadith or Quran Verse on Salah</h1>
  <button onclick="getRandomMessage()">Show Random Message</button>
  <div id="output"></div>

  <script>
    const hadith = [
      'The Prophet (peace be upon him) said: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer..." — Al-Tabarani',
      'The Prophet (peace be upon him) said: "Between a man and shirk and kufr is the abandonment of the prayer." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "The covenant that distinguishes between us and them is prayer..." — Sunan al-Tirmidhi',
      'The Prophet (peace be upon him) said: "Salah is the pillar of religion..." — Ibn Majah',
      'The Prophet (peace be upon him) said: "When a servant stands to pray...his sins fall away." — Sahih Ibn Hibban',
      'The Prophet (peace be upon him) said: "Whoever performs the two cool prayers (Asr and Fajr) will enter Paradise." — Bukhari & Muslim',
      'The Prophet (peace be upon him) said: "The five daily prayers and Jumu’ah to Jumu’ah expiate for what is between them..." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "No Muslim man who performs ablution properly, then prays a prayer with devotion..." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "Shall I not tell you of that by which Allah erases sins and raises ranks?..." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "Pray as you have seen me praying." — Sahih al-Bukhari',
      'The Prophet (peace be upon him) said: "When one of you prays, let him be calm and not peck like a bird." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "When any one of you stands to pray, he is speaking with his Lord..." — Sahih al-Bukhari',
      'The Prophet (peace be upon him) said: "If a person makes ablution and perfects it... his past sins will be forgiven." — Sahih al-Bukhari',
      'The Prophet (peace be upon him) said: "Prayer in congregation is twenty-seven times more rewarding..." — Bukhari & Muslim',
      'The Prophet (peace be upon him) said: "The one who hears the call (to prayer) and does not come..." — Sunan Ibn Majah',
      'The Prophet (peace be upon him) said: "The angels continue to pray for one of you..." — Bukhari & Muslim',
      'The Prophet (peace be upon him) said: "The best prayer after the obligatory prayers is the night prayer." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "Keep up Qiyam al-Layl..." — Sunan al-Tirmidhi',
      'The Prophet (peace be upon him) said: "Indeed, in the prayer, there is calmness." — Sahih Muslim',
      'The Prophet (peace be upon him) said: "The coolness of my eyes is in prayer." — Sunan al-Nasa’i'
    ];

    const verses = [
      '“Establish prayer and give zakah and bow with those who bow [in worship and obedience].” — [Qur’an 2:43]',
      '“Guard strictly [five obligatory] prayers, especially the middle prayer...” — [Qur’an 2:238]',
      '“Indeed, prayer prohibits immorality and wrongdoing...” — [Qur’an 29:45]',
      '“Recite what has been revealed to you of the Book and establish prayer...” — [Qur’an 29:45]',
      '“And establish prayer at the two ends of the day and at the approach of the night...” — [Qur’an 11:114]',
      '“And those who guard their prayers — they will be in gardens, honored.” — [Qur’an 70:34–35]',
      '“But there came after them successors who neglected prayer and pursued desires...” — [Qur’an 19:59]',
      '“Successful indeed are the believers: those who humble themselves in prayer...” — [Qur’an 23:1–2]',
      '“And enjoin prayer on your family, and be patient in offering them...” — [Qur’an 20:132]',
      '“Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.” — [Qur’an 20:14]',
      '“And seek help through patience and prayer...” — [Qur’an 2:45]',
      '“Say, ‘My Lord has commanded justice and that you maintain yourselves [in worship] at every place of prayer.’” — [Qur’an 7:29]',
      '“So woe to those who pray but are heedless of their prayer...” — [Qur’an 107:4–5]',
      '“And establish prayer and fear Him.” — [Qur’an 6:72]',
      '“And those who are constant in their prayer...” — [Qur’an 70:23]',
      '“And establish regular prayers at the two ends of the day and in some watches of the night...” — [Qur’an 11:114]',
      '“And when you have completed the prayer, remember Allah...” — [Qur’an 4:103]',
      '“And We inspired to them the doing of good deeds, establishment of prayer...” — [Qur’an 21:73]',
      '“Those who, if We give them power in the land, establish prayer and give zakah...” — [Qur’an 22:41]',
      '“And perform prayer and give zakah and obey the Messenger...” — [Qur’an 24:56]'
    ];

    function getRandomMessage() {
      const randomIndex = Math.floor(Math.random() * (messages.length + quranVerses.length));
      const message = randomIndex < messages.length ? messages[randomIndex] : quranVerses[randomIndex - messages.length];
      document.getElementById("output").textContent = message;
    }
  </script>

</body>
</html>

