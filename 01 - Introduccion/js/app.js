//COMENTARIO DE UNA LÍNEA

/*  
  COMENTARIO EN BLOQUE
*/

//Alert es una función propia de JavaScript
// Funciona para mostrar alertar a los usuarios
// alert("Hola Mundo")

//Prompt es una función de Javascript que permite mostrar
//al usuario una alerta y además recibir una entrada
// edad = prompt("Ingrese su edad: ")

// console.log("La edad del la persona es: ",edad)

//Impresiones por consola

//Console.los() imprime por consola un mensaje
console.log("Hola Mundo")

//Console.ingfo() muestra por consola un mensaje informativo
console.info("Esto es un mensaje informativo")

//console.warn() Muestra un mensaje de advertencia por consola
console.warn("Esto es una advertencia")

//console.error() Muestra un mensaje de error por consola
console.error("Esto es un mensaje de erro")

//Console.debug() Se utiliza para depurar errores
console.debug("Debugeando");


//Console.table() nos permite mostrar información en un formato de tabla
console.table([{ nombre: "Katherine", edad: 15}])

console.group("Grupo principal")
console.log("Item 1")
console.log("Item 2")
console.log("Item 3")
console.group("Segundo grupo")
console.log("Item 1")
console.groupEnd()
console.groupEnd()
