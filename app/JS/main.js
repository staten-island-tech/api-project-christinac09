import "../CSS/style.css";
import { getAllData, display, get } from "./display.js";
import { getSearchInput, getSearchInput2 } from "./search.js";
import { getFilteredInput } from "./filter.js";

async function main() {
  await getAllData();
  console.log("cards done loading, can proceed");
  getSearchInput();
  getFilteredInput();
}

async function main2() {
  display(await get());
  getSearchInput2();
  getFilteredInput();
}

/* main(); */
main2();
