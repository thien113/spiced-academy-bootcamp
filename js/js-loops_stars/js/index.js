console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  filledStars(2);
  //--^-- your code here --^--
}
function filledStars(input) {
  for (let starsFilled = 1; starsFilled <= input; starsFilled++) {
    const star = document.createElement("img");
    star.setAttribute("src", "assets/star-filled.svg");
    starContainer.append(star);
  }
  for (let starEmpty = 1; starEmpty <= 5 - input; starEmpty++) {
    const star = document.createElement("img");
    star.setAttribute("src", "assets/star-empty.svg");
    starContainer.append(star);
  }
}
renderStars();
