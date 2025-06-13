// Simulando una base de datos de mesas
let mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasDisponibles >= mesasSolicitadas) {
        if (mesasSolicitadas > 0) {
          resolve(
            `Hay suficientes mesas disponibles. Quedan ${
              mesasDisponibles - mesasSolicitadas
            } mesas disponibles`
          );
        } else {
          // Maneja el caso de solicitud inválida
          reject(`Número de mesas solicitadas no puede ser negativo o cero.`);
        }
      } else {
        reject(
          `No hay suficientes mesas disponibles, solo quedan ${mesasDisponibles} mesas.`
        );
      }
    }, 2000); // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente, mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula éxito o error en el envío de correo
      const exito = Math.random() > 0.2; // 20% de fallo
      if (exito) {
        // Caso "true" simula un envío exitoso
        mesasDisponibles -= mesasSolicitadas; // Actualiza el número de mesas disponibles
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        // Caso "false" simula un fallo en el envío
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}.`);
      }
    }, 1500); // Simula un retraso de 1.5 segundos
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(
      `Verificando disponibilidad de mesas para ${nombreCliente} ...`
    );
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); // Llama a la función de verificación
    // Espera la respuesta de la promesa de disponibilidad y envía un correo de confirmación, si surge algun error, se captura en el bloque catch
    console.log(disponibilidad); // Muestra la disponibilidad de mesas
    console.log("Enviando correo de confirmación...");
    const confirmacion = await enviarConfirmacionReserva(
      nombreCliente,
      mesasSolicitadas
    ); // Llama a la función de envío de correo
    console.log(confirmacion); // Muestra el mensaje de confirmación
  } catch (error) {
    console.log(error); // Maneja los errores en la promesa
  }
}

// Llamada de prueba para multiples reservas
/* async function ejecutarReservas() {
  await hacerReserva("Juan Pérez", 3);
  await hacerReserva("Izar", 7);
  await hacerReserva("Valentino", 4);
}

// Iniciar reservas secuencialmente
ejecutarReservas(); */

// Llamada de prueba
hacerReserva("Agnes", 3); // Intenta hacer una reserva para 3 mesas
