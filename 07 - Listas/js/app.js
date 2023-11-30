//Crear una lista con sintaxis []
const listica = [74, 30, 80, 56, 82, 36];
console.log(listica);

//Crear una lista
//objeto
//lista
//booleano
//string

const mixta = ["me ns aje      ", ["1", "2", "3"], true, { nombre: "hola" }];
console.log(mixta);

//acceder al elemento hola creado anteriormente
console.log(mixta[3].nombre);
console.log(mixta[3]["nombre"]);

//Acceder "2"
console.log(mixta[1][1]);

//
console.log(mixta[0].split(" ").join(""));

console.log(mixta[0].replace(/\s/g, ""));

//Metodos de listas

//push - Agregar un item a la lista al final
mixta.push("Nuevo elemento", 2, 4);
console.log(mixta);

//unshif - Para agregar elementos al inicio de la lista
mixta.unshift({ nombre: "Camilo", edad: 29 });
console.log(mixta);

//Para eliminar al final
mixta.pop();
console.log(mixta);
//Para eliminar al inicio
mixta.shift();

//RECORRER LISTAS
const coders = [
  { id: Date.now(), nombre: "sara", tiempoEnRiwi: 2, barrio: "Santa fé" },
  { id: Date.now() + 1, nombre: "cristian", tiempoEnRiwi: 3, barrio: "Mutis" },
  { id: Date.now() + 2, nombre: "manuel", tiempoEnRiwi: 1, barrio: "Mutis" },
  { id: Date.now() + 3, nombre: "daniel", tiempoEnRiwi: 10, barrio: "Mutis" },
];
console.log(coders);

//Recorrer con for

for (let iterador of coders) {
  console.log(iterador);
}

// .foreach - Recorre toda la lista sin devolver nada
coders.forEach((iterador, index) => {
  //   console.log(iterador, index, "Desde for each ");
  iterador.tiempoEnRiwi++;
  if (iterador.tiempoEnRiwi >= 5) {
    console.log(iterador.nombre);
  }
});
console.log(coders);

// .Map Es muy similar

const nuevaLista = coders.map((item, index) => {
  const edadRandom = Math.floor(Math.random() * (30 - 15 + 1) + 15);
  item.edad = edadRandom;
  return { ...item, edad: edadRandom };
});
console.log(nuevaLista);
console.log(coders);

let coderBuscar = "sara";

const estudiantesEncontrados = [];
coders.map((estudiante) => {
  if (estudiante.nombre.toLowerCase() === coderBuscar) {
    estudiantesEncontrados.push(estudiante);
  }
});

console.log(estudiantesEncontrados);
estudiantesEncontrados.forEach((estudiantes) => {
  const { nombre, edad, barrio } = estudiantes;
  console.log(`Nombre: ${nombre} edad:${edad} barrio: ${barrio}`);
});

//Filter - Filtrar elementos de una lista
const encontrados = coders.filter(
  (estudiante) => estudiante.nombre.toLowerCase() == "sara"
);
console.log(encontrados);

const mayoresDeEdad = coders.filter((estudiante) => estudiante.edad >= 18);
console.log(mayoresDeEdad);

//Some - Similar a filter retorna un booleano
const hayMayoresEdad = coders.some((estudiante) => estudiante.edad >= 18);
console.log(hayMayoresEdad);

//Sort - Ordena una lista
const ordenados = coders.sort(
  (a, b) => a.nombre.toLowerCase() <= b.nombre.toLowerCase() && -1
);
console.log(ordenados);

//Every - Todos tienen que cumplir una codición
console.log(coders.every((coder) => coder.edad >= 18));

const productos = [
  {
    id: Date.now() + 1,
    nombre: "Celular",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 50000000,
  },
  {
    id: Date.now() + 2,
    nombre: "Arroz",
    categoria: "comida",
    cantidad: 5,
    precio: 2300,
  },
  {
    id: Date.now() + 3,
    nombre: "Medias",
    categoria: "ropa",
    cantidad: 5,
    precio: 25000,
  },
  {
    id: Date.now() + 4,
    nombre: "Tablet",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 1500000,
  },
  {
    id: Date.now() + 5,
    nombre: "Pizza",
    categoria: "comida",
    cantidad: 5,
    precio: 8000,
  },
  {
    id: Date.now() + 6,
    nombre: "Laptop",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 7000000,
  },
  {
    id: Date.now() + 7,
    nombre: "Chaqueta",
    categoria: "ropa",
    cantidad: 5,
    precio: 500000,
  },
  {
    id: Date.now() + 8,
    nombre: "audifonos",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 70000,
  },
  {
    id: Date.now() + 9,
    nombre: "Reloj",
    categoria: "tecnologia",
    cantidad: 5,
    precio: 900000,
  },
  {
    id: Date.now() + 10,
    nombre: "Pasta",
    categoria: "comida",
    cantidad: 5,
    precio: 600000,
  },
  {
    id: Date.now() + 11,
    nombre: "Camisa",
    categoria: "ropa",
    cantidad: 5,
    precio: 20000,
  },
];

console.log(productos);

//Filtrar entre 500.000 y 1.000.000 mostrar en consola

let rango = prompt("Ingresa el rango de precios a filtrar, separados por coma");

rango = rango.split(",");

if (isNaN(Number(rango[0])) || isNaN(Number(rango[1]))) {
  alert("Los valores ingresados no son correctos");
} else {
  console.log(rango[0], rango[1]);
  let buscarPrecio = productos.filter(
    (producto) =>
      producto.precio >= Number(rango[0]) && producto.precio <= Number(rango[1])
  );
  console.log(buscarPrecio);

  let productosMostrar = "";

  buscarPrecio.forEach((producto) => {
    productosMostrar += `Nombre: ${producto.nombre}, Precio: ${producto.precio}, categoria: ${producto.categoria} \n`;
  });

  alert(`
   PRODUCTOS EN ESTA RANGO DE PRECIO
   ${productosMostrar}
  `);
}
