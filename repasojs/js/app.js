// funciones

//funcion Declaration
function saludar(nombre) {
  console.log(`Bienvenido ${nombre}`);
}

saludar('Juan');
 

//function Expression
//Se deben declarar las funciones antes de usarla. En Declaration
//da igual
const cliente = function(nombreCliente){
    console.log(`Mostrando datos del cliente ${nombreCliente}`)
}

cliente('Juan')