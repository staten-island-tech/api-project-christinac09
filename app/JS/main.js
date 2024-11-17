import "../CSS/style.css";

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);
      data.data.forEach((agent) =>
        document
          .querySelector("div")
          .insertAdjacentHTML("beforeend", `<h1>${agent.displayName}</h1>`)
      );
    }
  } catch (error) {
    alert("hey i could not find that agent");
  }
}

getData();
