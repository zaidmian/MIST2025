export function setupEidCounter() {
  // Set the Eid Al Adha date - June 6th, 2025
  const eidDate = new Date('June 6, 2025 00:00:00').getTime();

  // DOM elements for countdown display
  const daysElement = document.getElementById('countdown-days');
  const hoursElement = document.getElementById('countdown-hours');
  const minutesElement = document.getElementById('countdown-minutes');
  const secondsElement = document.getElementById('countdown-seconds');

  // Function to update the countdown
  function updateCountdown() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the time difference
    const timeDifference = eidDate - now;

    if (timeDifference > 0) {
      // Calculate days, hours, minutes, seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Update the display
      daysElement.textContent = days;
      hoursElement.textContent = hours < 10 ? '0' + hours : hours;
      minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
      secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
    } else {
      // Eid has arrived
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';

      // Display Eid Mubarak message
      const countdownElement = document.getElementById('eidCountdown');
      if (countdownElement) {
        countdownElement.innerHTML = '<div class="alert alert-success py-5 text-center">' +
          '<h2 class="mb-3"><i class="fas fa-star"></i> Eid Mubarak! <i class="fas fa-star"></i></h2>' +
          '<p class="mb-0">May Allah accept your good deeds, forgive your transgressions and ease the suffering of all people around the globe.</p>' +
          '</div>';
      }
    }
  }

  // Initial call
  updateCountdown();

  // Update every second
  setInterval(updateCountdown, 1000);
}