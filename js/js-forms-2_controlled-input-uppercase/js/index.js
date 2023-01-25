console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  event.target.value = event.target.value.toUpperCase();
});
