const decrBtn = document.querySelector("button[data-action='decrement']");
const incrBtn = document.querySelector("button[data-action='increment']");
let value = document.querySelector("#value");
let counterValue = 0;

const decr = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incr = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrBtn.addEventListener("click", decr);
incrBtn.addEventListener("click", incr);
