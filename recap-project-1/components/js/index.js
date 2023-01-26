// toggle bookmark picture
// get object image over onclick="onChangeImage(this)"

function onChangeImage(objImg) {
  // getting value from source and check value
  if (objImg.getAttribute("src") != "./assets/bookmark.svg") {
    //setattribute src and alt
    objImg.setAttribute("src", "./assets/bookmark.svg");
    objImg.setAttribute("alt", "bookmarked");
  } else {
    objImg.setAttribute("src", "./assets/bookmark-2.svg");
    objImg.setAttribute("alt", "not bookmarked");
  }
}

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

//localstorage
// create the localStorage with default cards first
const cards = [
  {
    question: "Where was gummy candy invented?",
    answer: "Germany",
    tags: ["trivia", "gummy", "candy"],
    isBookmarked: true,
  },
  {
    question: "What is the best-selling candy in the whole world?",
    answer: "Snickers",
    tags: ["trivia", "chocolate", "candy"],
    isBookmarked: false,
  },
  {
    question: "How many skittles are produced each day?",
    answer: "200 Million",
    tags: ["skittles", "candy", "trivia"],
    isBookmarked: true,
  },
  {
    question: "What does M&M stand for?",
    answer: "Mars&Murrie",
    tags: ["M&M", "chocolate", "candy"],
    isBookmarked: true,
  },
  {
    question: "Was milk chocolate invented in Belgion or Switzerland?",
    answer: "Switzerland",
    tags: ["milk", "candy", "chocolate"],
    isBookmarked: false,
  },
];
// save in localStorage
window.localStorage.setItem("cards", JSON.stringify(cards));
//get item as array of objects
let cardsArray = JSON.parse(localStorage.getItem("cards") || "[]");
console.log(cardsArray);
console.log("typeof: ", typeof cardsArray);
//queryselector
const main = document.querySelector('[data-js="main"]');

cardsArray.forEach(function (card) {
  // createElements
  const selectionEl = document.createElement("section");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");
  const buttonEl = document.createElement("button");
  const spanEl = document.createElement("span");
  const ulEl = document.createElement("ul");
  const liEl = document.createElement("li");

  // create all attritbute,function, for img
  imgEl.setAttribute("onmouseover", "this.style.cursor='pointer'");
  imgEl.setAttribute("onclick", "onChangeImage(this)");

  //create button with function
  buttonEl.setAttribute("onclick", "toggleAnswer(this)");
  buttonEl.textContent = "Show Answer";
  spanEl.classList.add("hidden");

  //filling card with data
  h2El.textContent = card.question;
  spanEl.textContent = card.answer;
  if (card.isBookmarked) {
    imgEl.setAttribute("src", "./assets/bookmark.svg");
    imgEl.setAttribute("alt", "not bookmarked");
  } else {
    imgEl.setAttribute("alt", "bookmarked");
    imgEl.setAttribute("src", "./assets/bookmark-2.svg");
  }
  const tagsArray = card.tags;
  tagsArray.forEach(function (tag) {
    console.log("tagsArray:", tagsArray);
    console.log("tag:", tag);
    liEl.textContent = tag;
  });

  //appending logic
  ulEl.append(liEl);
  selectionEl.append(imgEl, h2El, buttonEl, spanEl, ulEl);
  main.append(selectionEl);
});
