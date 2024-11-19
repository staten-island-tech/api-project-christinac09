import "../CSS/style.css";

const DOMSelectors = {
  container: document.getElementById("cards-container"),
};

async function getData() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.forEach(async (character) => {
        const individualResponse = await fetch(
          `https://genshin.jmp.blue/characters/${character}`
        );
        const individualData = await individualResponse.json();
        console.log(individualData);
        const individualImg = await fetch(
          `https://genshin.jmp.blue/characters/${character}/icon`
        );
        displayIndividualData(individualData, individualImg);
      });
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

async function displayIndividualData(character, image) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="w-1/6 m-8 m-auto">
      <h2>${character.name}</h2>
      <h3>${character.title}</h3>
      <img src="${image}" alt="icon of ${character.name}" class="card-img">
    </div>`
  );
}
getData();
