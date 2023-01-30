console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!
function showWelcomeMesage() {
  console.log("Welcome! You are logged in now.");
}
handleUserLogin(showWelcomeMesage);
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});
