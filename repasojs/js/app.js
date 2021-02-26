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

class comprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
}


//crear los objetos
let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender PHP', 'Baja');

tarea1.mostrar();
tarea2.mostrar();

//compras

let compra1 = new comprasPendientes('Jabon', 'Alta', 2);
compra1.mostrar();