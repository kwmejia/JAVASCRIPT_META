
export async function consumirAPI(mensaje) {
    const URL = "https://jsonplaceholder.typicode.com/photos"
    const respuesta = await fetch(URL)
    const datos = await respuesta.json()
    imprimirDatos(datos.splice(1, 100))
}


function imprimirDatos(datos) {

    datos.forEach(element => {
        console.log(datos)
        document.body.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
            </div>
        </div>
        `;
    });
}

const mensaje = "Hola, desde consumir API"
export default mensaje;

