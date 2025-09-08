const boxSize = document.querySelector(".box-1");
const boxColor = document.querySelector(".box-2");
const boxMove = document.querySelector(".box-3");

// 1
const changeSize = () => {
  boxSize.classList.toggle("size");
};
setInterval(changeSize, 1000);

// 2
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
const setrandomColor = () => {
  boxColor.style.backgroundColor = getRandomColor();
};

setInterval(setrandomColor, 1000);

// 3
const getBoxIntoMove = () => {
  boxMove.classList.toggle("move");
};
setInterval(getBoxIntoMove, 1000);
