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
