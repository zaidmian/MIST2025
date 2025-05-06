const darkModeToggle = document.getElementById("darkModeToggle");

export function setupDarkModeToggle() {
  // Check saved preference
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";

  // Set initial state
  darkModeToggle.checked = darkModeEnabled;
  applyTheme(darkModeEnabled);

  // Listen for changes
  darkModeToggle.addEventListener("change", function () {
    applyTheme(this.checked);
    localStorage.setItem("darkMode", this.checked);
  });
}

// Apply theme based on dark mode setting
function applyTheme(isDarkMode) {
  if (isDarkMode) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
  }
}