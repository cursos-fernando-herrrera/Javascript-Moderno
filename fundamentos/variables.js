/* Tipos de variables */

let a = 10;
var b = 20;
const c = 10;

console.log("INICIO TIPOS VARIABLES");
console.log(a);
console.log(b);
console.log(c);
console.log("FIN TIPOS VARIABLES");

console.log("");
/* Variables Resumidas y tipos de console.log */

console.log("%c Mis Variables Resumidas y tipos de console.log" , "color : yellow; font-weight : bold;");

let d = 10,
    e = 20,
    f = "Hola",
    g = "Spiderman",
    h =  d + e ;

const saludo = f + g;


console.log({ d });
console.log({ e });
console.log({ f });
console.log({ g });
console.warn({ h });
console.log( { saludo });


console.table({ d,
                e,
                f,
                g,
                h,
                saludo,
              });

console.log("%c FIN Variables Resumidas y tipos de console.log" , "color : red; font-weight : bold;");