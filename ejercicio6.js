const libros = [
    { titulo: 'Cien años de soledad', paginas: 417 },
    { titulo: 'El código Da Vinci', paginas: 689 },
    { titulo: '1984', paginas: 328 },
    { titulo: 'El principito', paginas: 96 },
    { titulo: 'Don Quijote de la Mancha', paginas: 863 },
    { titulo: 'Los juegos del hambre', paginas: 374 },
    { titulo: 'Orgullo y prejuicio', paginas: 432 },
    { titulo: 'It', paginas: 1138 },
    { titulo: 'El Hobbit', paginas: 310 },
    { titulo: 'La sombra del viento', paginas: 568 }
  ];
  
  const librosLargos = [];
  
  for (let libro of libros) {
    if (libro.paginas > 300) {
      librosLargos.push(libro);
    }
  }
  
  console.log('Libros con más de 300 páginas:', librosLargos);