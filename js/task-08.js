const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  const userData = {
    Email: email.value,
    Password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
});
