const artistas = [
    { nombre: 'Adele', genero: 'Pop' },
    { nombre: 'Eminem', genero: 'Rap' },
    { nombre: 'Taylor Swift', genero: 'Pop' },
    { nombre: 'Drake', genero: 'Hip-Hop' },
    { nombre: 'Ed Sheeran', genero: 'Pop' },
    { nombre: 'The Weeknd', genero: 'R&B' },
    { nombre: 'Shakira', genero: 'Pop' },
    { nombre: 'Bruno Mars', genero: 'Pop' },
    { nombre: 'Beyoncé', genero: 'Pop' },
    { nombre: 'Dua Lipa', genero: 'Pop' }
  ];
  
  const artistasPop = [];
  
  for (let artista of artistas) {
    if (artista.genero === 'Pop') {
      artistasPop.push(artista);
    }
  }
  
  console.log('Artistas de música pop:', artistasPop);