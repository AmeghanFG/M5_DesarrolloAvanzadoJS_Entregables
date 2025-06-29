import "./style.css";

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

/* Elementos DOM */
const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("adivinar");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("botonReiniciar");
const numeroAdivinado1 = document.getElementById("numeroAdivinado1");
const numeroAdivinado2 = document.getElementById("numeroAdivinado2");

/* Reinicio numeroAdivinado.style.display = "none"; */
botonReiniciar.style.display = "none";
numeroAdivinado1.style.display = "none";
numeroAdivinado2.style.display = "none";

botonAdivinar.addEventListener("click", () => {
  const numeroJugador = parseInt(inputNumero.value);

  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
  } else if (numeroJugador === numeroSecreto) {
    botonReiniciar.style.display = "inline";
    numeroAdivinado1.style.display = "inline";
    numeroAdivinado2.style.display = "inline";
    mensaje.textContent = "¡Felicidades! ¡Adivinaste el número!";
  } else if (numeroJugador < numeroSecreto) {
    mensaje.textContent = "El número es más alto.";
  } else {
    mensaje.textContent = "El número es más bajo.";
  }
});

botonReiniciar.addEventListener("click", () => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  inputNumero.value = "";
  mensaje.textContent = "";
  botonReiniciar.style.display = "none";
  numeroAdivinado1.style.display = "none";
  numeroAdivinado2.style.display = "none";
});
