const form = document.querySelector(".login-form");
let message = "";

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    message = window.alert("All fields must be filled!");
  } else {
    console.log(formData);
    form.reset();
  }
}
