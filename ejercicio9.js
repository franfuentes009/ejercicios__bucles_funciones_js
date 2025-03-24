const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 32 },
    { nombre: 'Laura', edad: 28 },
    { nombre: 'Jorge', edad: 45 },
    { nombre: 'Marta', edad: 35 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Valeria', edad: 27 },
    { nombre: 'Pablo', edad: 40 },
    { nombre: 'Clara', edad: 33 },
    { nombre: 'Andrés', edad: 29 }
  ];
  
  let sumaEdades = 0;
  
  for (let persona of personas) {
    sumaEdades += persona.edad;
  }
  
  const promedioEdad = sumaEdades / personas.length;
  
  console.log(`El promedio de edad es: ${promedioEdad}`);