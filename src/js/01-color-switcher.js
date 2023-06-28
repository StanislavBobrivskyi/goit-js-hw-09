// Функція для генерації випадкового шестнадцяткового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Елементи кнопок
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null; // Ідентифікатор інтервалу для зміни кольору

// Функція для зміни кольору фону
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

// Обробник кліку на кнопку "Start"
function handleStartClick() {
  startBtn.disabled = true;
  startBtn.style.backgroundColor = 'gray'; // Деактивуємо кнопку "Start"
  intervalId = setInterval(changeBackgroundColor, 1000); // Запускаємо інтервал для зміни кольору
}

// Обробник кліку на кнопку "Stop"
function handleStopClick() {
  startBtn.disabled = false;
  startBtn.style.backgroundColor = ''; // Активуємо кнопку "Start"
  clearInterval(intervalId); // Зупиняємо інтервал для зміни кольору
}

// Додаємо обробники подій до кнопок
startBtn.addEventListener('click', handleStartClick);
stopBtn.addEventListener('click', handleStopClick);
