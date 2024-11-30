import { getCharacterData, displayIndividualData } from "./display.js"
import { DOMSelectors } from "./dom.js";

async function getSearchInput() {
    DOMSelectors.form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const input = DOMSelectors.searchBar.value.toLowerCase();
        if (input.length === 0) {
            alert("bro rly searched for nothing lmao")
        } else {
            DOMSelectors.container.replaceChildren();
            displaySearchedData(input);
        }
    })
}

async function displaySearchedData(input) {
    try {
        const response = await fetch("https://genshin.jmp.blue/characters");
        if (response.status != 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          const characters = []
          data.forEach((character) => {
            if (character.includes(input)){
                characters.push(character)
            }
          });
          console.log(characters)
          for (const character of characters) {
            const individualData = await getCharacterData(character);
            displayIndividualData(individualData);
        }
        }
    } catch (error) {
    alert("hey I could not find that character");
    }
}

export {getSearchInput}