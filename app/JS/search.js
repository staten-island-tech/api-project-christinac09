import { getCharacterData, displayIndividualData, displayCards } from "./display.js";
import { DOMSelectors } from "./dom.js";

async function getSearchInput() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    console.log(DOMSelectors.form);
    event.preventDefault();
    const input = DOMSelectors.searchBar.value.toLowerCase();
    if (input.length === 0) {
      alert("bro rly searched for nothing lmao");
    } else {
      DOMSelectors.container.replaceChildren();
      DOMSelectors.moreContainer.replaceChildren();
      displaySearchedData(input);
    }
  });
}

async function displaySearchedData(input) {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters/all");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
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
  } catch (error) {
    alert("hey I could not find that character");
  }
}

export { getSearchInput };
