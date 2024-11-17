import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.forEach((agent) =>
        document
          .querySelector("div")
          .insertAdjacentHTML("beforeend", `<h1>${agent}</h1>`)
      );
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

getData();
