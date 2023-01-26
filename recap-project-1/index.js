// toggle bookmark picture
function onChangeImage(objImg) {
  if (objImg.getAttribute("src") != "./assets/bookmark.svg") {
    objImg.setAttribute("src", "./assets/bookmark.svg");
    objImg.setAttribute("alt", "bookmarked");
  } else {
    objImg.setAttribute("src", "./assets/bookmark-2.svg");
    objImg.setAttribute("alt", "not bookmarked");
  }
}

// toggle Answer
function toggleAnswer(objButton) {
  const spanElement = objButton.nextElementSibling;
  spanElement.classList.toggle("hidden");
  toggleAnswerText(objButton);
}

function toggleAnswerText(objButton) {
  const spanElement = objButton.nextElementSibling;
  if (spanElement.classList.value != "hidden") {
    objButton.textContent = "Hide Answer";
  } else {
    objButton.textContent = " Show Answer";
  }
}

// form handler
const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

window.onload = form.addEventListener("submit", (event) => {
  event.preventDefault();
  // gives whole Data
  const formData = new FormData(event.target);
  console.log("main?:", main);
  //gives objects with attribute
  const formDataAsObjects = Object.fromEntries(formData);

  //create Card all Elements
  const selectionEl = document.createElement("section");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");
  const buttonEl = document.createElement("button");
  const spanEl = document.createElement("span");
  const ulEl = document.createElement("ul");
  const liEl = document.createElement("li");

  // create all attritbute,function, for img
  imgEl.setAttribute("src", "./assets/bookmark-2.svg");
  imgEl.setAttribute("alt", "not bookmarked");
  imgEl.setAttribute("onmouseover", "this.style.cursor='pointer'");
  imgEl.setAttribute("onclick", "onChangeImage(this)");

  //create button with function
  buttonEl.setAttribute("onclick", "toggleAnswer(this)");
  buttonEl.textContent = "Show Answer";
  spanEl.classList.add("hidden");

  //filling card with data
  h2El.textContent = formDataAsObjects.question;
  spanEl.textContent = formDataAsObjects.answer;
  liEl.textContent = formDataAsObjects.tag;

  //appending logic
  ulEl.append(liEl);
  selectionEl.append(imgEl, h2El, buttonEl, spanEl, ulEl);
  main.append(selectionEl);
  form.reset();
});
