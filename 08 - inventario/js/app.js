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
    3. Modificar producto
    4. Buscar por nombre
    5. Filtrar por precio
    6. Crear un reporte de inventario - Ordenado
    7. Salir`);
    switch (opn) {
      case "1":
        break;
      case "2":
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
