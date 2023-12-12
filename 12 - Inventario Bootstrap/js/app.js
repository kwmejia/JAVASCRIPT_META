/* Selectores */
const tbody = document.querySelector("#tbody_table");
const btnAgregar = document.querySelector("#btn-agregar");

/**Eventos */
btnAgregar.addEventListener("click", (event) => {
    /**PreventDefault previene los eventos que vienen por defecto */
    event.preventDefault();
    agregarProducto();
});

/*Lista para guardar todos los productos */
const listaProductos = [
    {
        id: Date.now(),
        nombre: "Pastas",
        precio: 5.0,
        cantidad: 10,
        imagen: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg",
        categoria: "Carbohidrato"
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

        /**Modificar el HTML del tbody */
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <img 
                        src="${imagen}" 
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
                    <i class='bx bxs-edit'></i>
                </button>

                <button
                    class="btn btn-danger delete-product"
                    data-id="${id}"
                >
                    <i class='bx bxs-trash' ></i>
                </button>
                
                </td>
            </tr>
        `;
    });
}


/*  Función para agregar un producto */
function agregarProducto() {
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

    listaProductos.push({
        id: Date.now(),
        nombre: nombreText,
        cantidad: cantidadText,
        precio: precioText,
        imagen: imagenText,
        categoria: categoriaText
    });

    alerta.classList.replace("alert-danger", "alert-success");
    alerta.classList.remove("d-none");
    alerta.textContent = `El producto ${nombreText} fue agregado exitosamente.`;

    document.querySelector("#form-agregar").reset()
    mostrarProductos();
}

mostrarProductos();

