//1. Callbacks, callbacks Hell
const coders = ["Sara", "Ana", "Romario"];

function nuevoCoder(coder, callback) {
    setTimeout(() => {
        coders.push(coder)
        callback();
    }, 3000)
}

function mostrarCoders() {
    setTimeout(() => {
        console.clear()
        coders.forEach(coder => {
            console.log(coder)
        })
    }, 1000)

}

mostrarCoders()
nuevoCoder("Cristian", mostrarCoders)