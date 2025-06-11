// Obtener referencias a los elementos del DOM
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

// Función para mostrar los personajes en el contenedor
function renderCharacters(characters) {
  dataContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos datos
  characters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.classList.add("character"); // Añadir clase para estilos tipo tarjeta
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
    `;
    dataContainer.appendChild(characterElement);
  });
}

//* Fetch
fetchBtn.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      renderCharacters(data.results); // Llamar a la función para mostrar los personajes
    })
    .catch((error) => {
      console.error("Error:", error);
      dataContainer.textContent = "Error al obtener los datos.";
    });
});

// * Axios
axiosBtn.addEventListener("click", () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      renderCharacters(response.data.results); // Axios ya convierte la respuesta a JSON automáticamente
    })
    .catch((error) => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

// TODO: OTRAS APIS
/*
https://rickandmortyapi.com/
https://swapi.info/api/
https://pokeapi.co/
https://thronesapi.com/
*/
