const textoMaquina = document.querySelector("#maquina_escribir_text");

const palabras = ["Frontend", "Backend", "Ux/Iu", "Qa", "DevOps"];

let currentIndex = 0;

function maquinaEscribir() {
    textoMaquina.textContent = "";
    let textArr = palabras[currentIndex];
    textArr = textArr.split("");
    console.log(textArr)

    let i;

    const pintarString = setInterval(() => {

    }, 200);
}


maquinaEscribir()