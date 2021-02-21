//Destructuring de objetos
const aprendiendoJS = {
  version: {
    nueva: "ES6+",
    anterior: "ES6",
  },
  frameworks: ["React", "Angular", "VueJs"],
};

//Destructuring es extraer valores de un objeto
// console.log(aprendiendoJS);

//version anterior
// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];

//version nueva
let { nueva } = aprendiendoJS.version;
console.log(nueva);
