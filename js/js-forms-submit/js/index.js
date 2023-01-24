console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // console log all input attribute
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  const formElements = event.target.elements;
  const age = parseInt(formElements.age.value);
  const badness = parseInt(formElements.badness.value);
  const firstName = formElements.firstName.value;
  console.log(`The age-badeness-sum of ${firstName} is ${age + badness}`);
});
