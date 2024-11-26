import "../CSS/style.css";
import { displayIndividualData } from "./display.js";

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

getData();
