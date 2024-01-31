//Selectores
const formAuthor = document.getElementById("formAuthor")
const nameAuthor = document.getElementById("name")
const ageAuthor = document.getElementById("age")
const formBooks = document.getElementById("formBooks")
const nameBook = document.getElementById("nameBook")
const dateBook = document.getElementById("dateBook")
const authorBook = document.getElementById("authorBook")
const URLAuthors = "http://localhost:3000/authors"
//Eventos

document.addEventListener("DOMContentLoaded", () => {
    loadSelectAuthor()
})

formAuthor.addEventListener("submit", (event) => {
    event.preventDefault()

    createAuthor()
})

function loadSelectAuthor() {
    //1.Obtener todos los autores -> GET
    //2.Recorrer la lista de autores y por cada autor crear una etiqueta option, llenar el value y el titulo y agregarlo dentro del select
}

function createAuthor() {
    fetch(URLAuthors, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: nameAuthor.value, age: formBooks.value })
    })
}