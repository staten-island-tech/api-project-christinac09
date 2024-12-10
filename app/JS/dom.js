const DOMSelectors = {
    container: document.getElementById("cards-container"),
    form: document.querySelector("#search-form"),
    searchBar: document.querySelector("#searchBar"),
    moreContainer: document.querySelector("#more-container"),
    moreButtons: document.querySelectorAll("#more-btn"),
    gameContainer: document.querySelector("#game-container"),
    gameStartBtn: document.querySelector("#game-start-btn")
};

function clearContainers() {
    DOMSelectors.container.innerHTML = "";
    DOMSelectors.moreContainer.innerHTML = "";
    DOMSelectors.gameContainer.innerHTML = "";
}

export {DOMSelectors, clearContainers}