/* Tips para retornar en un bojeto */

console.log("%c TIPS PARA RETORNAR UN OBJETO  EN AMBAS FUNCIONES", "color:yellow;font-weight:bold;");
console.log("%c FUNCION TRADICIONAL", "color:orange;font-weight:bold;");

function crearPersona ( nombre , apellido ) {
  return {
    nombre,
    apellido,
  }
}

const persona = crearPersona("jesus","zeballos");
console.log(persona);


console.log("%c FUNCION FLECHA", "color:orange;font-weight:bold;");


/* retorno de un objeto usando funcion de callback */

/* Esta necesita ser llamada con parentesis */
const persona2 = (nombre , apellido ) => ({nombre, apellido});

console.log("persona 2", persona2("lucas", "dalto"));

const persona3 = persona2("juan","gabriel")
/* De esta manera no necesita  ser llamada con parentesis()*/
console.log({ persona3 });



console.log("%c ARGUMENTOS DE LAS FUNCIONES TRADICIONALES", "color:orange;font-weight:bold;");


function imprimirArgumnetos() {
  
  console.log(arguments);
}

imprimirArgumnetos("10",true,false,"jesus","fernando");

console.log("%c ARGUMENTOS DE LAS FUNCIONES CALLBACK", "color:orange;font-weight:bold;");

const imprimirArgumentos2 = ( edad , ...args ) => {
  // console.log({edad , args});
  
  return  args;
};
const argumentos = imprimirArgumentos2("10",true,false,"jesus","fernando");


console.log( argumentos );

console.log("%c EXTRAYENDO ARGUMENTOS  EN VARIABLES", "color:orange;font-weight:bold;");


const [ casado , vivo , name, saludo ] = argumentos;

console.log(casado);

const personaFinal = crearPersona("jesus","zeballos");


const { nombre } = personaFinal;

console.log(nombre);


console.log("%c DESESTRUCTURANDO ARGUMENTOS", "color:orange;font-weight:bold;");



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

// const imprimirPropiedades = ( personaje ) => {
  
//   console.log( "nombre:", personaje.nombre);
//   console.log( "codeName:", personaje.codeName);
//   console.log( "vivo:", personaje.vivo);
//   console.log( "edad:", personaje.edad);
//   console.log( "coords:", personaje.coords);
// };

const imprimirPropiedades = ( { nombre , codeName, vivo, edad = 18, coords} ) => {
  
  // edad = edad || 18;/* Alternativa de validacion */
  console.log( { nombre });
  console.log( { codeName });
  console.log( { vivo });
  console.log( { edad });
  console.log( { coords });
};

imprimirPropiedades( personajes );





