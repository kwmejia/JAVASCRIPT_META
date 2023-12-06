const snowContainer = document.querySelector(".snow");

snowContainer.innerHTML = "";

function generarNieve() {
    Array.from({ length: 51 }).forEach((_, i) => {
        const num = generarNumero(11, 26)
        snowContainer.innerHTML += `<span style="--i:${num}"></span>`
    })

}

function generarNumero(inicio, final) {
    return Math.floor(Math.random() * (final - inicio + 1) + inicio)
}

generarNieve();