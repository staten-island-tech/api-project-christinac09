import "../CSS/style.css";

const DOMSelectors = {
  container: document.getElementById("cards-container"),
};

async function getData() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.forEach((agent) =>
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="w-1/6 m-8 m-auto">
              <h2>${agent}</h2>
              <img src="https://genshin.jmp.blue/characters/${agent}/icon" alt="icon of ${agent}" class="card-img">
            </div>`
        )
      );
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}
getData();
