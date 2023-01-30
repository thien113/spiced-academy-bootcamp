console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}
function hide(userName) {
  console.log(`${userName} is hidden`);
}
handleUserLogin(showWelcomeMessage);
handleUserLogin(hide);

//handerUserLogin passes a function with a parameter as a parameter
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now(arrow function).`);
});

/*
anonymous function is called with no name and passes userName as parameter
just like an addvenetlistener
handlerUserLogin(
  function(userName) 
)

function is consolelog smth

*/
