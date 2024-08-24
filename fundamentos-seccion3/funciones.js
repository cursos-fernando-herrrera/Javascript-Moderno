
// function saludar (nombre) {
  
//   console.log(`Hola : ${nombre}`);
// }

console.log("%c Funciones tradicionales o normales" , "color:orange;font-weight:bold;");

const saludar2 = function ( nombre ) {
  
  console.log( arguments);
  
  nombre = nombre || "pedro";
  
  console.log(`Hola ${nombre }`);
}

saludar2("abigail", 40 , true , "consta rica");
// saludar2("juan");
// saludar2();


console.log("%c Funciones Flecha" , "color:orange;font-weight:bold;");

const saludarFlecha = ( nombre ) => {
  // console.log(arguments);
  
  console.log(`Hola ${nombre}`);
  
  
};
saludarFlecha("Funcion Fecha", 40 , true , "consta rica");



console.log("%c Funciones Anonimas" , "color:orange;font-weight:bold;");


const aleatorio = () =>  Math.random();

console.log(aleatorio());

