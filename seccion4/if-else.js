console.log("%c ESTRUCTURA DE CONTROL IF-ELSE", "color:orange;font-weight:bold;");


let a = 1;

if ( a >= 10) {
  console.log("A es mayor o igual a 10");
}else{
  console.log("a es menor a 10");
  
}

console.log("Fin del programa");


const hoy = new Date();

console.log({ hoy });

let dia = hoy.getDay();

console.log({ dia });


if ( dia == 2) {
  console.log("domingo");
  
}else if( dia === 1){
  console.log(" no es lunes");
  
}else{
  console.log("no es domingo ni lunes");
  
}


console.log("%c TAREA SIN ESTRUCTURAS", "color:grey;font-weight:bold;");


dia = 6;
const diasArray = ["domingo", "lunes","martes","miercoles","jueves","viernes","sabado"];

const diaObect = {
  0 : () => "domingo-0",
  1 : () => "lunes-1",
  2 : () => "martes-2",
  3 : () => "miercoles-3",
  4 : () => "jueves-4",
  5 : () => "viernes-5",
  6 : () => "sabado-6",
}

console.log("diaArr", diasArray[dia] || "dia no valido");
console.log("diaobj", diaObect[dia]() || "dia no valido");

