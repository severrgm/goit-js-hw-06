function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const showColorSpan = document.querySelector(".color");

const showColor = () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  showColorSpan.textContent = currentColor;
};

changeColorBtn.addEventListener("click", showColor);
