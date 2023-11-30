/*
1. Agregar producto
2. Eliminar producto
3. Modificar producto
4. buscar por nombre
5. filtrar por precio
6. crear un reporte de inventario - Ordenado
* */

function main() {
  let controladorWhile = true;

  do {
    const opn = prompt(`MENÚ DE OPCIONES
    1. Agregar producto
    2. Eliminar producto
    2.1 Eliminar producto por indice
    3. Modificar producto
    4. Buscar por nombre
    5. Filtrar por precio
    6. Crear un reporte de inventario - Ordenado
    7. Salir`);
    switch (opn) {
      case "1":
        agregarProducto();
        break;
      case "2":
        eliminarProducto();
        break;
      case "2.1":
        eliminarProductoPorIndice();
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        listarProductos();
        break;
      case "7":
        controladorWhile = false;
        break;
      default:
        mostrarMensaje();
    }
  } while (controladorWhile);
}

function agregarProducto() {
  nombre = prompt("Ingrese el nombre del producto: ");
  categoria = prompt("Ingrese la categoria del producto: ");
  precio = Number(prompt("Ingrese el precio del producto: "));
  cantidad = Number(prompt("Ingrese la cantidad del producto: "));
  marca = prompt("Ingrese el marca del producto: ");

  if (!isFinite(precio + cantidad)) {
    mostrarMensaje("La cantidad y el precio deben ser númericos");
    return;
  }
  const nuevoProducto = { nombre, categoria, precio, cantidad, marca };
  listaDeProductos.unshift(nuevoProducto);

  mostrarMensaje(`El producto ${nombre} fue agregado exitosamente`);
}

function eliminarProducto() {
  listarProductos();
  const nombreEliminar = prompt("Ingresa el nombre del producto a eliminar");

  if (
    !listaDeProductos.some(
      (producto) =>
        producto.nombre.toLowerCase() === nombreEliminar.toLowerCase()
    )
  ) {
    mostrarMensaje("el nombre del producto ingresado no existe en la lista");
    return;
  }

  listaDeProductos = listaDeProductos.filter((producto) => {
    if (producto.nombre.toLowerCase() !== nombreEliminar) {
      return producto;
    }
  });
  mostrarMensaje(
    `los productos con el nombre ${nombreEliminar} fueron eliminados exitosamente`
  );
}

function eliminarProductoPorIndice() {
  listarProductos();
  let indiceEliminar = Number(
    prompt("Ingresa el indice del producto a eliminar")
  );

  indiceEliminar--;

  if (isNaN(indiceEliminar)) {
    mostrarMensaje("El indice debe ser númerico");
    return;
  }

  if (indiceEliminar < 0 || indiceEliminar > listaDeProductos.length - 1) {
    mostrarMensaje("El indice ingresado no es válido");
    return;
  }
  //Guardar el nombre
  const productoEliminar = listaDeProductos[indiceEliminar];

  //Eliminar el producto recortando la lista
  listaDeProductos.splice(indiceEliminar, 1);

  mostrarMensaje(
    `El producto ${productoEliminar.nombre}  fue eliminado con éxito!!`
  );
}

function listarProductos() {
  const fechaHoy = new Date();
  //Obtener dia, mes , año

  const fecha = fechaHoy.toDateString();

  let listaString = `REPORTE DE INVETARIO \n  FECHA:${fecha} \n`;

  listaDeProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  listaDeProductos.forEach((producto, index) => {
    //Destructuring
    const { nombre, precio, cantidad, marca, categoria } = producto;

    //Format unit cost
    const precioFormat = precio.toLocaleString("en-US", {
      currency: "USD",
      style: "currency",
    });

    listaString += `
    ${
      index + 1
    }. --Nombre: ${nombre} Precio: ${precioFormat} Cantidad: ${cantidad} Marca: ${marca} Categoria: ${categoria}
    
    `;
  });
  mostrarMensaje(listaString);
}

function mostrarMensaje(msg = "Opción no válida") {
  alert(msg);
}
main();
