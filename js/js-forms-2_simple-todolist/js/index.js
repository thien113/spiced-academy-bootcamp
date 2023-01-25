console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // gives whole Data
  const formData = new FormData(event.target);

  //gives objects with attribute
  const formDataAsObjects = Object.fromEntries(formData);

  //create li element
  const listItem = document.createElement("li");

  // getvalues of headline and task
  const headline = formDataAsObjects.headline;
  const task = formDataAsObjects.task;

  //parse value
  listItem.textContent = `Headline: ${headline} Task: ${task}`;

  //appending logic
  todoList.append(listItem);

  // after submitting logic
  event.target.reset();
  event.target.elements.headline.focus();
});
