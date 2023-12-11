const snowContainer = document.querySelector(".snow");
const audioNavidad = document.querySelector("#musica_navidad");

audioNavidad.play()


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

function timerNavidad() {
    //1. Obtener la fecha actual
    const fechaActual = new Date();

    //2. Definir el objetivo (25 de diciembre del mismo año)
    const fechaObjetivo = new Date(fechaActual.getFullYear(), 11, 25) // El mes 11 representa  diciembre (0 - indice)

    //3.Verificar si la fecha objetivo ya pasó
    if (fechaActual.getMonth() === 11 && fechaActual.getDate() > 25) {
        fechaObjetivo.setFullYear(fechaObjetivo.getFullYear() + 1);
    }

    //4.Calcular la diferencia entre fechas (en milisegundos)
    let diferenciaEnMS = fechaObjetivo - fechaActual;


    let diasRestantes = Math.floor(diferenciaEnMS / (1000 * 60 * 60 * 24));

    let horasRestantes = Math.floor((diferenciaEnMS % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))

    let minutosRestantes = Math.floor(
        (diferenciaEnMS % (1000 * 60 * 60) / (1000 * 60))
    );

    let segundosRestantes = Math.floor(
        (diferenciaEnMS % (1000 * 60)) / 1000
    );


    console.log(diasRestantes, horasRestantes, minutosRestantes, segundosRestantes);

    const diasHTML = document.getElementById("dias-restantes");
    const horasHTML = document.getElementById("horas-restantes");
    const minutosHTML = document.getElementById("minutos-restantes");
    const segundosHTML = document.getElementById("segundos-restantes");


    diasHTML.innerHTML = diasRestantes.toString().padStart(2, "0");

    horasHTML.innerHTML = horasRestantes.toString().padStart(2, "0");

    minutosHTML.innerHTML = minutosRestantes.toString().padStart(2, "0");

    segundosHTML.innerHTML = segundosRestantes.toString().padStart(2, "0");

}

setInterval(timerNavidad, 1000);

generarNieve();