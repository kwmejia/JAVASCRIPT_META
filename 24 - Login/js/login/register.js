//Selectores y variables globales
const form = document.getElementById("formRegister");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const passwordConfirmation = document.getElementById("passwordConfirmation");

//Eventos
form.addEventListener("submit", (event) => {
    event.preventDefault();

    createUser()
})

function createUser() {
    //Validar la información
}


function validatePassword() {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


    //Validar que las dos contraseñas sean iguales, tengan una minima longitud de 6 caracteres y tengan un caracter especial
    return userPassword.value === passwordConfirmation.value && regex.test(userPassword.value)
}

