//metodos en arrays

const personas = [
	{ nombre: "Juan", edad: 23, aprendiendo: "Javascript" },
	{ nombre: "Pablo", edad: 18, aprendiendo: "PHP" },
	{ nombre: "Alejandra", edad: 21, aprendiendo: "AdobeXD" },
	{ nombre: "Caren", edad: 30, aprendiendo: "Python" },
	{ nombre: "Miguel", edad: 35, aprendiendo: "ReactJS" },
];

// console.log(personas);

//mayores de 28
const mayores = personas.filter((persona) => {
	return persona.edad > 28;
});

console.log(mayores);

//que aprende alejandra y su edad
const alejandra = personas.find((persona) => {
	return persona.nombre === "Alejandra";
});

console.log(alejandra);

//Media de las edades
let total = personas.reduce((edadTotal, persona) => {
	return edadTotal + persona.edad;
}, 0);

console.log(total / 5);
