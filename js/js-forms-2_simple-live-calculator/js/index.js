console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

const eventHandler = () => {
  result.textContent = firstInput.value * secondInput.value;
};

firstInput.addEventListener("input", eventHandler);
secondInput.addEventListener("input", eventHandler);
