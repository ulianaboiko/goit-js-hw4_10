const gameArea = document.querySelector(".game-area");
const gameScore = document.querySelector(".score");
const gameTimer = document.querySelector(".timer");
const clickBtn = document.querySelectorAll(".click-btn");

let score = 0;
let timeLeft = 20;
let timer;

const startGame = () => {
  score = 0;
  timeLeft = 20;
  gameScore.textContent = "Очки: 0";
  gameTimer.textContent = "Час: 20";

  clickBtn.forEach((btn) => (btn.disabled = false));

  timer = setInterval(() => {
    timeLeft--;
    gameTimer.textContent = `Час: ${timeLeft}`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
};

const endGame = () => {
  clearInterval(timer);
  clickBtn.forEach((btn) => (btn.disabled = true));

  alert(`Час вийшов! Ви набрали: ${score}  очок`);
};

clickBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    score++;
    gameScore.textContent = `Очки: ${score}`;
  });
});

startGame();
