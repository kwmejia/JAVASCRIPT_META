/* Selectores */
const tbody = document.querySelector("#tbody_table");
const btnAgregar = document.querySelector("#btn-agregar");
const btnOpenDrawer = document.querySelector("#btnOpenDrawer");
const tituloDrawer = document.querySelector("#offcanvasNavbarLabel");
const btnClose = document.querySelector("#btnClose");
let producto;

/**Eventos */

btnClose.addEventListener("click", () => {
    producto = undefined;
    document.querySelector("#form-agregar").reset();
    /**Modificamos el texto de botón */
    btnAgregar.textContent = "Agregar producto";

    /**Modificamos el titulo del drawer */
    tituloDrawer.textContent = "Agregar producto";
});

btnAgregar.addEventListener("click", (event) => {
    /**PreventDefault previene los eventos que vienen por defecto */
    event.preventDefault();
    agregarProducto();
});

tbody.addEventListener("click", (event) => {
    /**Validamos que al elemento que se dio clic sea el botón actualizar */
    if (event.target.classList.contains("edit-product")) {
        /**Obtenemos el atributo data-id, que contiene el id del producto */
        const id = event.target.getAttribute("data-id");
        /**Validamos que si exista un id, si existe llamamos a la función editar */
        if (id) cargarDrawer(id)
        return;
    }

    /**Si el elemento HTML al que le dimos clic  contiene la clase delete-prodduct */
    if (event.target.classList.contains("delete-product")) {
        const id = event.target.getAttribute("data-id");
        if (id) eliminarProducto(id)
    }
})

/*Lista para guardar todos los productos */
let listaProductos = [
    {
        id: Date.now(),
        nombre: "Pastas",
        precio: 5.0,
        cantidad: 10,
        imagen: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg",
        categoria: "carbohidrato"
    }
];


/*Función para listar los productos y mostrarlos en la tabla */
function mostrarProductos() {

    //Limpiar la tabla
    tbody.innerHTML = "";
    //Recorro mi lista con foreach
    //Donde producto es el item que se está iterando en el momento
    // y index es el indice de la lista de ese item
    listaProductos.forEach((producto, index) => {
        /*Desestructurar el objeto que se está recorriendo */
        const { cantidad, categoria, id, imagen, nombre, precio } = producto;

        /*Dar formato al precio */
        const precioFormat = Number(precio).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        const imgDefault = "https://cdn-icons-png.flaticon.com/512/2771/2771406.png"

        /**Modificar el HTML del tbody */
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <img 
                        src="${imagen || imgDefault}" 
                        alt="Imagen producto"
                        width="50px"
                        height="50px"
                        class="rounded-circle"
                    />
                </td>
                <td>${nombre}</td>
                <td>${precioFormat}</td>
                <td>${categoria}</td>
                <td>${cantidad}</td>

                <td>
                <button 
                    class="btn btn-primary edit-product"
                    data-id="${id}"
                >
                    <i class="bx bxs-edit" style="pointer-events: none"></i>
                </button>

                <button
                    class="btn btn-danger delete-product"
                    data-id="${id}"
                >
                    <i class='bx bxs-trash' style="pointer-events: none" ></i>
                </button>
                
                </td>
            </tr>
        `;
    });
}


/*  Función para agregar un producto */
function agregarProducto() {

    if (!producto) {
        /**Modificamos el texto de botón */
        btnAgregar.textContent = "Agregar producto";

        /**Modificamos el titulo del drawer */
        tituloDrawer.textContent = "Agregar producto";
    }

    /*Selectores los inputs y al mismo tiempo acceder al valor */
    const nombreText = document.querySelector("#nombre_producto").value;
    const cantidadText = document.querySelector("#cantidad").value;
    const precioText = document.querySelector("#precio").value;
    const imagenText = document.querySelector("#imagen").value;
    const categoriaText = document.querySelector("#categoria").value;

    console.log({ nombreText, cantidadText, precioText, imagenText, categoriaText })

    const alerta = document.querySelector("#alert-error");
    alerta.classList = "alert alert-danger d-none";

    if ([nombreText, cantidadText, precioText, categoriaText].includes("")) {

        alerta.textContent = "Todos los campos son obligatorios.";
        alerta.classList.remove("d-none");
        return;
    }

    alerta.classList.add("d-none");

    if (!producto) {
        /**Agregar */
        listaProductos.push({
            id: Date.now(),
            nombre: nombreText,
            cantidad: cantidadText,
            precio: precioText,
            imagen: imagenText,
            categoria: categoriaText
        });
    } else {
        /**Editar */
        producto.nombre = nombreText;
        producto.cantidad = cantidadText;
        producto.precio = precioText;
        producto.imagen = imagenText;
        producto.categoria = categoriaText;

        /**Cambiamos el valor del producto a undefined (reset) */
        producto = undefined;
        /**Cerrar el drawer */
        btnClose.click();
    }

    alerta.classList.replace("alert-danger", "alert-success");
    alerta.classList.remove("d-none");
    alerta.textContent = `El producto ${nombreText} fue agregado exitosamente.`;

    /**La alerta se deja de mostrar depues de dos segundos */
    setTimeout(() => {
        alerta.classList.add("d-none");
    }, 2000);

    document.querySelector("#form-agregar").reset()
    mostrarProductos();
}


/**
 * Función para editar un producto
 */
function cargarDrawer(id) {
    /**Buscar el producto que tiene el id proporcionado en los parametros */
    producto = listaProductos.find(product => product.id == id);

    /*Selectores los inputs y al mismo tiempo acceder al valor */
    document.querySelector("#nombre_producto").value = producto.nombre;
    document.querySelector("#cantidad").value = producto.cantidad;
    document.querySelector("#precio").value = producto.precio;
    document.querySelector("#imagen").value = producto.imagen;
    document.querySelector("#categoria").value = producto.categoria;

    /**Hacemos un evento click al botón que abre el drawe */
    btnOpenDrawer.click();

    /**Modificamos el texto de botón */
    btnAgregar.textContent = "Editar producto";

    /**Modificamos el titulo del drawer */
    tituloDrawer.textContent = "Editar producto";

    console.log(producto);
}

/**Eliminar un producto */
function eliminarProducto(id) {

    listaProductos = listaProductos.filter(producto => producto.id != id)
    mostrarProductos();
}

mostrarProductos();


