const scaleEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
scaleEl.setAttribute("value", 16);

scaleEl.addEventListener("input", makeScaleText);

function makeScaleText(e) {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
}
