console.clear();

const url = "https://swapi.dev/api/people/";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else {
      console.log("Bad Response!");
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();
