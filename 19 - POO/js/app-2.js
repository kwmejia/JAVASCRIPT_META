//Agregar metodos a las clases


class Cliente {

    // static nombre;
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    retirarSaldo(retiro) {
        this.saldo -= retiro;
    }

    static bienvenida() {
        return "Hola, bienvenido al cajero"
    }
}


//Instacio la clase y la guardo en una variable
const objCliente = new Cliente("Kevin", 400)
//Imprimo el metodo estatico de la bienvenida
console.log(Cliente.bienvenida())

//Uso el metodo para retirar el saldo de la instacia creada anteriormete
objCliente.retirarSaldo(250);

//Finalmente imprimo el saldo restante
console.log(objCliente.imprimirSaldo());