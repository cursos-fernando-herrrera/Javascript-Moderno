

console.log("%c OPERADOR TERNARIO", "color:orange;font-weight:bold;");


/* DIas de semana abrimos a las 11, pero lso fines de semana abrimos a las 9 
  Entra a un sitio web para consultar si esta abierto hoy...
*/
console.log("%c EJERCICIO DEL CURSO", "color:orange;font-weight:bold;");

// ? USANDO TERNARIOS
let dia = 0;
let horaActual = 10;

let horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

let mensaje = ( horaActual >= horaApertura) ? "esta abierto" : `esta cerrado , abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });

// ? SIN USAR TERNARIOS


// const dia = 1;
// const horaActual = 10;


// let horaApertura;
// let mensaje;

// if ( dia === 0 || dia === 6) {
//   console.log("Fin semana");
  
//   horaApertura = 9;
  
// }else{
//   console.log("Dias de semana");
  
//   horaApertura = 11;
// }

// // console.log({horaApertura});

// if (horaActual > horaApertura) {
//   mensaje = "Esta abierto";
// } else{
//   mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }


// console.log({ horaApertura , mensaje});





// console.log("%c PRACTICA MIA", "color:orange;font-weight:bold;");

// let consulta = "lunes";

// let diasSemana = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
// ];

// let finSemana = [
//   "sabado",
//   "domingo",
// ];

// diasSemana.forEach((elemento , index) => {
//   // consulta  === elemento ? console.log("abierto desde las 11") : consulta === finSemana[index] ? console.log("abrimos desde las 9") : false;
//   consulta == elemento && console.log("abierto desde las 11");

//   consulta == finSemana[index] && console.log("abierto desde las 9");
// });
