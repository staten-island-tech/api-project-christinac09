import { DOMSelectors } from "./dom";

async function getCharacterData(character) {
  try {
    const response = await fetch(`https://genshin.jmp.blue/characters/${character}`);
    if (response.status != 200) {
      throw new Error(response)
    } else {
      const characterData = await response.json();
      return characterData
    }
  } catch (error) {
    alert("could not find that character")
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
  const moreBtn = document.querySelector(`#more-btn[data-character-id="${character.id.toLowerCase()}"]`)
  moreBtn.addEventListener("click", function (event) {
    event.preventDefault;
    DOMSelectors.container.replaceChildren();
    DOMSelectors.moreContainer.replaceChildren();
    showMoreData(character)
  }
  )
}

async function getAllData() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      /* console.log(data); */
      DOMSelectors.container.replaceChildren()
      DOMSelectors.moreContainer.replaceChildren()
      for (const character of data) {    /* data.forEach doesn't handle async code --> some individualData responses are resolved earlier and it doesn't wait await calls in its callback, so it puts them out of order */
        /* console.log(character); */
        const individualData = await getCharacterData(character);
        /* console.log(individualData.name); */
        displayIndividualData(individualData);
      }
    }
  } catch (error) {
    alert("hey I could not find that character");
  }
}

function showMoreData(character) {
  console.log(character)
  DOMSelectors.moreContainer.insertAdjacentHTML("beforeend",
  `<div class="card card-side bg-base-100 w-full h-full shadow-xl p-2" id="${character.id}-more">
        <figure class="flex-shrink-0 w-[45%] p-4 px-6"> <!-- prevents it from shrinking -->
          <img
            src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/card"
            alt="icon of ${character.name}" class="w-[70%] rounded-xl object-cover"/>
        </figure>
        <div class="card-body text-center">
          <div class="card-actions justify-end">
            <a href="" class="btn btn-primary btn-outline" id="back-btn">Back</a>
          </div>
          <h2 class="card-title text-2xl justify-center mb-4">${character.name}</h2>
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
                    <tbody>
                      <tr>
                        <th>${character.skillTalents[0].name}</th>
                        <td>${character.skillTalents[0].unlock}</td>
                        <td>${character.skillTalents[0].description}</td>
                      </tr>
                      <tr>
                        <th>${character.skillTalents[1].name}</th>
                        <td>${character.skillTalents[1].unlock}</td>
                        <td>${character.skillTalents[1].description}</td>
                      </tr>
                      <tr>
                        <th>${character.skillTalents[2].name}</th>
                        <td>${character.skillTalents[2].unlock}</td>
                        <td>${character.skillTalents[2].description}</td>
                      </tr>
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
                    <tbody>
                      <tr>
                        <th>${character.passiveTalents[0].name}</th>
                        <td>${character.passiveTalents[0].unlock}</td>
                        <td>${character.passiveTalents[0].description}</td>
                      </tr>
                      <tr>
                        <th>${character.passiveTalents[1].name}</th>
                        <td>${character.passiveTalents[1].unlock}</td>
                        <td>${character.passiveTalents[1].description}</td>
                      </tr>
                      <tr>
                        <th>${character.passiveTalents[2].name}</th>
                        <td>${character.passiveTalents[2].unlock}</td>
                        <td>${character.passiveTalents[2].description}</td>
                      </tr>
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
                    <tbody>
                      <tr>
                        <th>${character.constellations[0].name}</th>
                        <td>${character.constellations[0].level}</td>
                        <td>${character.constellations[0].description}</td>
                      </tr>
                      <tr>
                        <th>${character.constellations[1].name}</th>
                        <td>${character.constellations[1].level}</td>
                        <td>${character.constellations[1].description}</td>
                      </tr>
                      <tr>
                        <th>${character.constellations[2].name}</th>
                        <td>${character.constellations[2].level}</td>
                        <td>${character.constellations[2].description}</td>
                      </tr>
                      <tr>
                        <th>${character.constellations[3].name}</th>
                        <td>${character.constellations[3].level}</td>
                        <td>${character.constellations[3].description}</td>
                      </tr>
                      <tr>
                        <th>${character.constellations[4].name}</th>
                        <td>${character.constellations[4].level}</td>
                        <td>${character.constellations[4].description}</td>
                      </tr>
                      <tr>
                        <th>${character.constellations[5].name}</th>
                        <td>${character.constellations[5].level}</td>
                        <td>${character.constellations[5].description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <a href="https://genshin-impact.fandom.com/wiki/${character.name}" class="btn btn-outline text-l m-3">See All</a>
          </div>
        </div>
      </div>`
  )
}

export { getCharacterData, displayIndividualData, getAllData };
