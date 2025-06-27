const planetas = require("./planetas");
// Aquí mostraremos la información de los planetas
planetas.forEach((planeta) => {
  console.log(`Nombre: ${planeta.nombre}`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log("-----------------------------");
});
