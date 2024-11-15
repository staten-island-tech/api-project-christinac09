import "./style.css";

async function getData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);
      data.data.forEach((agent) =>
        document
          .querySelector("div")
          .insertAdjacentHTML("afterbegin", `<h1>${agent.name}</h1>`)
      );
    }
  } catch (error) {
    alert("hey i could not find that agent");
  }
}

getData();
