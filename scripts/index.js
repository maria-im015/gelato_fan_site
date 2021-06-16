const state = {
    clickCount: 0,
    name: " ALL for meeee!!!!"
}

const changeBackground = () => {
    let body = document.body;
    body.classList.toggle("night");
}

const countGelato = () => {
    const gelatoCountContainer = document.getElementById("gelatoCount");
    state.clickCount += 1;
    gelatoCountContainer.textContent = state.clickCount + state.name;
    console.log(state.clickCount);
}

const addGelato = () => {
    const newGelato = document.createElement("span");
    const gelatoContainer = document.querySelector("#gelatoContainer");
    newGelato.textContent = "🍨";
    gelatoContainer.appendChild(newGelato);
    countGelato();
};

const registerEventHandlers = () => {
    const gelatoButton = document.querySelector("#addGelatoButton");
    gelatoButton.addEventListener("click", addGelato);

    const darkModeButton = document.querySelector(".darkMode");
    darkModeButton.addEventListener("click", changeBackground);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);