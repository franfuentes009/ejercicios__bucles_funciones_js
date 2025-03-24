const personajes = [
    { nombre: 'Luke Skywalker', especie: 'Humano' },
    { nombre: 'Darth Vader', especie: 'Humano' },
    { nombre: 'Chewbacca', especie: 'Wookiee' },
    { nombre: 'Leia Organa', especie: 'Humano' },
    { nombre: 'R2-D2', especie: 'Droide' },
    { nombre: 'C-3PO', especie: 'Droide' },
    { nombre: 'Obi-Wan Kenobi', especie: 'Humano' },
    { nombre: 'Yoda', especie: 'Desconocida' },
    { nombre: 'Han Solo', especie: 'Humano' }
  ];
  
  const personajesHumanos = [];
  
  for (let personaje of personajes) {
    if (personaje.especie === 'Humano') {
      personajesHumanos.push(personaje);
    }
  }
  
  console.log(personajesHumanos);