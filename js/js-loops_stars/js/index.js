console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    if (i <= filledStars) {
      star.setAttribute("src", "assets/star-filled.svg");
      star.setAttribute("alt", "star image");
    } else {
      star.setAttribute("src", "assets/star-empty.svg");
      star.setAttribute("alt", "empty star image");
    }
    starContainer.append(star);

    star.addEventListener("click", () => {
      renderStars(i);
    });
  }
}
renderStars(0);
