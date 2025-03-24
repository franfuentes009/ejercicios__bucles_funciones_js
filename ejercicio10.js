const peliculas = [
    { titulo: 'Titanic', duracion: 195 },
    { titulo: 'El Señor de los Anillos: El retorno del Rey', duracion: 201 },
    { titulo: 'Avatar', duracion: 162 },
    { titulo: 'El Padrino', duracion: 175 },
    { titulo: 'Gladiador', duracion: 155 },
    { titulo: 'Interstellar', duracion: 169 },
    { titulo: 'Ben-Hur', duracion: 212 },
    { titulo: 'Lawrence de Arabia', duracion: 216 },
    { titulo: 'Lo que el viento se llevó', duracion: 221 },
    { titulo: 'La lista de Schindler', duracion: 195 }
  ];
  
  let peliculaMasLarga = peliculas[0];
  
  for (let pelicula of peliculas) {
    if (pelicula.duracion > peliculaMasLarga.duracion) {
      peliculaMasLarga = pelicula;
    }
  }
  
  console.log(`La película más larga es: ${peliculaMasLarga.titulo}, con una duración de ${peliculaMasLarga.duracion} minutos`);