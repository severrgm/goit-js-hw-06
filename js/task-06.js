const input = document.querySelector("#validation-input");
const validNumber = Number(input.dataset.length);

const inputBorder = function (e) {
  const userValue = e.target.value.length;

  if (userValue === validNumber) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }

  input.classList.add("invalid");
  input.classList.remove("valid");
  return;
};
input.addEventListener("input", inputBorder);
