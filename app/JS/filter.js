import { displayCards, getAllData } from "./display";
import { DOMSelectors, clearContainers } from "./dom";

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
  const data = await getAllData()  
  clearContainers();
  const filtered = data.filter((character)=>character.vision.toLowerCase()===type)
  console.log(filtered)
  displayCards(filtered)
}
export {getFilteredInput}