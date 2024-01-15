class AdministrarCitas {

    constructor() {
        this.citas = [];
        this.editando = false;
    }

    agregarCita(cita) {
        if (this.editando) {
            //Edite
            return
        }

        //Agregando
        this.citas.push({ ...cita, id: Date.now() })
    }

    eliminar(id) {
        this.citas = this.citas.filter(cita => cita.id != id)
    }


    actualizar(cita) {

        const citaActualizar = this.citas.find(cita => cita.id == id)
        citaActualizar.mascota = cita.mascota
    }
}


class UI {

    imprimirCitas(citas, contenedor) {
        contenedor.innerHTML = "";

        citas.forEach(cita => {

            contenedor.innerHTML += `
             <div class="card" style="width: 12rem">
                <div class="card-body">
                  <h5 class="card-title">${cita.mascota}</h5>
                  <p class="card-text">
                    <span>Propietario: ${cita.propietario}</span>
                    <span>Telefono: ${cita.telefono}</span>
                    <span>Fecha: ${cita.fecha}</span>
                    <span>Hora: ${cita.hora}</span>
                    <span>Sintomas: ${cita.sintomas}</span>
                  </p>
                  <div class="d-flex">
                    <button class="btn btn-primary">Editar</button>
                    <button class="btn btn-danger" onclick="eliminarCita(${cita.id})">Eliminar</button>
                  </div>
                </div>
              </div>
            
            `;

        });
    }
}

const administrarCitas = new AdministrarCitas();
const administrarUI = new UI();

//Selectores
const mascota = document.querySelector("#name_pet");
const propietario = document.querySelector("#name_person");
const telefono = document.querySelector("#phone_number");
const fecha = document.querySelector("#date_cite");
const hora = document.querySelector("#time_cite");
const sintomas = document.querySelector("#description");
const formulario = document.querySelector("form");
const contenedor = document.querySelector(".container-citas")

//Eventos

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const nuevaCita = {
        mascota: mascota.value,
        propietario: propietario.value,
        telefono: telefono.value,
        fecha: fecha.value,
        hora: hora.value,
        sintomas: sintomas.value,
    }
    //Agrego la cita
    administrarCitas.agregarCita(nuevaCita)

    //Muestro las citas en pantalla
    administrarUI.imprimirCitas(administrarCitas.citas, contenedor)

    //Reinicio el formulario
    formulario.reset()
    //Le quito la clase del bootstrap
    formulario.classList.remove('was-validated')

    console.log(administrarCitas.citas)

})

//Funciones
function eliminarCita(id) {
    administrarCitas.eliminar(id)
    administrarUI.imprimirCitas(administrarCitas.citas, contenedor)
}

