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
