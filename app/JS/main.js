import "../CSS/style.css";
import { getAllData } from "./display.js";
import { getSearchInput } from "./search.js";
import { addMoreButtons } from "./more.js";

async function main() {
  await getAllData();
  console.log("cards done loading")
  await getSearchInput();
  await addMoreButtons();
}

main()