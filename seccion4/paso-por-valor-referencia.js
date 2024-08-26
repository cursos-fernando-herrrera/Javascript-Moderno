
console.log("%c Paso Por VALOR - PRIMITIVOS", "color:orange;font-weight:bold;");

let a = 10;

let b = a;

a = 30;
console.log({ a, b });

console.log("%c Paso Por REFERENCIA - VALOR", "color:orange;font-weight:bold;");

let juan = {
  nombre : "juan",
}

let ana = { ...juan };

ana.nombre = "Ana";

console.log({juan , ana});

console.log("%c CON FUNCIONES DE FLECHA", "color:orange;font-weight:bold;");

const cambiaNombre = ( { ...persona } ) => {
  persona.nombre = "Tony";

  return persona;
};

let peter = {
  nombre : "peter",
}


let tony = cambiaNombre( peter );



console.log({ peter, tony });



console.log("%c CON ARREGLOS", "color:orange;font-weight:bold;");

const frutas = ["manzana","pera","piña"];

console.time("spread");
let otrasFrutas = [...frutas];
console.timeEnd("spread");


otrasFrutas.push("mango");

console.table({frutas , otrasFrutas })