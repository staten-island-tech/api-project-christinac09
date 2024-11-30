import { DOMSelectors } from "./dom";
import { getCharacterData } from "./display";

async function addMoreButtons() {
    const moreBtn = document.querySelectorAll("#more-btn")
    moreBtn.forEach((button)=>button.addEventListener("click", async function() {
            DOMSelectors.container.replaceChildren();
            const character = button.getAttribute("data-character-id")
            console.log(character)
            const data = await getCharacterData(character)
            showMoreData(data)})
    )
}

function showMoreData(character) {
    DOMSelectors.moreContainer.insertAdjacentHTML("beforeend",
    `<div class="card bg-base-100 w-full h-full shadow-xl p-2" id="${character.id}-more">
        <div class="card-actions justify-start">
          <a href="" class="btn btn-primary btn-outline" id="back-btn">Back</a>
        </div>
        <figure>
          <img
            src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/icon-big"
            alt="icon of ${character.name}" class="card-image"/>
        </figure>
        <div class="card-body text-center">
          <h2 class="card-title">${character.name}</h2>
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
          <p>skills, passives, constellations</p>
        </div>
      </div>`
    )
}

export {addMoreButtons}