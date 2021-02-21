//object literal enhancement

const band = "Metallica";
const genero = "Heavy metal";
const canciones = ["Master Of Puppets", "Enter Sandman", "Nonpoint"];

//form anterior
const metallica = {
  banda: band,
  genero: genero,
  canciones: canciones,
};

//forma sencilla o nueva
const metallica = { banda, genero, canciones };
console.log(metallica);
