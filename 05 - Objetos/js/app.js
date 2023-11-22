// const nombre = "Ana";
// const edad = 24;
// const barrio = "Palmas";

//Objetos literales - agrupan una seria de variables
//Y se llaman atributos

//Creando un objeto literal
const coder = {
  nombre: "Ana",
  edad: 24,
  barrio: "Palmas",
};

console.log(coder);

//Sintaxis de punto
console.log(coder.nombre);
console.log(coder.edad);
console.log(coder.barrio);

//Sintaxis []
console.log(coder["edad"]);

//Agregar una propiedad
//Primera forma
coder.foto = "./img/foto-ana.jpg";
console.log(coder);
//Segunda forma
coder["hermanos"] = 2;
console.log(coder);

//Eliminar atributos de un objeto literal
delete coder.foto;
console.log(coder);

//Reasignar una propiedad
coder.nombre = undefined;
console.log(coder);

//Guardar los atributos en variables
const nombreCoder = coder.nombre;
const edadCoder = coder.edad;
console.log(nombreCoder, edadCoder);

//Destructuring object
const { barrio, edad, nombre, foto, hermanos } = coder;

console.log(barrio);
console.log(edad);
console.log(nombre);
console.log(foto);
console.log(hermanos);

let producto = {
  name: "Celular ultimo modelo",
  precio: 1500000,
  disponible: true,
  informacion: {
    peso: "1kg",
    medidas: '10"',
  },
};

console.log(producto.precio);
console.log(producto.informacion.medidas);

const {
  name,
  precio,
  disponible,
  informacion: { medidas, peso },
} = producto;

console.log(name);
console.log(precio);
console.log(disponible);
console.log(medidas);
console.log(peso);

//Congelar un objeto literal
//Congelamiento estricto
Object.freeze(producto);
console.log(producto);
producto.nuevo = "nuevo";
producto.name = "otra cosa";
console.log(producto);

console.log(Object.isFrozen(producto));
producto = { ...producto };
console.log(Object.isFrozen(producto));
//Congelamientos dinamico

Object.seal(producto);
producto.name = "Tablet";
producto.nuevaPropiedad = "nueva";
console.log(producto);

//Unir dos objetos
const producto1 = {
  nameProducto: "Cama",
  descripcion: "De madera, roble",
};

const medidasCama = {
  alto: 2,
};
Object.defineProperty(medidasCama, "ancho", {
  value: 1.5,
  configurable: false,
  enumerable: true,
  writable: false,
});

//Primera forma
let resultado = Object.assign(producto1, medidasCama, { ancho: 2332 });
console.log(resultado);

//Segunda forma ...
resultado = { ...producto1, ...medidasCama, precio: 100000 };
console.log(resultado);

resultado = {
  nameProducto: producto1.nameProducto,
  descripcion: producto1.descripcion,
  alto: medidasCama.alto,
  ancho: medidasCama.ancho,
  precio: 100000,
};

const nombreMascota = "Pepe";

const mascota = {
  nombreMascota,
};

console.log(mascota);

//

Object.defineProperty(mascota, "edad", {
  writable: false,
  configurable: true,
  enumerable: true,
  value: 2,
});

console.log(mascota);

mascota.edad = 3;
console.log(mascota);

console.log(Object.keys(mascota));
console.log(Object.values(mascota));
console.log(Object.entries(mascota));
