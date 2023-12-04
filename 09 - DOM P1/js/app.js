
//Objeto document - DOM

console.log(document)

//Acceder al head
console.log(document.head)

//Acceder al cuerpo 
console.log(document.body)

//Acceder URL
console.log(document.URL)

//Acceder al dominio
console.log(document.domain)

//Acceder a los formularios
console.log(document.forms)

//Acceder a los links (anclas)
console.log(document.links)


//Seleccionar por clase -- retorna una lista con las coincidencias
let elemento = document.getElementsByClassName("subtitulo")
console.log(elemento)

//Seleccionar por id 
let elemento2 = document.getElementById("telefono")
console.log(elemento2)

//Seleccionar con query selector
let elemento3 = document.querySelector(".subtitulo")
document.querySelectorAll("a")

let elemento4 = document.querySelector("#contenedor a")
console.log(elemento3)
console.log(elemento4)

let elementoNoExiste = document.querySelector("icono")
console.log(elementoNoExiste)


let elementoSeleccionado = document.querySelector("h1")

console.log(elementoSeleccionado.textContent)
console.log(elementoSeleccionado.innerHTML)

console.log(document.querySelector("#contenedor").innerHTML)

//Cambiar el texto de una etiqueta
elementoSeleccionado.textContent += " Titulo Actualizado"

const contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = `
    <h4 class="titulo">Seccion de anclas</h4>
    <img  src="https://img.freepik.com/vector-gratis/arbol-navidad-vintage-regalos_23-2148759404.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1701648000&semt=ais"/>
`+ contenedor.innerHTML;

console.log(document.querySelector("#contenedor").innerHTML)
console.log(document.querySelector("#contenedor").outerHTML)

console.log(contenedor.style)

const listaDeColores = ["black", "red", "green", "#e3e3e3", "blue", "violet"]
const titulos = ["Feliz Navidad", "Te desea RIWI"]

contenedor.style.background = "black"
contenedor.style.display = "flex"
contenedor.style.flexDirection = "column"
contenedor.style.alignItems = "center"

setInterval(() => {
    let colorRandom = Math.floor(Math.random() * 5)
    let msgRandom = Math.floor(Math.random() * 2)

    document.querySelector(".titulo").textContent = titulos[msgRandom]
    // contenedor.style.background = listaDeColores[colorRandom]
    contenedor.style.backgroundImage = `linear-gradient(90deg, ${listaDeColores[colorRandom]}, ${listaDeColores[colorRandom - 1]} )`
}, 1000)


const coders = [
    { nombre: "Manuel", edad: 23, ciudad: "Medellin", fechaNac: "23-08-2000" },

    { nombre: "Valentina", edad: 15, ciudad: "Medellin", fechaNac: "13-06-2008" },

    { nombre: "Tatiana", edad: 20, ciudad: "Medellin", fechaNac: "18-05-2003" },

    { nombre: "Fernando", edad: 30, ciudad: "Medellin", fechaNac: "02-01-1993" },
]



function cargarDatos() {

    const tbody = document.querySelector("#contenido_tabla")
    coders.sort((a, b) => a.nombre.localeCompare(b.nombre))

    tbody.innerHTML = ""
    coders.forEach(estudiante => {
        const { nombre, ciudad, edad, fechaNac } = estudiante;

        tbody.innerHTML += `
         <tr>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${ciudad}</td>
            <td>${fechaNac}</td>
         </tr>
        `;
    })
}

setTimeout(() => {
    cargarDatos()
}, 3000);