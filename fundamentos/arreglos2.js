/* Mas sobre los arreglos */

console.log("%c INICIO sobre mas de arreglos", "color:yellow;font-weight:bold;");

let juegos = ["Zelda","Mario", "Metroid", "Chrono"];

let largo = juegos.length;
console.log({ largo });

let primero = juegos[0];
let ultimo = juegos[-1];

console.log({ primero });
console.log({ ultimo });


console.log("%c aplicando dinamismo con FOREACH", "color:orange;font-weight:bold;");


juegos.forEach( (value , index ) => {
  console.log(value , index );
  
});

console.log("%c usando PUSH,UNSHIFT, POP", "color:orange;font-weight:bold;");

let nuevaLongitud = juegos.push("F-Zero");

console.log({ nuevaLongitud } , { juegos } );

nuevaLongitud = juegos.unshift("Fire Emblem");

console.log({ nuevaLongitud } , { juegos });

let juegoBorrado = juegos.pop();

console.log({ juegoBorrado } , { juegos });

console.log("%c usando SPLICE", "color:orange;font-weight:bold;");

let nuevoArregloJuegos = [ ...juegos] /* Hacemos una copia y no afectamos el arreglo original */;
let position = 1;

let deleteGames = nuevoArregloJuegos.splice(position, 2);

console.log({ deleteGames }, nuevoArregloJuegos);

console.log("%c usando INDEXOF", "color:orange;font-weight:bold;");


let search = nuevoArregloJuegos.indexOf("Chrono"); /*indexOf e includes son  Case sensitive */

console.log({ search });









console.log("%c FIN sobre mas de arreglos", "color:red;font-weight:bold;");




