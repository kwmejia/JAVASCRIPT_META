/**Selectores */
const contenedorProductos = document.querySelector("#lista-productos");
const tbody = document.querySelector("#lista-carrito tbody")
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
const btnToggleMode = document.querySelector("#btnToggleMode")
/**Creo la lista para guardar los items que estarán dentro del carrito de compras */
let listaCarrito = [];

/**Eventos */
btnVaciarCarrito.addEventListener("click", (event) => {
    event.preventDefault();
    listaCarrito = []
    limpiarCarrito();
})

btnToggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
})


contenedorProductos.addEventListener("click", function (event) {
    /**Elimino los eventos por defecto */
    event.preventDefault();

    /**Validar que el elemento HTML contenga las clases agregar-carrito */
    if (event.target.classList.contains("agregar-carrito")) {

        /**Extraer el atributo personalizado que contiene el id del producto */
        const id = event.target.getAttribute("data-id")
        /**Obtengo el padre mas alto para poder obtener la información */
        const card = event.target.parentElement.parentElement;

        ;
        agregarProducto(id, card)
    }
})

tbody.addEventListener("click", (event) => {
    event.preventDefault();
    /**Valido si el usuario está dando clic a una etiqueta que
     * contenga la clase "eliminar producto"
     */
    if (event.target.classList.contains("eliminar-producto")) {
        /**Obtengo el id de la etiqueta */
        const id = event.target.getAttribute("data-id")
        eliminarItemCarrito(id);
    }
})

/**Esta función obtiene los datos y agrega el producto a la lista */
function agregarProducto(id, card) {
    /**Creo el objeto con la información seleccionando las
     *  etiquetas a partir de card
     */
    infoProducto = {
        id,
        nombre: card.querySelector("h4").textContent,
        precio: card.querySelector(".precio span").textContent,
        imagen: card.querySelector(".imagen-curso").src,
        cantidad: 1
    }

    /**Validar si el producto ya se encuentra en la lista del carrito */
    if (listaCarrito.some(producto => producto.id == id)) {
        /**Obtengo el valor del producto */
        const producto = listaCarrito.find(producto => producto.id == id)
        //Aumento su cantidad 
        producto.cantidad++;
    } else {
        //De lo contrario agregamos el producto al carrito
        listaCarrito.push(infoProducto);
    }
    console.log(listaCarrito)
    pintarProductosEnCarrito();
}

/**Esta función recorre todos los productos
 * guardados en la lista del carrito y los muestra
 */
function pintarProductosEnCarrito() {
    // tbody.innerHTML = ""
    limpiarCarrito()
    //**Recorremos la lista del carrito */
    listaCarrito.forEach((producto) => {
        const tr = document.createElement("tr");

        /**Columna Imagen */
        const tdImage = document.createElement("td");
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = "Imagen del prodcuto";
        img.height = "100";
        tdImage.appendChild(img);
        tr.appendChild(tdImage);


        /**Columna nombre */
        const tdName = document.createElement("td")
        tdName.textContent = producto.nombre;
        tr.appendChild(tdName);


        /**Columna precio */
        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);

        /**Columna cantidad */
        const tdCantidad = document.createElement("td")
        tdCantidad.textContent = producto.cantidad;
        tr.appendChild(tdCantidad);

        /**Columna para el botón eliminar */
        const tdEliminar = document.createElement("td")
        const btnEliminar = document.createElement("button")
        btnEliminar.textContent = "Eliminar";
        btnEliminar.setAttribute("data-id", producto.id);
        btnEliminar.classList.add("eliminar-producto");
        tdEliminar.appendChild(btnEliminar);
        tr.appendChild(tdEliminar);

        tbody.appendChild(tr)

    })

    console.log(tbody)
}

/**Esta función se encarga de eliminar un producto si la cantidad es igual 1, de lo contrario resta la cantidad en una unidad. */
function eliminarItemCarrito(id) {
    /**Obtengo el producto con el id que tengo como parametro */
    const producto = listaCarrito.find(producto => producto.id == id)

    /**Si la cantidad del producto es mayor a 1 */
    if (producto.cantidad > 1) {
        //Se resta la cantidad
        producto.cantidad--;
    } else {
        //De lo contrario, filtro todos los productos 
        //Que no contengan ese identidicador en especifico
        listaCarrito = listaCarrito.filter((producto) => producto.id != id)
    }

    pintarProductosEnCarrito()
}

/**Funcion para limpiar el carrito de forma más rapida */
function limpiarCarrito() {
    //Mientras encuentre un hijo
    while (tbody.firstChild) {
        //Lo elimina
        tbody.removeChild(tbody.firstChild)
    }
}