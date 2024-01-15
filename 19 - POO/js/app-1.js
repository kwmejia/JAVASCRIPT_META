//Como crear una entidad (CLASE)

class Cliente { //EL nombre debe ser en mayuscula

    //Metodo constructor (el los primero que va a hacer la entidad cuando se use (se instancie))
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

//Crear una instancia

const objCliente = new Cliente("Samuel", 40000);
const objCliente2 = new Cliente("kevin", 40000);

console.log(objCliente)


//Otra forma de crear las clases

const users = class User {
    constructor(nombre, password) {
        this.nombre = nombre
        this.password = password
    }
}