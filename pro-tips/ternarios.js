

console.log("%c PRO TIPS para los TERNARIOS", "color:orange;font-weight:bold;");



const mayor = (a , b) => ( a > b ) ? a : b;
console.log("el mayor es", mayor( 5, 10));


const membresia = ( miembro ) => ( miembro ) ? "2 dolares" : "10 Dolares";

console.log(membresia(false));

console.log("***********");


const amigo = true;


const amigosArr = [
  "peter","tony","dr. strange", amigo ? "thor" : "loki"
]

console.log({ amigosArr });

console.log("***********");



const notas = 65;


const grado = ( notas >= 95 ) ? "A+" :
              ( notas >= 90 ) ? "A"  :             
              ( notas >= 85 ) ? "B"  :             
              ( notas >= 68 ) ? "C"  : "F";             
 

console.log(grado);
              





