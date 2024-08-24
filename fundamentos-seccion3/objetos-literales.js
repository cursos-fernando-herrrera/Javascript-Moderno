
/* OBJETOS LITERALES */
console.log("%c Inicio Objetos" , "color:yellow;font-weight:bold;");

let personajes = {
  nombre : "Tony Stark",
  codeName : "Ironman",
  vivo : false,
  edad : 40,
  coords : {
    lat : 34.034,
    lng : -118.70,
  },
  trajes : ["Mark I", "Mark V", "Hulbuster"],
  direccion : {
    zip: "10880, 90265",
    ubicacion : "Malibu , California",
  },
  "ultima-pelicula" : "infinity war,"
}

console.log( { personajes });

console.log(`Nombre : ${personajes.nombre}`);
console.log(`Nombre : ${personajes["nombre"]}`);
console.log(`Edad : ${personajes["edad"]}`);
console.log(`Coors : ${personajes.coords}`);
console.log(`Lat : ${personajes.coords.lat}`);

console.log("%c TAREA" , "color:orange;font-weight:bold;");

console.log(`Nro Trajes : ${personajes.trajes.length}`);
console.log(`Ultimo Traje : ${personajes.trajes[personajes.trajes.length-1]}`);


const x = "Vivo";

console.log(`vivo : ${personajes[x]}`);
console.log(`ultimaPelicula : ${personajes["ultima-pelicula"]}`);


console.log(personajes);



console.log("%c fin Objetos" , "color:red;font-weight:bold;");
