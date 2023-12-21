/**Selectores */

const contenedor = document.querySelector(".container-cards");

/**Eventos */
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos)
})
/**Funcion encargada para imprimir los autos en pantalla */
function mostrarAutos(autos) {
    //Limpiamos el HTML por si habia elementos ya creados
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
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
}