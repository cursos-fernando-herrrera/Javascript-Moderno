
/* Arreglos */

console.log("%c INICIO de los Arrays" , "color:yellow;font-weight:bold;");

const arr = [];

console.log( { arr });


let videojuegos = ["Mario 3", "Megaman", "Chrono Trigger"];

console.log({ videojuegos});

// let [post0 , ...restoJuegos] = videojuegos;
// console.log(restoJuegos);

console.log(videojuegos[0]);



let arregloCosas = [
  true,
  ["1"," ",3,4,true,[
    false,
    () => {}
  ]],
  123,
  "jesus",
  1 + 2,
  function() {},
  () => {},
  { a : 1 },
  ["x","megaman","zero","dr.light", [
    "dr. willy",
    "woodman",
  ]]
];

console.log({ arregloCosas });

console.log("%c TAREA", "color:orange; font-weight:bold;");


console.log( { arregloCosas : arregloCosas[2]} );
console.log( { arregloCosas : arregloCosas[8][4][1]} );


console.log("%c PRUEBAS MIAS", "color:blue; font-weight:bold;");

console.log(arregloCosas.flat(1));


console.log("%c FIN de los Arrays" , "color:red;font-weight:bold;");