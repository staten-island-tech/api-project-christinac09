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
      <figure>
        <img
          src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/card"
          alt="icon of ${character.name}" class="w-[70%] h-full rounded-xl object-cover"/>
      </figure>
      <div class="card-body text-center">
        <div class="card-actions justify-end">
          <a href="" class="btn btn-primary btn-outline" id="back-btn">Back</a>
        </div>
        <h2 class="card-title justify-center">${character.name}</h2>
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
    /* `<div class="card card-side w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>` */
  )
}

export { getCharacterData, displayIndividualData, getAllData };
