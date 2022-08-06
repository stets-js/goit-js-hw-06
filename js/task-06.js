const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", validateInput);

function validateInput(event) {
  const validatedLength = +inputEl.dataset.length;
  const inputedText = event.currentTarget;
  if (inputedText.value.length !== validatedLength) {
    inputedText.classList.remove("valid");
    inputedText.classList.add("invalid");
    inputEl.style.backgroundColor = "pink";
  } else {
    inputedText.classList.remove("invalid");
    inputedText.classList.add("valid");
    inputEl.style.backgroundColor = "PaleGreen";
  }
}
