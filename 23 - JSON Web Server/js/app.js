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

    if (idUser.value) {
        updateUser()
    } else {
        addUser()
    }
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

    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

//Obtener los usuarios
function getUsers() {
    fetch(urlBase)
        .then(respuesta => respuesta.json())
        .then(data => renderUsers(data))
        .catch(error => console.error(error))
}

//Función para monstrar los usuarios en el HTML
function renderUsers(users) {
    users.forEach(user => {
        //TD
        const tdName = document.createElement("td")
        const tdAge = document.createElement("td")
        const tdActions = document.createElement("td")
        //Buttons
        const btnUpdate = document.createElement("button")
        const btnDelete = document.createElement("button")

        //tr
        const tr = document.createElement("tr")

        btnDelete.classList.add("btn", "btn-danger", "mx-2")
        btnUpdate.classList.add("btn", "btn-primary", "mx-2")

        btnDelete.textContent = "Delete";
        btnUpdate.textContent = "Edit";


        btnDelete.addEventListener("click", () => {
            console.log("Eliminando")
            deleteUser(user.id)
        })

        btnUpdate.addEventListener("click", () => {
            console.log("Actualizando")
            loadingInfo(user)
        })

        tdName.textContent = user.name;
        tdAge.textContent = user.age;


        //Appendchilds

        tdActions.appendChild(btnDelete)
        tdActions.appendChild(btnUpdate)


        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdActions)

        tbody.appendChild(tr)
    });
}

async function deleteUser(id) {
    console.log(`${urlBase}/${id}`)
    await fetch(`${urlBase}/${id}`, {
        method: "DELETE"
    })

}

function loadingInfo(user) {
    userAge.value = user.age;
    userName.value = user.name;
    idUser.value = user.id;
}