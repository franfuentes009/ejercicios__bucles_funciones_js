const dibujosAnimados = [
    { nombre: 'Mickey Mouse', debut: 1928 },
    { nombre: 'Bugs Bunny', debut: 1938 },
    { nombre: 'Bob Esponja', debut: 1999 },
    { nombre: 'Tom y Jerry', debut: 1940 },
    { nombre: 'Scooby-Doo', debut: 1969 },
    { nombre: 'Los Picapiedra', debut: 1960 },
    { nombre: 'Batman: La serie animada', debut: 1992 },
    { nombre: 'Los Simpson', debut: 1989 },
    { nombre: 'Pokémon', debut: 1997 },
    { nombre: 'El laboratorio de Dexter', debut: 1996 }
  ];
  
  let dibujoMasAntiguo = dibujosAnimados[0];
  
  for (let dibujo of dibujosAnimados) {
    if (dibujo.debut < dibujoMasAntiguo.debut) {
      dibujoMasAntiguo = dibujo;
    }
  }
  
  console.log(`El dibujo animado más antiguo es: ${dibujoMasAntiguo.nombre}`);