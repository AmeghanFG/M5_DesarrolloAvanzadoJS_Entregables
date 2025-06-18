mensajeError = document.getElementById("errores");

document
  .getElementById("registroEvento")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const intereses = document.querySelectorAll(
      'input[name="intereses"]:checked'
    );
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Otras validaciones [3 minimo con mensajes personalizados]
    if (!validarTelefono(telefono)) {
      return;
    }
    if (!validarCorreo(correo)) {
      return;
    }
    if (!validarFecha(fecha)) {
      return;
    }

    mensajeError.textContent = "";

    // Si todo está bien
    alert("Registro exitoso. ¡Gracias por registrarte!");
  });

function validarTelefono(telefono) {
  const regex = /^[0-9]{10}$/;
  if (regex.test(telefono)) {
    mensajeError.textContent = "";
    return true;
  } else {
    mensajeError.textContent =
      "El teléfono debe contener 10 dígitos numéricos.";
    return false;
  }
}

function validarCorreo(correo) {
  const regex = /^[\w._%+-]+@[\w.-_]+\.[a-zA-Z]{2,8}$/;
  if (regex.test(correo)) {
    mensajeError.textContent = "";
    return true;
  } else {
    mensajeError.textContent = "El correo electrónico no es válido.";
    return false;
  }
}

function validarFecha(fecha) {
  const fechaActual = new Date();
  const fechaSeleccionada = new Date(fecha);

  if (
    fechaSeleccionada.getFullYear() < fechaActual.getFullYear() ||
    fechaSeleccionada.getMonth() < fechaActual.getMonth() ||
    (fechaSeleccionada.getMonth() === fechaActual.getMonth() &&
      fechaSeleccionada.getDate() < fechaActual.getDate())
  ) {
    mensajeError.textContent =
      "La fecha del evento no puede ser anterior o la fecha actual.";
    return false;
  } else {
    mensajeError.textContent = "";
    return true;
  }
}

/*
   *Objetivo
Crear un formulario funcional que cubra las siguientes características:

1. Capturar datos del usuario como nombre, correo electrónico y teléfono.
2. Seleccionar intereses usando casillas de verificación.
3. Elegir el horario preferido con botones de radio.
4. Seleccionar una fecha para el evento.
5. Subir un archivo opcional (como una identificación).
6. Validar los datos antes de enviarlos. 
*/

/*
*INSTRUCCIONES
1. En este código encontrarás un formulario con una gran cantidad de campos y algunas validaciones básicas. Intenta separar los estilos en un archivo .css y el código de JavaScript en un archivo .js
2. Implementa al menos 3 validaciones adicionales para algunos de los campos, puedes elegir los que desees.
3. Experimenta con distintos escenarios y asegúrate de que funcione como deseas, incluso puedes crear mensajes personalizados según el campo que estés validando.
*/
