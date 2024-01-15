//Herencia

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
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

//Nuevo
//Empresa va a heredad todos los atributos y metodos de Cliente
class Empresa extends Cliente {
    //Encapsulación
    #nit = ""

    constructor(nombre, saldo, telefono, tipo, nit) {
        //EL metodo super activa el constructor del padre
        super(nombre, saldo)
        this.telefono = telefono;
        this.tipo = tipo;
        this.#nit = nit
    }


    obtenerNit() {
        return this.#nit;
    }


    //Polimorfismo - Sobrescribi
    //@Overwriting
    static bienvenida() {
        return "Hola, bienvenido al cajero para empresas"
    }

}

//Instancia del cliente
const kevin = new Cliente("Kevin", 400)

console.log(Cliente.bienvenida())
console.log(kevin.imprimirSaldo())


//Instacia de Empresa

const empresa = new Empresa("Riwi", 20000, "3131322", "Desarrollo", "91123")
console.log(Empresa.bienvenida())
console.log(empresa.imprimirSaldo())

//Para obtener el valor del atributo 
//privado debemos hacer  uso del metodo encargado de ello
console.log(empresa.obtenerNit())
