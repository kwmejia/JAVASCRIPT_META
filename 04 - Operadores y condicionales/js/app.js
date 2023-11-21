const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Operador >
console.log(`${numero3} es mayor a ${numero2}: ${numero3 > numero2}`)

//Operador <
console.log(`${numero2} es menor a ${numero3}: ${numero2 < numero3}`);

//Operador >=
console.log(numero2 >= numero1);

//Operador <=
console.log(numero2 <= numero1);

//Comparación ==
console.log(numero2 == numero1);
console.log(numero3 == numero1);

//Comparación estricto
console.log(numero2 === numero1);
console.log(numero3 === numero1);

//Undefined y null
let variable;
let variableNull = null;
console.log(typeof variable);
console.log(typeof variableNull);


console.log(variable === variableNull);

//Operador AND &&
let edad = 17
console.log(edad >= 17 && edad <= 80 && edad == 17 && edad > 10 && edad == 0);

//Operador o cumpuerta ||
console.log(edad >= 17 || edad == 0 || edad <= 80);

//Operador != Diferente
console.log((edad != "17" && edad != 20 )|| edad < 5);

//Operador ternario  a ? b : c
let altura = "1.50";

altura >= 1.70 && altura<=  3 
    ?  console.log("Eres alto") 
    :  console.log("Eres Bajito");
// 1.50 bajito
// 1.70 normal
//  1.80 alto
 
(altura <= 1.50) 
    ? console.log("Eres bajito") 
    : (altura >= 1.70 && altura <= 1.79)  
        ? console.log("Eres normal") 
        : console.log("Eres alto");

altura >= 1.80 && console.log("Eres alto");

if (altura >= 1.80) console.log("Eres alto");
else console.log("Eres bajito")


let coder = "Ana";
let edadCoder =  26;
let ciudad = "Medellin";
let barrio = "Las palmas";
let hayMetro = false
let horaDespertar = "5a.m"
let anaDespierta = false

if (coder == "Ana") {
    if (coder == "Ana" && barrio == "Las palmas") {
        console.log("Ella vive el barrio las palmas")
        if (!hayMetro) {
            console.log("Ana llega en Indrive o bus")
            if (horaDespertar == "6a.m") {
                console.log("LLega temprano")
                console.log("No pasa nada")
            }else {
                console.log("La levanta la mamá")
                console.log("LLegó un poquito tarde")
                if (coder == "Ana" &&  !anaDespierta) {
                    anaDespierta = true
                }else {
                    console.log("Ana no llega")
                }
            }
        }else {
            console.log("Ana cogeria el metro todos los días")
        }
    }

}else {
    console.log("No es Ana")
}
