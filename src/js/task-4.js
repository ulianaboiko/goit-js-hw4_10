const timerInput = document.querySelector("#input");
const timerBtn = document.querySelector("#timer-btn");
const message = document.querySelector("#message");

const handleSetTimerBtn = () => {
  const seconds = parseInt(timerInput.value);
  if (isNaN(seconds) || seconds <= 0) {
    alert("Введіть додатнє число");
    return;
  }

  message.textContent = `Таймер запущено на ${seconds} секунд, потім Ви побачите повідомлення!`;

  setTimeout(() => {
    message.textContent = `Ось і повідомлення :) Пройшло ${seconds} секунд!`;
  }, seconds * 1000);
};
timerBtn.addEventListener("click", handleSetTimerBtn);
