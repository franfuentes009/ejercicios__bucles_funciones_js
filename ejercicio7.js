const productos = [
    { nombre: 'Teléfono', precio: 500 },
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Monitor', precio: 250 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Ratón', precio: 50 },
    { nombre: 'Impresora', precio: 400 },
    { nombre: 'Silla gamer', precio: 350 },
    { nombre: 'Auriculares', precio: 150 },
    { nombre: 'Disco duro', precio: 200 }
  ];
  
  let productoMasCaro = productos[0];
  
  for (let producto of productos) {
    if (producto.precio > productoMasCaro.precio) {
      productoMasCaro = producto;
    }
  }
  
  console.log(`El producto más caro es: ${productoMasCaro.nombre}, con un precio de $${productoMasCaro.precio}`);