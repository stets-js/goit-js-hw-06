const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", targettingInput);

function targettingInput(text) {
  if (text.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = text.currentTarget.value;
  }
}
