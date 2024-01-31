//Selectores
const formAuthor = document.getElementById("formAuthor")
const nameAuthor = document.getElementById("name")
const ageAuthor = document.getElementById("age")
const URLAuthors = "http://localhost:3000/authors"
//Eventos

formAuthor.addEventListener("submit", (event) => {
    event.preventDefault()

    createAuthor()
})

function createAuthor() {
    fetch(URLAuthors, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: nameAuthor.value, age: ageAuthor.value })
    })
}