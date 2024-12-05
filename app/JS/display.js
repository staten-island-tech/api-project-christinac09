import { DOMSelectors } from "./dom";

function displayCards(array) {
  array.forEach((character) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card bg-base-100 w-full justify-around" id="${character.id}">
      <figure>
          <img
            src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/icon-big"
            alt="icon of ${character.name}" class="card-image"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p>${character.title}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline" id="more-btn" data-character-id="${character.id.toLowerCase()}">See More</button>
        </div>
      </div>
    </div>`
    )
  );
  addMoreBtns();
}
async function getAllData() {
  try {
    const response = await fetch(`https://genshin.jmp.blue/characters/all`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    alert("could not find that character");
  }
}
function addMoreBtns() {
  const moreBtns = document.querySelectorAll("#more-btn");
  moreBtns.forEach((button) =>
    button.addEventListener("click", async function (event) {
      DOMSelectors.container.replaceChildren();
      DOMSelectors.moreContainer.replaceChildren();
      const character = button.getAttribute("data-character-id");
      const data = await getCharacterData(character);
      showMoreData(data);
    })
  );
}

async function getCharacterData(character) {
  try {
    const response = await fetch(
      `https://genshin.jmp.blue/characters/${character}`
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const characterData = await response.json();
      return characterData;
    }
  } catch (error) {
    alert("could not find that character");
  }
}

function displayIndividualData(character) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card bg-base-100 w-full justify-around" id="${character.id}">
      <figure>
          <img
            src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/icon-big"
            alt="icon of ${character.name}" class="card-image"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p>${character.title}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline" id="more-btn" data-character-id="${character.id.toLowerCase()}">See More</button>
        </div>
      </div>
    </div>`
  );
}

function insertDropdownData(type, character) {
  console.log(type, character);
  if (type === "skills") {
    const table = document.querySelector("#skills-tablebody");
    for (let i = 0; i < 3; i++) {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr>
        <th>${character.skillTalents[i].name}</th>
        <td>${character.skillTalents[i].unlock}</td>
        <td>${character.skillTalents[i].description}</td>
      </tr>`
      );
    }
  } else if (type === "passives") {
    const table = document.querySelector("#passives-tablebody");
    for (let i = 0; i < 3; i++) {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr>
      <th>${character.passiveTalents[i].name}</th>
      <td>${character.passiveTalents[i].unlock}</td>
      <td>${character.passiveTalents[i].description}</td>
    </tr>`
      );
    }
  } else if (type === "constellations") {
    const table = document.querySelector("#constellations-tablebody");
    for (let i = 0; i < 6; i++) {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr>
        <th>${character.constellations[i].name}</th>
        <td>${character.constellations[i].level}</td>
        <td>${character.constellations[i].description}</td>
      </tr>`
      );
    }
  }
}

function showMoreData(character) {
  console.log(character);
  DOMSelectors.moreContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card card-side bg-base-100 w-full h-full shadow-xl p-2" id="${
      character.id
    }-more">
        <figure class="flex-shrink-0 w-[45%] p-4 px-6"> <!-- prevents it from shrinking -->
          <img
            src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/card"
            alt="icon of ${
              character.name
            }" class="w-[70%] rounded-xl object-cover"/>
        </figure>
        <div class="card-body text-center">
          <div class="card-actions justify-end">
            <a href="" class="btn btn-primary btn-outline" id="back-btn">Back</a>
          </div>
          <h2 class="card-title text-2xl justify-center mb-4">${
            character.name
          }</h2>
          <div class="overflow-x-auto">
            <table class="table">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>${character.title}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>${character.description}</td>
                </tr>
                <tr>
                  <th>Release</th>
                  <td>${character.release}</td>
                </tr>
                <tr>
                  <th>Birthday</th>
                  <td>${character.birthday}</td>
                </tr>
                <tr>
                  <th>Nation</th>
                  <td>${character.nation}</td>
                </tr>
                <tr>
                  <th>Affiliation</th>
                  <td>${character.affiliation}</td>
                </tr>
                <tr>
                  <th>Rarity</th>
                  <td>${"☆ ".repeat(character.rarity)}</td>
                </tr>
                <tr>
                  <th>Vision & Weapon</th>
                  <td>${character.vision}, ${character.weapon}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="collapse info">
            <div class="collapse collapse-arrow bg-base-200 m-2" id="skills-collapse">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">Skills</div>
              <div class="collapse-content">
                <div class="overflow-x-auto">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody id="skills-tablebody">
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200 m-2" id="passives-collapse">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">Passive Talents</div>
              <div class="collapse-content">
                <div class="overflow-x-auto">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Unlock</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody id="passives-tablebody">
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200 m-2" id="constellatioins-collapse">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">Constellations</div>
              <div class="collapse-content">
                <div class="overflow-x-auto">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody id="constellations-tablebody">
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <a href="https://genshin-impact.fandom.com/wiki/${
              character.name
            }" class="btn btn-outline text-l m-3">See All</a>
          </div>
        </div>
      </div>`
  );
  insertDropdownData("skills", character);
  insertDropdownData("passives", character);
  insertDropdownData("constellations", character);
}

export { getCharacterData, displayIndividualData, getAllData, displayCards };
