import "../CSS/style.css";
import { displayCards, DOMSelectors } from "./display.js";

async function getData() {
  let array = [];
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.forEach(async (character) => {
        const individualResponse = await fetch(
          `https://genshin.jmp.blue/characters/${character}`
        );
        const individualData = await individualResponse.json();
        array.push(individualData);
      });
      return array;
    }
  } catch (error) {
    alert("hey I could not find that character");
  }
}

/* async function getByElement() {
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
    alert("hey I could not find that character");
  }
} */

displayCards(await getData());
