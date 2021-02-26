// Programacion orientada a objetos

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
    }
}


//crear los objetos
let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender PHP', 'Baja');

tarea1.mostrar();
tarea2.mostrar();