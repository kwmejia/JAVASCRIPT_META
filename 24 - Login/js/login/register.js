//Selectores y variables globales
const form = document.getElementById("formRegister");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const passwordConfirmation = document.getElementById("passwordConfirmation");

const URL = "http://localhost:3000/users";

//Eventos
form.addEventListener("submit", (event) => {
    event.preventDefault();

    createUser()
})

async function createUser() {
    //Validar la información

    if (!validatePassword()) {
        showAlert("Contraseña no válida")
        return
    }
    //Validar que el email no esté registrado
    if (await validateEmail()) {
        showAlert("El email ya se encuentra registrado.")
        return
    }

    console.log("PASASTE LAS VALIDACIONES")

    try {
        //Crear al usuario
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: userEmail.value, password: userPassword.value })
        })
    } catch (error) {
        showAlert("Ocurrió un error al crear el usuario.")
    }

}

function showAlert(msg) {
    Swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        showConfirmButton: false,
        timer: 4000,
        toast: "true",
        position: "bottom-right"
    })
}


function validatePassword() {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


    //Validar que las dos contraseñas sean iguales, tengan una minima longitud de 6 caracteres y tengan un caracter especial
    return userPassword.value === passwordConfirmation.value && regex.test(userPassword.value)
}


async function validateEmail() {

    try {
        //
        const response = await fetch(`${URL}?email=${userEmail.value}`)

        const data = await response.json()
        //Si data tiene elementos quiere decir que el email ya está registrado
        console.log(data)
        return data.length
    } catch (error) {
        return false
    }

}
