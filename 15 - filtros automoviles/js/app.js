/**Selectores */
const contenedor = document.querySelector(".container-cards");
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

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

//Escuchar en todo momento el cambio de valor para marca
marca.addEventListener("input", (event) => {
    console.log(event.target.value)
    //Obtengo el nuevo valor y lo asigno a mi objeto global
    datosBusqueda.marca = event.target.value;

    //Filtrar
    filtrarAuto()
});

minimo.addEventListener("input", (event) => {
    datosBusqueda.minimo = event.target.value
    filtrarAuto();
})

maximo.addEventListener("input", (event) => {
    datosBusqueda.maximo = event.target.value
    filtrarAuto()
})

year.addEventListener("input", (event) => {
    datosBusqueda.year = event.target.value
    filtrarAuto()
})

puertas.addEventListener("input", (event) => {
    datosBusqueda.puertas = event.target.value
    filtrarAuto()
})

transmision.addEventListener("input", (event) => {
    datosBusqueda.transmision = event.target.value
    filtrarAuto()
})

color.addEventListener("input", (event) => {
    datosBusqueda.color = event.target.value
    filtrarAuto()
})


function filtrarAuto() {
    const resultado = autos
        .filter(filtrarPorMarca)
        .filter(filtrarMinimo)
        .filter(filtrarPorYear)
        .filter(filtrarMaximo)
        .filter(filtrarPorPuertas)
        .filter(filtrarPorTransmision)
        .filter(filtrarPorColor)

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        limpiarHTML()
        const h2 = document.createElement("h2")
        h2.textContent = "No hay resultados de esta busqueda."
        h2.style.color = "#fff"
        contenedor.appendChild(h2)
    }
}


function filtrarPorColor(auto) {
    if (datosBusqueda.color) {
        return datosBusqueda.color == auto.color
    }

    return auto
}

function filtrarPorTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision == datosBusqueda.transmision
    }

    return auto
}

function filtrarPorPuertas(auto) {
    if (datosBusqueda.puertas) {
        return datosBusqueda.puertas == auto.puertas
    }

    return auto
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo
    }

    return auto
}

function filtrarPorYear(auto) {
    if (datosBusqueda.year) {
        return auto.year == datosBusqueda.year
    }

    return auto
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo
    }

    return auto;
}

function filtrarPorMarca(auto) {
    if (datosBusqueda.marca) {
        // if (auto.marca === datosBusqueda.marca) {
        //     return auto
        // }
        return auto.marca === datosBusqueda.marca
    }

    return auto;
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