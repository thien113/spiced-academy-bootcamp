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
