const estudiantes = [
    { nombre: 'Juan', calificacion: 85 },
    { nombre: 'María', calificacion: 92 },
    { nombre: 'Pedro', calificacion: 78 },
    { nombre: 'Lucía', calificacion: 88 },
    { nombre: 'Sofía', calificacion: 95 },
    { nombre: 'Andrés', calificacion: 81 },
    { nombre: 'Paula', calificacion: 89 },
    { nombre: 'Diego', calificacion: 76 },
    { nombre: 'Valentina', calificacion: 90 },
    { nombre: 'Javier', calificacion: 84 }
  ];
  
  let sumaCalificaciones = 0;
  
  for (let estudiante of estudiantes) {
    sumaCalificaciones += estudiante.calificacion;
  }
  
  const promedio = sumaCalificaciones / estudiantes.length;
  
  console.log(`El promedio de calificaciones es: ${promedio}`);