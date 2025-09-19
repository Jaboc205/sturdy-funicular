let onState = false;
let startTime = 0;
let lapStartTime = 0;
let elapsed = 0;
let elapsedLapTime = 0;
let timerInterval;
let lapCount = 0;

// start and stop the timer
function toggleStopwatch() {
  if (onState) {
    stopwatchStop();
  } else {
    stopwatchStart();
  }
  onState = !onState;
}

// timer starts
function stopwatchStart() {
  startTime = Date.now() - elapsed;
  lapStartTime = Date.now() - elapsedLapTime;
  document.getElementById("stopwatch-go-button").innerText = "Stop";
  document.getElementById("stopwatch-go-button").classList.add("stop");
  timerInterval = setInterval(() => {
    elapsed = Date.now() - startTime;
    elapsedLapTime = Date.now() - lapStartTime;
    renderTime(elapsed, elapsedLapTime)
  })
  
}

// timer stops
function stopwatchStop() {
  clearInterval(timerInterval)
  document.getElementById("stopwatch-go-button").innerText = "Start";
  document.getElementById("stopwatch-go-button").classList.remove("stop");
}

// renders the timer to the main clock and lap clock
function renderTime(ms, lapms) {
  let minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
  let seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  let milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  let lapMinutes = String(Math.floor(lapms / 60000)).padStart(2, '0');
  let lapSeconds = String(Math.floor((lapms % 60000) / 1000)).padStart(2, '0');
  let lapMilliseconds = String(Math.floor((lapms % 1000) / 10)).padStart(2, '0');
  document.getElementById("timer").innerHTML = `${minutes}:${seconds}.${milliseconds}`;
  if (lapCount < 9) {
      document.getElementById("active-lap").innerHTML = `Lap ${lapCount + 1}: ${lapMinutes}:${lapSeconds}.${lapMilliseconds}`;
  } else {
    document.getElementById("active-lap").innerHTML = "";
  }
}

// resets all fields and elements to 0
function reset() {
  onState = false;
  elapsed = 0;
  elapsedLapTime = 0;
  lapCount = 0;
  renderTime(0);
  stopwatchStop();
  document.getElementById("laps-list").innerHTML = "";
  document.getElementById("lap-button").classList.remove("max-laps");
  document.getElementById("active-lap").innerHTML = "";
}

// saves the lap time and starts a new lap
function lap() {
  const ms = elapsed;
  const lapsList = document.getElementById("laps-list");
  const li = document.createElement("li");
  if (onState == true) {
    if (lapCount < 9) {
      lapCount += 1;
      let minutes = String(Math.floor(ms / 60000)).padStart(2, '0')
      let seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')
      let milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0')
      li.textContent = `Lap ${lapCount}: ${minutes}:${seconds}.${milliseconds}`;
      lapsList.prepend(li);
    } else {
      window.alert("You've reached the maximum amount of laps. Press 'reset' to start over")
    }
  } else {
    window.alert("You must start the timer to record a lap time")
  }

  if (lapCount == 9) {
    document.getElementById("lap-button").classList.add("max-laps");
    const li2 = document.createElement("li");
    li2.textContent ="Max laps reached"
    lapsList.prepend(li2);
  }
}