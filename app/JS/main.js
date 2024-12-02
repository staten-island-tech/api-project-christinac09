import "../CSS/style.css";
import { getAllData } from "./display.js";
import { getSearchInput } from "./search.js";

async function main() {
  await getAllData();
  console.log("cards done loading, can proceed")
  getSearchInput();
}

main()
