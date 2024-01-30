//Selectores
const btnLogOut = document.querySelector("#btnLogOut")


btnLogOut.addEventListener("click", () => {
    localStorage.removeItem("isAuthenticated")
    window.location.href = "index.html"
})