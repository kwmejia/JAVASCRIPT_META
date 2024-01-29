//Selectores
const formLogin = document.getElementById("formLogin")
const userEmail = document.getElementById("userEmail")
const userPassword = document.getElementById("userPassword")


const URL = "http://localhost:3000/users"

formLogin.addEventListener("submit", (event) => {
    event.preventDefault()

    login()
})

async function login() {
    const response = await fetch(`${URL}?email=${userEmail.value}`)
    const data = await response.json()

    console.log(data)

    if (!data.length) {
        console.log("Email no registrado")
        return
    }


    if (data[0].password === userPassword.value) {
        //Autenticar

        localStorage.setItem("isAuthenticated", "true")
        //window es un objeto global que nos permite acceder a la información la ventana
        window.location.href = "administrator.html"

    } else {
        console.log("Contraseña incorrecta.")
    }

}