import Tarea from "./tarea.js";
import comprasPendientes from "./compras.js";

const tarea1 = new Tarea('Aprender Javascript', 'Urgente');

console.log(tarea1)

tarea1.mostrar();


const compra1 = new comprasPendientes('Pizza', 'Urgente', 2);

compra1.mostrar();