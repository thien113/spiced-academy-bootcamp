console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}
function hideSuccess() {
  success.setAttribute("hidden", "");
}
function showSuccess() {
  success.removeAttribute("hidden");
}
window.onload = hideTosError();
window.onload = hideSuccess();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const checkBoxTrue = formElements.tos.checked;

  if (checkBoxTrue) {
    showSuccess();
    hideTosError();
  } else {
    showTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
