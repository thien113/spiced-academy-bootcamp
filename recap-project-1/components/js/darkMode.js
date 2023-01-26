//DarkMode
const bodyDark = document.querySelector('[data-js="dark-mode"]');
const navDark = document.querySelector('[data-js="dark-mode-nav"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');

darkButton.addEventListener("change", () => {
  bodyDark.classList.toggle("dark-mode");
  navDark.classList.toggle("dark-mode");
});
