# Digital_Clock
## Date: 10/07/2025
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>TimeTrack</h1>
    <p class="subtitle">Live Digital Clock</p>
    <div class="clock-container">
    <div id="clock">--:--:--</div>
    <p id="ampm">--</p>
    <p id="date">--</p>
    <button onclick="toggle24()">Change to 24 hour format</button>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  background-color: white;
  color: black;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.clock-container{
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding: 30px;
    border-radius: 10px;
}

h1 {
  font-size: 36px;
}

.subtitle {
  font-size: 16px;
  color: black;
}

#clock {
  font-size: 48px;
  margin-top: 30px;
  letter-spacing: 2px;
}

#ampm {
  font-size: 18px;
  margin-top: 10px;
}

#date {
  font-size: 16px;
  color: black;
}

button{
  width: fit-content;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
}

```

## JS : 
```
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

```
## Output:
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/bb7abd6a-cdf2-4deb-a5e1-d153699a8aa3" />


## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
