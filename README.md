# SalahSYNC

<p align="center">
  <img src="https://img.shields.io/badge/MIST-2025-brightgreen" alt="MIST 2025">
  <img src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue" alt="Frontend">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.0-purple" alt="Bootstrap">
</p>

SalahSYNC is a simple, intuitive Islamic prayer times web application built for the 2025 Muslim Interscholastic Tournament (MIST) Software Design Competition. It helps Muslims maintain consistency in their daily prayers through a blend of accurate prayer timing information and motivational features.

## 🌟 Features

- **Location-Based Prayer Times**: Uses the Aladhan API to fetch accurate prayer timings based on selected location
- **Prayer Tracking System**: Mark completed prayers and build consecutive prayer streaks
- **Achievement System**: Earn badges for maintaining prayer streaks (5, 10, 30, and 100 days)
- **Inspirational Content**: Random Quranic verses and hadiths related to prayer
- **Eid Countdown**: Visual countdown to upcoming Eid celebrations
- **Responsive Design**: Works seamlessly across all device sizes
- **Dark Mode**: Toggle between light and dark interfaces
- **User Feedback System**: Built-in system for user feedback and suggestions

## 🧰 Technology Stack

- **HTML5/CSS3**: Modern semantic markup and styling
- **JavaScript (ES6+)**: Modular code organization
- **Bootstrap 5**: Responsive UI components
- **LocalStorage API**: Client-side data persistence
- **Aladhan API**: Accurate prayer time calculations
- **Font Awesome**: Icons and visual elements

## 📋 Project Structure

```
web/
├── app.js             # Main application initializer
├── content.js         # Inspirational content module
├── darkmode.js        # Theme switching functionality
├── eid.js             # Eid countdown timer logic
├── index.html         # Main application page
├── location.js        # Location selector and geolocation
├── prayertimes.js     # Prayer time calculations and display
└── streak.js          # Prayer streak tracking system
```

## 🚀 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/zaidmian/MIST2025.git
   ```

2. Open the `web/index.html` file in your browser or serve using a local server.

3. Select your location to view accurate prayer times.

4. Use the checkboxes to track your daily prayers and build your streak.

## 🧠 Design Philosophy

SalahSYNC aims to solve a common challenge for Muslims - maintaining prayer consistency in today's fast-paced world. By combining accurate prayer times with motivational features, the app helps convert knowledge of prayer into consistent action, aligning with the 2025 MIST theme "Turning knowledge into action."

The interface is intentionally simple and focused, avoiding the complexity found in many existing prayer apps while still providing essential features that encourage consistent worship.

## 📱 Offline Functionality

SalahSYNC works offline after initial load through:
- LocalStorage for user preferences and streak data
- Caching of prayer times to reduce API calls

## 🔮 Future Enhancements

- Built-in Qibla direction compass
- Customizable calculation methods
- Islamic calendar with Hijri dates
- Prayer audio for Adhan notifications
- Multi-language support

## 📄 License

This project was created for the MIST 2025 Software Design Competition.

---

*SalahSYNC: Turning prayer knowledge into consistent action.*
