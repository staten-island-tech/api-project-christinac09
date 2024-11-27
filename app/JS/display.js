const DOMSelectors = {
  container: document.getElementById("cards-container"),
};
async function displayCards(data) {
  console.log(data);
  data.forEach(async (character) => {
    console.log(character.name);
    const imageURL = `https://genshin.jmp.blue/characters/${character.id}/icon`;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card bg-base-100 w-1/5 shadow-xl m-auto gap-2" id="${character.id}">
      <img src="${imageURL}" alt="icon of ${character.name}" class="card-image"/>
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p>${character.title}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline">See More</button>
        </div>
      </div>
    </div>`
    );
  });
}

export { displayCards, DOMSelectors };
