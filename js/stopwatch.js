let onState = false;
let startTime = 0;
let elapsed = 0;
let timerInterval;


function toggleStopwatch() {
  if (onState) {
    stopwatchStop();
    
  } else {
    stopwatchStart();

  }
  onState = !onState;
}

function stopwatchStart() {
  startTime = Date.now() - elapsed;
  document.getElementById("stopwatch-go-button").innerText = "Stop";
  document.getElementById("stopwatch-go-button").classList.add("stop");
  timerInterval = setInterval(() => {
    elapsed = Date.now() - startTime;
    renderTime(elapsed)
  })
}

function stopwatchStop() {
  clearInterval(timerInterval)
  document.getElementById("stopwatch-go-button").innerText = "Start";
  document.getElementById("stopwatch-go-button").classList.remove("stop");
}

function renderTime(ms) {
  let minutes = String(Math.floor(ms / 60000)).padStart(2, '0')
  let seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')
  let milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0')
  document.getElementById("timer").innerHTML = `${minutes}:${seconds}.${milliseconds}`
}

function reset() {
  onState = false;
  elapsed = 0;
  renderTime(0);
  stopwatchStop();
}