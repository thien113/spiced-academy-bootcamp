console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

// every addEventListener execute a function
//either a before-defined function

//arrow function
const eventHandler = () => {
  result.textContent = firstInput.value * secondInput.value;
};
// or a function that will directly implemented inside it
firstInput.addEventListener("input", eventHandler);
secondInput.addEventListener("input", eventHandler);

/*
In any case: eventlistener has 2 parameters, an event trigger eg input
and a function (before-defined or on the getgo)
*/
