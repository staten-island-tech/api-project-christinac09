import "../CSS/style.css";
import { getCharacterData, displayIndividualData } from "./display.js";
import { getSearchInput } from "./search.js";

async function getData() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      /* console.log(data); */
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

async function main() {
  await getData();
  await getSearchInput();
}

main()