

console.log("%c Inicio Objetos literales", "color:yellow;font-weight:bold;");


const personajes = {
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
  "ultima-pelicula" : "infinity war,",
  
}

console.log({ personajes });

console.log("%c BORRANDO PROPIEDADES de los Objetos literales", "color:orange;font-weight:bold;");
delete personajes.edad;

console.log({ personajes });

console.log("%c CREANDO PARES EN UN OBJETO " , "color:orange;font-weight:bold;");

let entriesPares = Object.entries( personajes );

console.log({ entriesPares });

entriesPares = Object.fromEntries(entriesPares);

console.log({ entriesPares });

console.log("%c Agregando valor " , "color:orange;font-weight:bold;");

personajes.casado = "true";

console.log({ personajes });



console.log("%c BLOQUEAR OBJETOS CON OBJECT.FREEEZE " , "color:orange;font-weight:bold;");

Object.freeze(personajes);

personajes.nuevo = "nuevo";

console.log({ personajes });

console.log("%c Usnado GetOwnPropertys " , "color:orange;font-weight:bold;");

const propiedades = Object.getOwnPropertyNames( personajes );

console.log({ propiedades });

console.log("%c Usando getKeys y getValues " , "color:orange;font-weight:bold;");

const llaves = Object.values( personajes );

console.log({ llaves });










// console.log("%c MI PRACTICA USANDO FOR IN " , "color:greey;font-weight:bold;");

// for (const clave in personajes) {

//   if (typeof personajes[clave] != "object" ) {
//     personajes[clave] = [clave,personajes[clave]]

//   }
// }

// console.log({ personajes });


console.log("%c FIN Objetos literales", "color:red;font-weight:bold;");