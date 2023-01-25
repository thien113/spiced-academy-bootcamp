console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.append(postText);

//create footer elements with class
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const spanFooter = document.createElement("span");
spanFooter.classList.add("post__username");
spanFooter.textContent = "@username";

const spanButton = document.createElement("button");
spanButton.setAttribute("type", "button");
spanButton.classList.add("post__button");
spanButton.addEventListener("click", handleLikeButtonClick);
spanButton.textContent = "♥ Like";

// append to footer
postFooter.append(spanFooter, spanButton);

//apend footer to article
newPost.append(postFooter);

// append
document.body.append(newPost);
