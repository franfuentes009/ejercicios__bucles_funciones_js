const ciudades = [
    { nombre: 'Ciudad de México', poblacion: 9209944 },
    { nombre: 'Buenos Aires', poblacion: 2890151 },
    { nombre: 'Lima', poblacion: 9674755 },
    { nombre: 'Bogotá', poblacion: 7776845 },
    { nombre: 'Santiago', poblacion: 5614032 },
    { nombre: 'Madrid', poblacion: 3266126 },
    { nombre: 'São Paulo', poblacion: 12325232 },
    { nombre: 'Nueva York', poblacion: 8175133 },
    { nombre: 'Los Ángeles', poblacion: 3979576 },
    { nombre: 'Toronto', poblacion: 2930000 }
  ];
  
  let ciudadMasPoblada = ciudades[0];
  
  for (let ciudad of ciudades) {
    if (ciudad.poblacion > ciudadMasPoblada.poblacion) {
      ciudadMasPoblada = ciudad;
    }
  }
  
  console.log(`La ciudad con mayor población es: ${ciudadMasPoblada.nombre}, con ${ciudadMasPoblada.poblacion} habitantes`);