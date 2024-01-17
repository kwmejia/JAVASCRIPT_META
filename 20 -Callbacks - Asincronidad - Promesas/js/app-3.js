//Consumir el archivo txt
//Y vamos a pintar en el DOM cuando el usuario haga clic en el botón
//Cargar texto

//Selectores
const loadText = document.querySelector("#loadText")
const text = document.querySelector("#text")

//Eventos

loadText.addEventListener("click", consumirTxtSegundaForma)

//Funciones
function consumirTxt() {

    const URL = "data/data.txt"
    //Fetch API Es un servicio propio de javascript
    //Nos permite realizar solicitudes http y tambien locales
    //a Fetch tenemos que enviarle como parametro la URL de donde se
    //encuentra la información -FETCH ES UNA PROMESA

    fetch(URL)
        .then((respuesta) => {
            console.log(respuesta.status)
            console.log(respuesta.statusText)
            console.log(respuesta.url)

            return respuesta.text()
        })
        .then((resultado) => {
            console.log(resultado)

            text.textContent = resultado;
        })
        .catch((error) => {
            console.error(`Oops, Ocurrió un error`, error)
        })
}

//Segunda forma
async function consumirTxtSegundaForma() {
    try {
        //PLAN A

        const URL = "data/data.txt";
        const respuesta = await fetch(URL, {
            method: "POST",

        });
        const resultado = await respuesta.text()

        text.textContent = resultado;
    } catch (error) {
        //PLAN B
        console.error(error)
    }
}