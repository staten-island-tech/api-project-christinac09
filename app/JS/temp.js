async function game() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters/all");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      DOMSelectors.container.replaceChildren();
      DOMSelectors.moreContainer.replaceChildren();
    }
  } catch (error) {
    alert("hey I could not find that character");
  }
}

function idk(data) {
  let randomizedData = Math.floor(Math.random() * data.length);
  let r = a[i];
  console.log(r);
}
