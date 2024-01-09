// Ejemplo basico de como guardar un item en el local Storage
localStorage.setItem("company", "Riwi");

//Ejemplo basico para obtener el valor de un item del localStorage

const valor = localStorage.getItem("company");
console.log(valor)

//Ejemplo basico, eliminar un item

// ElIMINAR POR KEY
localStorage.removeItem("company")

//LIMPIAR TODO EL LOCALSTORAGE
localStorage.clear()


const coder = { nombre: "Samuel", edad: 23, ciudad: "Medellín" }

//JSON 
console.log(coder)
const objString = JSON.stringify(coder)
console.log(objString)

//Ya convertido el objeto podemos guardarlo en local storage
localStorage.setItem("coder", objString)

//Actualizar el objeto
//1. Obtengo el valor del localStorage
const coderString = localStorage.getItem("coder");
//2. Convierto la cadena de texto a codigo Javascript
const coderObjeto = JSON.parse(coderString)

//Modificar 
coderObjeto.altura = "1.70";

localStorage.setItem("coder", JSON.stringify(coderObjeto))

console.log(coderObjeto)


//Lista de objetos
const coders = [
    { nombre: "Sara", fecha_nac: "Julio", No_familia: 4 },
    { nombre: "Juan", fecha_nac: "Agosto", No_familia: 1 },
    { nombre: "Manuel", fecha_nac: "Noviembre", No_familia: 2 },
    { nombre: "Tomás", fecha_nac: "Septiembre", No_familia: 5 },
    { nombre: "Roberto", fecha_nac: "Febrero", No_familia: 0 },
    { nombre: "Ana", fecha_nac: "Enero", No_familia: 4 },
]


localStorage.setItem('Estudiantes', JSON.stringify(coders))

const estudiantesString = localStorage.getItem('Estudiantes')

let estudiantesJs = JSON.parse(estudiantesString)

estudiantesJs.forEach(estudiante => {
    if (estudiante.nombre == 'Sara') {
        estudiante.fecha_nac = 'septiembre'
    }
});

localStorage.setItem('Estudiantes', JSON.stringify(estudiantesJs))
