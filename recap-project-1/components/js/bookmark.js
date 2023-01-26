//get cards objects in localstorage
let cardsArray = JSON.parse(localStorage.getItem("cards") || "[]");

//filter all existing cards in localstorage after isBookmarked == true
const bookmarkedCards = cardsArray.filter((card) => card.isBookmarked == true);
// show into bookmark html
const main = document.querySelector('[data-js="bookMarked"]');

bookmarkedCards.forEach(function (card) {
  // createElements
  const selectionEl = document.createElement("section");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");
  const buttonEl = document.createElement("button");
  const spanEl = document.createElement("span");
  const ulEl = document.createElement("ul");
  const liEl = document.createElement("li");

  //create button with function
  buttonEl.setAttribute("onclick", "toggleAnswer(this)");
  buttonEl.textContent = "Show Answer";
  spanEl.classList.add("hidden");

  //filling card with data
  h2El.textContent = card.question;
  spanEl.textContent = card.answer;
  imgEl.setAttribute("src", "./assets/bookmark.svg");
  imgEl.setAttribute("alt", "not bookmarked");
  const tagsArray = card.tags;
  tagsArray.forEach(function (tag) {
    liEl.textContent = tag;
  });

  //appending logic
  ulEl.append(liEl);
  selectionEl.append(imgEl, h2El, buttonEl, spanEl, ulEl);
  main.append(selectionEl);
});

//cards logic
// toggle Answer
function toggleAnswer(objButton) {
  //get next element of Button
  const spanElement = objButton.nextElementSibling;
  //toggle class hidden
  spanElement.classList.toggle("hidden");
  //call function that set textcontent depending on class hidden
  toggleAnswerText(objButton);
}

// toggle textcontent button
function toggleAnswerText(objButton) {
  const spanElement = objButton.nextElementSibling;
  if (spanElement.classList.value != "hidden") {
    objButton.textContent = "Hide Answer";
  } else {
    objButton.textContent = " Show Answer";
  }
}
