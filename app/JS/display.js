import { DOMSelectors } from "./dom";

async function getCharacterData(character) {
  try {
    const response = await fetch(`https://genshin.jmp.blue/characters/${character}`);
    if (response.status != 200) {
      throw new Error(response)
    } else {
      const characterData = await response.json();
      return characterData
    }
  } catch (error) {
    alert("could not find that character")
  }
}

function displayIndividualData(character) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card bg-base-100 w-[20%] justify-around" id="${character.id}">
      <figure>
          <img
            src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/icon-big"
            alt="icon of ${character.name}" class="card-image"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p>${character.title}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline" id="more-btn" data-character-id="${character.id.toLowerCase()}">See More</button>
        </div>
      </div>
    </div>`
  );
  
}

async function getAllData() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      /* console.log(data); */
      DOMSelectors.container.replaceChildren()
      DOMSelectors.moreContainer.replaceChildren()
      for (const character of data) {    /* data.forEach doesn't handle async code --> some individualData responses are resolved earlier and it doesn't wait await calls in its callback, so it puts them out of order */
        /* console.log(character); */
        const individualData = await getCharacterData(character);
        /* console.log(individualData.name); */
        displayIndividualData(individualData);
      }
    }
  } catch (error) {
    alert("hey I could not find that character");
  }
}


export { getCharacterData, displayIndividualData, getAllData };
