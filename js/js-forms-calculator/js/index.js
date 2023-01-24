console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const a = parseInt(formElements.numberA.value);
  const b = parseInt(formElements.numberB.value);
  const operator = formElements.operator.value;

  if (operator == "addition") {
    return (resultOutput.textContent = add(a, b));
  } else if (operator == "subtraction") {
    return (resultOutput.textContent = subtract(a, b));
  } else if (operator == "multiplication") {
    return (resultOutput.textContent = multiply(a, b));
  } else {
    return (resultOutput.textContent = divide(a, b));
  }

  // --^-- write your code here --^--
});
