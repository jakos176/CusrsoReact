//Objetos

//Object literal

const persona = {
  nombre: "Juan",
  profesion: "Desarrollador web",
  edad: 50,
};

console.log(persona);

//Object constructor

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.nombre)