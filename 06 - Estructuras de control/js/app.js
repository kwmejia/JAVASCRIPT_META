//Los condicionales

const puntaje = 100;

if (puntaje === 100) {
  console.log("El puntaje es igual a 100");
} else if (puntaje > 100) {
  console.log("El puntaje es mayor a 100");
} else if (typeof puntaje == "number") {
  console.log("El puntaje es menor a 100");
} else {
  console.log("Tipo de dato no válido");
}

//Switch
const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log("Pagaste en efectivo");
    break;
  case "cheque":
    console.log("Pagaste con cheque");
    break;
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  default:
    console.log("Metodo de pago no válido");
}
//
if (metodoPago === "efectivo") {
  console.log("Pagaste en efectivo");
} else if (metodoPago === "efectivo") {
  console.log("Pagaste con cheque");
} else if (metodoPago === "tarjeta") {
  console.log("Pagaste con tarjeta");
} else {
  console.log("Metodo de pago no válido");
}

//For loop
for (let iterador = 0; iterador <= 10; iterador++) {
  console.log(`9 x ${iterador} = ${iterador * 9}`);
}

//Foor loops anidados
for (let iterador = 0; iterador <= 10; iterador++) {
  for (let iterador2 = 0; iterador2 <= 12; iterador2++) {
    console.log(`${iterador} x ${iterador2} = ${iterador * iterador2}`);
  }
}

//For in and of
let automovil = {
  modelo: "Camaro",
  motor: "5.0",
  year: "2023",
  marca: "Chevrolet",
};

for (let iterador in automovil) {
  console.log(`${automovil[iterador]}`);
}

let automoviles = ["camaro", "sail", "Dupster", "Jetta"];
for (let iterador of automoviles) {
  console.log(`${iterador}`);
}

//do while
let saldo = 10000;
do {
  const opcion = prompt(`*** Bienvenido al cajero automatico***
        1. Consultar saldo
        2. Depositar 
        3. Retirar
        4. Salir

        Seleccione una opción: 
    `);

  if (opcion === "1") {
    alert(`Su saldo es de ${saldo}`);
  } else if (opcion === "2") {
    let nuevoSaldo = prompt("Cuanto vas a depositar?");
    saldo += Number(nuevoSaldo);
    alert(saldo);
  } else if (opcion === "3") {
    let cantidadRetiro = prompt("Cuanto dinero vas a retirar?");
    if (cantidadRetiro > saldo) {
      alert("Saldo insuficiente!!!!");
    } else {
      saldo -= Number(cantidadRetiro);
      alert(saldo);
    }
  }
} while (opcion != "4");

//While
let entrada = prompt("Ingrese un número:");

console.log(isNaN(Number("dasd")));

while (isNaN(Number(entrada))) {
  console.log("El numero ingresado es incorrecto, ingrese nuevamente");
  entrada = prompt(
    "El numero ingresado es incorrecto, Ingrese nuevamente en número: "
  );
}
