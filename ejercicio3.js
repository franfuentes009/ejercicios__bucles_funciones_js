const canciones = [
    { titulo: 'Bohemian Rhapsody', genero: 'Rock', duracion: 5.55 },
    { titulo: 'Escalera al cielo', genero: 'Rock', duracion: 7.58 },
    { titulo: 'Billie Jean', genero: 'Pop', duracion: 4.54 },
    { titulo: 'Hotel California', genero: 'Rock', duracion: 6.31 },
    { titulo: 'Sweet Child o Mine', genero: 'Rock', duracion: 5.56 },
    { titulo: 'Smells Like Teen Spirit', genero: 'Rock', duracion: 5.01 },
    { titulo: 'Comfortably Numb', genero: 'Rock', duracion: 6.23 },
    { titulo: 'Wish You Were Here', genero: 'Rock', duracion: 5.34 },
    { titulo: 'Black Dog', genero: 'Rock', duracion: 4.54 },
    { titulo: 'Thunderstruck', genero: 'Rock', duracion: 4.52 },
    { titulo: 'Crazy Love', genero: 'Pop', duracion: 3.52 },
  ];
  
  const listaRockLarga = [];
  
  for (let cancion of canciones) {
    if (cancion.genero === 'Rock' && cancion.duracion > 5) {
      listaRockLarga.push(cancion);
    }
  }
  
  console.log(listaRockLarga);