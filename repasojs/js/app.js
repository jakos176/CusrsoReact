//Spread operator

let lenguajes = ["JavaScript", "Php", "Python"];
// let frameworks = ["React", "Laravel", "Django"];

//Unir arrays en uno solo
// let combinacion = lenguajes.concat(frameworks);

// console.log(combinacion);

//forma nueva
// let combinacion = [...lenguajes, ...frameworks];

//let [ultimo] = [...lenguajes].reverse();

//console.log(ultimo);

function suma(a, b, c) {
	console.log(a + b + c);
}

const numeros = [1, 2, 3];

suma(...numeros);

console.log(lenguajes);
