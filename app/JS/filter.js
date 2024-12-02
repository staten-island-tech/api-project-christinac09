import { displayIndividualData } from "./display";
import { DOMSelectors } from "./dom";

async function getFilteredInput() {
    const form = document.querySelector("#filter-form")
    form.addEventListener("change", async function(event) {
        event.preventDefault();
        const input = document.getElementById('element-filter').value;
        console.log(input);
        await getByElement(input)
      })
    
}
async function getByElement(type) {
    try {
        const response = await fetch("https://genshin.jmp.blue/characters/all");
        if (response.status != 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          DOMSelectors.container.replaceChildren()
          DOMSelectors.moreContainer.replaceChildren()
          const filtered = data.filter((character)=>character.vision.toLowerCase()===type)
          console.log(filtered)
          filtered.forEach((character)=>displayIndividualData(character))
        }
      } catch (error) {
        alert("hey I could not find that character");
      }
}
export {getFilteredInput}