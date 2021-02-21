//parametros por default en las funciones

const actividad  = function actividad(nombre = 'Edu', actividad = 'Deporte') {
  console.log(`La persona ${nombre}, esta realizando la activadad ${actividad}`);
}

actividad("Juan", "Aprender Javascript");
actividad();
