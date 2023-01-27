const counterBookmark = document.querySelector('[data-js="counter-bookmark"]');
const counterQuestion = document.querySelector('[data-js="counter-question"]');

//get item as array of objects
let cardsArray = JSON.parse(localStorage.getItem("cards") || "[]");

const bookmarkedCards = cardsArray.filter((card) => card.isBookmarked == true);
const bookMarkedCardsLength = bookmarkedCards.length;

const cardsArrayLength = cardsArray.length;
counterBookmark.textContent = bookMarkedCardsLength;
counterQuestion.textContent = cardsArrayLength;
