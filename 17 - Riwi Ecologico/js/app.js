//Variables globales
const pisosInicial = [
    {
        piso: "3",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
    {
        piso: "4",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
    {
        piso: "5",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
];
let tipoCanecaAgregar;

//Selectores
const piso = document.getElementById("select_floor");
const btnOpenModal = document.getElementById("btnOpenModal");
const canecas = document.querySelectorAll(".bowl");
const btnSubmit = document.getElementById("btnSubmit");


//Eventos o escuchadores

/**Recorro toda mi lista de nodos (Etiqueta HTML) */
canecas.forEach(caneca => {
    /**Y agrego a cada una el escuchador de el evento clic */
    caneca.addEventListener("click", function () {
        /**Ejecutamos el evento clic para el botón encargado de abir el modal */
        btnOpenModal.click();

        /**Obtengo el valor de el atributo type-bowl */
        tipoCanecaAgregar = caneca.getAttribute("type-bowl");
    })
});

btnSubmit.addEventListener("click", function () {
    //Obtengo el valor de la cantidad a agregar
    const cantidadAgregar = document.getElementById("cantidad").value;
    //Y el piso en el cual el usuario está depositando los desechos 
    const pisoAgregar = piso.value;

    //1.Recorrer la lista de puntos ecologicos
    pisosInicial.forEach(puntoEco => {

        //1.2 Buscar el piso a modificar
        if (puntoEco.piso == pisoAgregar) {
            //1.3 Modificar la caneca correspondiente
            puntoEco[tipoCanecaAgregar] += parseInt(cantidadAgregar);
            //Cierro el modal
            document.querySelector("#btnCloseModal").click();
            //Le hago reset a la entrada (input)
            document.getElementById("cantidad").value = "";
        }
    })

    console.log(pisosInicial)
})
