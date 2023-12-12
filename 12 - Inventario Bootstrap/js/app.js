/* Selectores */
const tbody = document.querySelector("#tbody_table");

/*Lista para guardar todos los productos */
const listaProductos = [
    {
        id: Date.now(),
        nombre: "Pastas",
        precio: "5.0",
        cantidad: 10,
        imagen: "",
        categoria: "Carbohidrato"
    }
];


/*Función para listar los productos y mostrarlos en la tabla */
function mostrarProductos() {
    //Recorro mi lista con foreach
    //Donde producto es el item que se está iterando en el momento
    // y index es el indice de la lista de ese item
    listaProductos.forEach((producto, index) => {

    });
}



