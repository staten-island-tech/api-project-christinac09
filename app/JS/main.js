import "../CSS/style.css";
import { getAllData, displayCards } from "./display.js";
import { getSearchInput } from "./search.js";
import { getFilteredInput } from "./filter.js";
import { startGame } from "./game.js";

let currentScore = 0;
async function main() {
  displayCards(await getAllData());
  console.log("cards done loading")
  getSearchInput();
  getFilteredInput();
  startGame(currentScore);
}

main();
