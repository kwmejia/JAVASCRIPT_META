//Promesas

//Como crear una promesa
//Resolve - para decirle que hacer si se cumple
//Reject - para decir que hacer si la promesa no se cumple
const premiarProyecto = new Promise((resolve, reject) => {
    //Toda lo logica
    const premiados = true;

    setTimeout(() => {
        if (premiados) {
            resolve(["Sara", "Javier", "Manuel"])
        } else {
            reject("No se pudo premiar ningún grupo.")
        }
    }, 1000);
})




//Veridicando el estado de las promesas

console.log(premiarProyecto)

//Como utilizar la promesas
premiarProyecto
    .then((resultado) => {
        //Si cumplió la promesa
        console.log("Los ganadores del concurso son:", resultado.join(","))
    }).catch((error) => {
        //Si no se cumplió la promesa
        console.log(error)
    })