// const input = document.querySelector("#validation-input");

// const inputBorder = function (event) {
//   input.classList.add("invalid");
//   input.classList.remove("valid");

//   switch (event.currentTarget.value.length) {
//     case Number(event.target.dataset.length):
//       input.classList.replace("invalid", "valid");
//       break;
//     case 0:
//       input.classList.remove("invalid");
//       break;
//   }
// };

// input.addEventListener("input", inputBorder);

const input = document.querySelector("#validation-input");
const validNumber = Number(input.dataset.length);

const inputBorder = function (event) {
  const userValue = event.target.value.length;

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
