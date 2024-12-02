import "../CSS/style.css";
import { getAllData } from "./display.js";
import { getSearchInput } from "./search.js";

async function main() {
  await getAllData();
  console.log("cards done loading, can proceed")
  getSearchInput();
}

/* main() */
async function testing() {
  try {
    const response = await fetch(`https://genshin.jmp.blue/characters/tartaglia`);
    if (response.status != 200) {
      throw new Error(response)
    } else {
      const character = await response.json();
      document.querySelector("#more-container").insertAdjacentHTML('beforeend',
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
          <!-- <h2 class="card-title justify-center">${character.name}</h2>
          <p>Release: ${character.release}</p>
          <p>Birthday: ${character.birthday}</p>
          <p>${character.title}</p>
          <p>${character.nation}</p>
          <p>${character.affiliation}</p>
          <p>${character.description}</p>
          <p>Rarity: ${character.rarity}</p>
          <br>
          <p>${character.vision}, ${character.weapon}</p>
          <br>
          <p>skills, passives, constellations</p> */ -->
        </div>
        
      </div>`)
    }
  } catch (error) {
    alert("could not find that character")
  }
}
testing()