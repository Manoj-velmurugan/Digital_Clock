let is24hourformat = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = "";
  if (!is24hourformat) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = now.toDateString();

  document.getElementById('clock').innerText = timeString;
  document.getElementById('ampm').innerText = is24hourformat ? '' : ampm;
  document.getElementById('date').innerText = dateString;
}

function toggle24() {
  is24hourformat = !is24hourformat;
  updateClock();
}

updateClock();
setInterval(updateClock, 1000);
