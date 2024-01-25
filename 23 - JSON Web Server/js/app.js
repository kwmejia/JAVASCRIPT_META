const urlBase = "http://localhost:3000/users";

//Selectores
const userForm = document.querySelector("#userForm")
const tbody = document.querySelector("#tbody")
const userName = document.querySelector("#userName")
const userAge = document.querySelector("#userAge")
const idUser = document.querySelector("#idUser")

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    //Llamar la función encargada de obtener los usuarios
    getUsers()
})

userForm.addEventListener("submit", (event) => {
    //Quitar acciones por defecto
    event.preventDefault();
    //Llamamos la funcíon que se encarga de agregar al usuario
    addUser()
})

//Funcion para agregar un usuario
async function addUser() {

    //Guardo la información del usuario en un objeto
    const newUser = {
        name: userName.value,
        age: userAge.value
    }

    //Hago mi petición HTTP

    //Verbos HTTP
    //1. GET -> Obtener
    //2. POST -> Crear
    //3. PUT -> Actualizar
    //4. DELETE -> Eliminar

    await fetch(urlBase, {
        //Method -> Especifico el metodo de la petición
        method: "POST",
        headers: {
            //Indico en que formato voy a enviar la información
            "Content-Type": "application/json"
        },
        //Envío la información
        body: JSON.stringify(newUser)
    })

}


function getUsers() {
    fetch(urlBase)
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}