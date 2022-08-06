function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentDivEl = document.querySelector("#boxes");
const inputValueEl = document.querySelector(`input[type = "number"]`);
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

createBtnEl.addEventListener("click", createBoxes);

function createBoxes(event) {
  let n = 0;
  let x = 0;
  let firstSizeBoxes = 30;
  while (n < +inputValueEl.value) {
    n += 1;
    x += 10;
    const customDivEl = document.createElement("div");
    customDivEl.style.width = `${firstSizeBoxes + x}px`;
    customDivEl.style.height = `${firstSizeBoxes + x}px`;
    customDivEl.style.backgroundColor = `${getRandomHexColor()}`;
    parentDivEl.append(customDivEl);
  }
  console.log(parentDivEl);
}

destroyBtnEl.addEventListener("click", removeBoxes);

function removeBoxes(event) {
  parentDivEl.innerHTML = "";
  console.log(parentDivEl);
}
