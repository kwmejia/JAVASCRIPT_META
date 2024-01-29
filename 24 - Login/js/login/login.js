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
}