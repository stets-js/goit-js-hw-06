const changeClrButton = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");

changeClrButton.addEventListener("click", changeClrFn);

function changeClrFn() {
  bodyEl.setAttribute("style", `background-color: ${getRandomHexColor()};`);
  colorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
