function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function handleStartClick() {
  startBtn.disabled = true;
  startBtn.style.backgroundColor = 'gray';
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function handleStopClick() {
  startBtn.disabled = false;
  startBtn.style.backgroundColor = '';
  clearInterval(intervalId);
}

startBtn.addEventListener('click', handleStartClick);
stopBtn.addEventListener('click', handleStopClick);
