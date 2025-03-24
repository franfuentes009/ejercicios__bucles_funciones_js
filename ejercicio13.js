const autos = [
    { modelo: 'Ferrari 488', velocidadMaxima: 330 },
    { modelo: 'Lamborghini Aventador', velocidadMaxima: 350 },
    { modelo: 'Porsche 911', velocidadMaxima: 308 },
    { modelo: 'Ford Mustang', velocidadMaxima: 250 },
    { modelo: 'Chevrolet Corvette', velocidadMaxima: 296 },
    { modelo: 'BMW M4', velocidadMaxima: 280 },
    { modelo: 'Audi R8', velocidadMaxima: 330 },
    { modelo: 'Mercedes AMG GT', velocidadMaxima: 310 },
    { modelo: 'Nissan GT-R', velocidadMaxima: 315 },
    { modelo: 'Dodge Challenger SRT', velocidadMaxima: 290 }
  ];
  
  const autosRapidos = [];
  
  for (let auto of autos) {
    if (auto.velocidadMaxima > 200) {
      autosRapidos.push(auto);
    }
  }
  
  console.log('Autos con velocidad mayor a 200 km/h:', autosRapidos);