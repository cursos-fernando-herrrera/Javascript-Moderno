const regresaTrue = () => {
  
  console.log("regresa true");
  return true;
};

const regresaFalse = () => {
  
  console.log("regresa false");
  return false;
};

console.warn("%c NOT O NEGACION, sirve tanto en condicionales como en variables", "color:orange;font-weight:bold;");

console.log(true); // devuelve true
console.log(!true); // devuelve false

console.log(!regresaFalse()); // devuelve true


console.warn("%c AND EN ESTRUCTURAS","color:orange;font-weight:bold;");

console.log(true && true); //retorna true
console.log(true && false); // false
console.log(true && !false); // true


console.warn("%c PARA ASIGNACIONES ====", "color:orange;font-weight:bold;");


console.log(regresaFalse() && regresaTrue());// devuelve falso
console.log("*******************"); 

console.log(regresaTrue() && regresaFalse());

console.warn("%c PERADOR LOGICO OR o || ","color:orange;font-weight:bold;");

console.log(true || false);
console.log(false || false);

console.log("*******************");
console.log(regresaTrue() || regresaFalse());

console.log("*******************");
console.log(regresaFalse() || regresaTrue());

console.log("*******************");
console.log("4 condiciones", true && true && true && false);

console.log("*******************");
console.log("4 condiciones", true || true || true || false);



const regresaTrue = () => {
  
  console.log("regresa true");

  return true
};


const regresaFalse = () => {
  
  console.log("regresa false");

  return false
};

console.log("%c ASIGNACIONES CON BOOLEANOS", "color:orange;font-weight:bold;");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;



console.log("%c ASIGNACIONES CON AND &&", "color:orange;font-weight:bold;");
const a1 = false && "hola mundo" && 150;

const a2 = "Hola" && "mundo" && soyFalso && true;

console.log({ a2 });
console.log({ a1 });


console.log("%c ASIGNACIONES CON OR ||", "color:orange;font-weight:bold;");

const a3 = soyFalso || "Ya no soy falso";
const a4 = soyFalso || soyUndefined || soyNull ;
const a5 = soyFalso || soyUndefined || regresaTrue() || "ya no soy falso de nuevo" || true ;

console.log({ a3 });

console.log({ a4 });

console.log({ a5 });

console.log("*************");


if(regresaTrue() && regresaTrue() && (false || false || false)){
  console.log("regresa una cosa");
  
}else console.log("regresa otra cosa");




















