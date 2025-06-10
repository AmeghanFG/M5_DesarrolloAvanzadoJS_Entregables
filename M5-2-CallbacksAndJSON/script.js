// Datos iniciales de libros en formato JSON

const biblioteca = require("./biblioteca.json");

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
  setTimeout(() => {
    // Aquí simulas leer el JSON con un retraso de 1 segundo
    callback(biblioteca);
  }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
  leerDatos((datos) => {
    console.log("Inventario de libros:");
    datos.libros.forEach((libro, index) => {
      console.log(
        `${index + 1}. ${libro.titulo} - ${libro.autor} (${
          libro.disponible ? "Disponible" : "Prestado"
        })`
      );
    });
  });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
  const nuevoLibro = { titulo, autor, genero, disponible };
  // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
  setTimeout(() => {
    biblioteca.libros.push(nuevoLibro);
    console.log(`Libro "${titulo}" agregado exitosamente.`);
  }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
  // Simula un retraso antes de actualizar la disponibilidad
  setTimeout(() => {
    // Busca el libro por título y actualiza su disponibilidad
    console.log(`Actualizando disponibilidad de "${titulo}"...`);
    const libro = biblioteca.libros.find((libro) => libro.titulo === titulo);
    if (libro) {
      libro.disponible = nuevoEstado;
      console.log(
        `Disponibilidad de "${titulo}" actualizada a ${
          nuevoEstado ? "Disponible" : "No disponible"
        }.`
      );
    } else {
      console.log(`Libro "${titulo}" no encontrado.`);
    }
  }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
mostrarLibros();
