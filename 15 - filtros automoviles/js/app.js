/**Selectores */
const contenedor = document.querySelector(".container-cards");
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const contSelect = document.querySelectorAll("select")
/**Objeto global */
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}

/**Eventos */
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);
    //Generar el select de años
    const max = new Date().getFullYear() + 1;
    const min = max - 14;


    for (let i = max; i >= min; i--) {
        //Por cada iteración se crea una etiqueta option
        const option = document.createElement("option");
        //El valor del option es el iterador 
        option.value = i;
        //El texto tambien
        option.innerText = i;
        //Añadirlo al select
        year.appendChild(option);
    }
});

let autosfiltrados = autos;

const autosOriginales = autos.slice();

contSelect.forEach((input) => {
    input.addEventListener("input", (event) => {
        console.log(event.target.value);
        //obtengo el nuevo valor y lo asigno a mi objeto global//
        datosBusqueda[input.id] = event.target.value
        // filtrar 
        filtrar(input.id)
    })
})



function filtrar() {
    let autosFiltrados = autos;

    for (const key in datosBusqueda) {
        if (datosBusqueda[key]) {
            if (key === "minimo") {
                autosFiltrados = autosFiltrados.filter(auto => parseInt(auto.precio) >= parseInt(datosBusqueda.minimo));
            } else if (key === "maximo") {
                autosFiltrados = autosFiltrados.filter(auto => parseInt(auto.precio) <= parseInt(datosBusqueda.maximo));
            } else {
                autosFiltrados = autosFiltrados.filter(auto => auto[key] == datosBusqueda[key]);
            }
        }
    }

    if (autosFiltrados.length) {
        mostrarAutos(autosFiltrados);
    } else {
        limpiarHTML();
        const h2 = document.createElement("h2");
        h2.textContent = "No hay resultados de esta búsqueda.";
        h2.style.color = "#fff";
        contenedor.appendChild(h2);
    }
}

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