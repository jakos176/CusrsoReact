//metodos o funciones en un objeto

const persona = {
	nombre: "Juan",
	trabajo: "Desarrollador web",
	edad: 500,
	musicaRock: true,
	mostrarInformacion() {
		console.log(`${this.nombre} es ${this.trabajo} y su trabajo es ${this.trabajo}`);
	},
};

persona.mostrarInformacion();
