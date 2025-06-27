const planetas = require("./planetas");
// Aquí mostraremos la información de los planetas
planetas.forEach((planeta) => {
  console.log(`Nombre: ${planeta.nombre}`);
  console.log(`Tipo: ${planeta.tipo}`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Descubierto por: ${planeta.descubiertoPor}`);
  console.log(
    `Se ubica en el sistema ${planeta.coordenadas.sistema} a ${planeta.coordenadas.distancia} ${planeta.coordenadas.unidad}`
  );
  console.log(`Datos interesantes:`);
  planeta.caracteristicas.forEach((caracteristica) => {
    console.log(`- ${caracteristica}`);
  });
  console.log("-----------------------------");
});

// Para ejecutarlo, puedes usar npm run explorar
