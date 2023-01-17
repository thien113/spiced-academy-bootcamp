console.clear();
// declaring some variables
const bodyElement = document.querySelector('[data-js="body"]');
const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
const buttonLight = document.querySelector('[data-js="light-mode-button"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');

// darkmode function
buttonDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

// Lightmode function
buttonLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

// Toggle dark mode
buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
