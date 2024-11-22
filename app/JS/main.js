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
        const individualURL = `https://genshin.jmp.blue/characters/${character}/icon`;
        displayIndividualData(individualData, individualURL);
      });
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

async function displayIndividualData(character, image) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    /* `<div class="w-1/6 my-8 mx-8 border-2 border-white">
      <h2 class="text-center">${character.name}</h2>
      <h3 class="text-center">${character.title}</h3>
      <img src="${image}" alt="icon of ${character.name}" class="card-img">
    </div>` */
    `<div class="card bg-base-100 w-96 shadow-xl" id="${character.id}">
      <figure>
        <img
          src="${image}"
          alt="icon of ${character.name}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p>${character.title}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline">See More</button>
        </div>
      </div>
    </div>`
  );
}
getData();
