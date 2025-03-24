const peliculas = [
    { titulo: 'El Padrino', calificacion: 9.2 },
    { titulo: 'Cadena perpetua', calificacion: 9.3 },
    { titulo: 'El caballero oscuro', calificacion: 9.0 },
    { titulo: 'Pulp Fiction', calificacion: 8.9 },
    { titulo: 'La lista de Schindler', calificacion: 8.9 },
    { titulo: 'Forrest Gump', calificacion: 8.8 },
    { titulo: 'Inception', calificacion: 8.8 },
    { titulo: 'Matrix', calificacion: 8.7 },
    { titulo: 'El Señor de los Anillos: El retorno del Rey', calificacion: 8.9 },
    { titulo: 'Gladiador', calificacion: 8.5 }
  ];
  
  const peliculasExcelentes = [];
  
  for (let pelicula of peliculas) {
    if (pelicula.calificacion > 8) {
      peliculasExcelentes.push(pelicula);
    }
  }
  
  console.log('Películas con calificación mayor a 8:', peliculasExcelentes);