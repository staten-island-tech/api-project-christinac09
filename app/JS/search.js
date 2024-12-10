import { getCharacterData, displayIndividualData, displayCards, getAllData } from "./display.js";
import { DOMSelectors, clearContainers } from "./dom.js";

async function getSearchInput() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    console.log(DOMSelectors.form);
    event.preventDefault();
    const input = DOMSelectors.searchBar.value.toLowerCase();
    if (input.length === 0) {
      alert("bro rly searched for nothing lmao");
    } else {
      clearContainers();
      displaySearchedData(input);
    }
  });
}

async function displaySearchedData(input) {
  const data = await getAllData()
  const characters = [];
  data.forEach((character) => {
    if (character.id.toLowerCase().includes(input.toLowerCase())) {
      characters.push(character);
    }
  });
  if (characters.length === 0) {
    alert(
      "no characters were found with that name. try searching for a different name"
    );
    return;
  } else {
    console.log(characters);
    displayCards(characters);
  }
}

export { getSearchInput };
