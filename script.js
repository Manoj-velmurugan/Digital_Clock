function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = now.toDateString();

  document.getElementById('clock').innerText = timeString;
  document.getElementById('ampm').innerText = ampm;
  document.getElementById('date').innerText = dateString;
}

updateClock();
setInterval(updateClock, 1000);
