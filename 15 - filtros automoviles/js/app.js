/**Selectores */
const contenedor = document.querySelector(".container-cards");
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");


/**Eventos */
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos)
})
/**Funcion encargada para imprimir los autos en pantalla */
function mostrarAutos(autos) {
    //Limpiamos el HTML por si habia elementos ya creados
    // contenedor.innerHTML = ""
    limpiarHTML()
    //Recorremos la lista de autos
    autos.forEach(auto => {

        contenedor.innerHTML += `
            <div class="card">
                <img
                    src="${auto.imagen}"
                />
                <div class="description-card">
                    <p>${auto.marca} - ${auto.modelo} - ${auto.year}</p>
                    <p>Transmisión: ${auto.transmision}</p>
                    <p>Precio: ${auto.precio}</p>
                    <p>Puertas: ${auto.puertas}</p>
                    <p>Color: ${auto.color}</p>
                </div>
            </div>
        `;
    });

}

function limpiarHTML() {
    //Si el contenedor tiene un primer hijo
    while (contenedor.firstChild) {
        //Entonces lo elimina y continua validando
        contenedor.removeChild(contenedor.firstChild)
    }
}