import Tarea from "./tarea.js";

export default class comprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
}