const textoMaquina = document.querySelector("#maquina_escribir_text");

const palabras = ["Frontend", "Backend", "Ux/Iu", "Qa", "DevOps"];

let currentIndex = 0;

function maquinaEscribir() {
    textoMaquina.textContent = "";
    let textArr = palabras[currentIndex];
    textArr = textArr.split("");

    let i = 0;

    const pintarString = setInterval(() => {
        textoMaquina.textContent += textArr[i];
        i++;
        if (i == textArr.length) {
            clearInterval(pintarString);
            setTimeout(() => {
                borrarPalabra()
            }, 1000); //Tiempo antes de borrar la palabra
        }
    }, 200); //Tiempo para escribir cada una de las letras
}

function borrarPalabra() {
    let texto = textoMaquina.textContent;

    const borrarString = setInterval(() => {
        texto = texto.slice(0, -1);
        textoMaquina.textContent = texto;
        if (texto == "") {
            clearInterval(borrarString);
            currentIndex = (currentIndex + 1) % palabras.length; //Cambiar a la siguiente palabra
            setTimeout(() => {
                maquinaEscribir()
            }, 500)
        }
    }, 100) //Tiempo en borrar cada una de las letras

}

maquinaEscribir()

let textoAnimado = document.querySelector(".text");

textoAnimado.innerHTML = textoAnimado.innerHTML
    .split("")
    .map((letra, index) =>
        `<span 
        style="transition-delay: ${index * 40}ms; filter: hue-rotate(${index * 30}deg);">
          ${letra}
        </span>`)
    .join("")

