const peliculas = [
    { titulo: 'The Matrix', anioEstreno: 1999 },
    { titulo: 'Star Wars: Una nueva esperanza', anioEstreno: 1977 },
    { titulo: 'Origen', anioEstreno: 2010 },
    { titulo: 'Parque Jurásico', anioEstreno: 1993 },
    { titulo: 'Cadena perpetua', anioEstreno: 1994 },
    { titulo: 'Pulp Fiction', anioEstreno: 1994 },
    { titulo: 'Avatar', anioEstreno: 2009 },
    { titulo: 'El caballero oscuro', anioEstreno: 2008 },
    { titulo: 'El club de la lucha', anioEstreno: 1999 },
    { titulo: 'Forrest Gump', anioEstreno: 1994 }
  ];
  
  let antes2000 = 0;
  let despues2000 = 0;
  
  for (let pelicula of peliculas) {
    if (pelicula.anioEstreno < 2000) {
      antes2000++;
    } else {
      despues2000++;
    }
  }
  
  console.log(`Películas antes del año 2000: ${antes2000}`);
  console.log(`Películas después del año 2000: ${despues2000}`);