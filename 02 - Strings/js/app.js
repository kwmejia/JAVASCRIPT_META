// alert("Holaaa")
nombre = "Riwi Medellin" // se declara con var


//Variables
var nombreCampus = "Riwi Medellin"; //Var
let nombreCoder = "Sara";
nombreCoder = "Sara Camila" 
const PI = 3.1416

// PI = 2.323

//Strings o cadenas de texto

//Declaración normal
const ciudad = "Medellin"

//Declaración con la función String
const ciudad2 = String("Bucaramanga")

//Declaracion con instacia de clase 
const ciudad3 = new String("Pereira")

console.log(ciudad);
console.log(ciudad2);
console.log(ciudad3);

//Metodos

const centro = "Riwi Coders"
const coder = "Antony Martinez"

console.log("String sin mutar:", centro);

//Convertir una cadena de texto a Mayuscula
console.log("String en Mayuscula:", centro.toUpperCase())

//Convertir una cadena de texto a minuscula
console.log("String en minuscula:", centro.toLowerCase())

//Conocer la cantidad de palabras que tiene una cadena de texto
console.log("La palabra",centro,"tiene:",centro.length, "caracteres")

//Conocer el indice de una palabra, -1 quiere decir que no se encontró
console.log("La palabra",centro,"tiene la letra w en el indice",centro.indexOf("wi"))

//Verificar si el texto contiene la palabra antony
console.log(coder.toLowerCase().includes("antony"))

//Concatenar las dos cadenas de texto
//Con concat
console.log(centro.concat(" Nombre coder:",coder));
//Con sintaxis de +
console.log(centro + " Nombre coder: " + coder)
//Back Strings
console.log(`${centro} Nombre coder: ${coder}`)


//Quitar espacios en los extremos de una cade de texto
const email = " kevin.mejia@riwi.io     "
//Trim quita los espacios en blanco en los extremos
console.log(email.trim())
//Trim Start quita los espacios  al inicio
console.log(email.trimStart())
//Trim end quita los espacios al final de la cadena
console.log(email.trimEnd())


//Remplazar a Antony por Juan
console.log(coder.replace("Antony","Juan"))

//Cortar una palabra
//Con substring
console.log(coder.substring(0,6))

//Con slice
console.log(coder.slice(0,6))

//Conocer que valor tiene una posicion especifica
//charAt
console.log(coder.charAt(5))
//[]
console.log(coder[5])

//Dividir una cadena de caracteres
console.log(coder.split(" "));
console.log(coder.split(" ")[0]);

//Repetir el nombre del coder
console.log(coder.repeat(3));

//Comparar dos strings
let cadena1 = "Hola"
let cadena2 = "Adiós"

console.log(cadena1.localeCompare(cadena2))

//Buscar una palabra

console.log(coder.search(/Martinez/));

//Rellenar una cadena de texto

console.log(coder.padStart(25,"0"))

