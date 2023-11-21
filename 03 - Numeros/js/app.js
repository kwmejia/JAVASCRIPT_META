//Creacion de números
//Primera forma
const numero1 = -20;
//Segunda forma
const numero2 = Number(200);
//Tercera forma
const numero3 = new Number(23.4);

console.log(numero1);
console.log(numero2);
console.log(numero3.valueOf());

//El maximo valor de un número
console.log(Number.MAX_VALUE);
//El valor minimo de un número
console.log(Number.MIN_VALUE)
//Obtener NAN
console.log(Number.NaN);
//Valor de infinito Positivo
console.log(Number.POSITIVE_INFINITY);
//Valor de infinito Negativo
console.log(Number.NEGATIVE_INFINITY);
const numeroInfinitoNegativo = Number.NEGATIVE_INFINITY
console.log(numeroInfinitoNegativo)

//Operaciones con numeros
let num1 = 30;
let num2 = 20;
let resultado;

//Suma
resultado = num1 + num2;
console.log(`La suma de ${num1} + ${num2} = ${resultado}`);

//Resta
resultado = num1 - num2;
console.log(`La resta de ${num1} - ${num2} = ${resultado}`);

//Multiplicación
resultado = num1 * num2;
console.log(`La multiplicación de ${num1} x ${num2} = ${resultado}`);

//División
resultado = num1 / num2;
console.log(`La división de ${num1} / ${num2} = ${resultado}`);

//Modulo ()
resultado = num1%num2
console.log(`El residuo de ${num1} / ${num2} = ${resultado}`);

//Incrementar una variable o número
let antesDeIncremento  = num1;
//Primera forma
num1 = num1 + 1;
console.log(num1);
//Segunda forma
num1++;
console.log(num1);
//Tercera forma
++num1;
console.log(num1);

//Incrementos en números
num1+=3
console.log(num1);

console.log(antesDeIncremento)
//Decrementos

let antesDeDecremento = num2;
//Primera forma de decremento
num2 = num2 - 1;
console.log(num2);

//Segunda forma
num2--;
console.log(num2);
//Tercera forma
--num2;
console.log(num2);

//
num2-=4
console.log(num2);

//Objeto Math
const PI = Math.PI
console.log(`El número PI = ${PI}`);

//Euler
console.log(`El numero Euler = ${Math.E}`);

//Redondear un número
const numero_1 = 2.5;
console.log(Math.round(numero_1));

//Aproximar hacia abajo
console.log(Math.floor(numero_1));
//Aproximar hacia arriba
console.log(Math.ceil(numero_1));

//Raiz Cuadrada
console.log(Math.sqrt(16));

//Valor Absoluto
console.log(Math.abs(-400));

//Potenciación
console.log(`8 ^2 = ${Math.pow(8,2)}`);
console.log(`8 ^2 = ${8**2}`);

//Mayor de un conjunto de números
const mayor = Math.max(21,54,-34,100,0);
console.log(mayor);

//Menor de un conjunto de números
const menor =  Math.min(21,54,-34,100,0);
console.log(menor);

console.log(Math.abs(Math.min(21,54,-34,100,0)));

//Números randoms
console.log(Math.floor(Math.random() * 10))

//Numero al azar del 10 al 30
console.log(Math.floor(Math.random() * (30 - 10 + 1 ) + 10 ));

/**
 * 1. Divisiones, Multiplicaciones
 * 2. Sumas , restas
 */

resultado = (20 + 30) * 2;
console.log(resultado);

console.log(Math.sign(Number.MIN_VALUE))

console.log(Math.sin(Math.PI));