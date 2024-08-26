
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















