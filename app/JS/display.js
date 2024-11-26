const DOMSelectors = {
  container: document.getElementById("cards-container"),
};

async function displayIndividualData(character, image) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card bg-base-100 w-1/5 shadow-xl m-auto gap-2" id="${character.id}">
      <figure>
        <img
          src="${image}"
          alt="icon of ${character.name}" class="card-image"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p>${character.title}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline">See More</button>
        </div>
      </div>
    </div>`
  );
}

export { displayIndividualData };
