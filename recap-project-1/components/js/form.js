// form handler
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // gives whole Data
  const formData = new FormData(event.target);
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

  //reset the form after submit
  form.reset();
});
// show input text length and display it
const inputQuestion = document.querySelector('[data-js="question"]');
const inputAnswer = document.querySelector('[data-js="answer"]');

/*eventhandlerevent is always the whole form
while event.target is the html where smth is triggered
-> eg. inputQuestion -> inside this you add a event. everytime this event is triggered js knows in which html it happens
-> get the html by event.target
*/
const leftCharacter = (event) => {
  const input = event.target;
  const inputLength = 150 - input.value.length;
  const newValueCharacters = input.nextElementSibling;
  newValueCharacters.textContent = `${inputLength} Character/s left`;
};
inputQuestion.addEventListener("input", leftCharacter);
inputAnswer.addEventListener("input", leftCharacter);
