import "../CSS/style.css";
import { getAllData, displayCards } from "./display.js";
import { getSearchInput } from "./search.js";
import { getFilteredInput } from "./filter.js";

async function main() {
  displayCards(await getAllData());
  getSearchInput();
  getFilteredInput();
}

main();
