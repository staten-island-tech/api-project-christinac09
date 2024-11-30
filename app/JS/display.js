const DOMSelectors = {
  container: document.getElementById("cards-container"),
};

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
            src="https://genshin.jmp.blue/characters/${character.id}/icon-big"
            alt="icon of ${character.name}" class="card-image"/>
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



export { getCharacterData, displayIndividualData };
