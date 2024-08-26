
console.log("%c CICLO WHILE", "colo:orange;font-weight:bold;");

const carros = ["ford","mazda","honda","toyota"];

let i = 0;

// while ( i < carros.length) {
//   console.log(carros[i]);
//   i++;
// }



while ( carros[i]) {
  
  if (i === 1) {
    // break;
    i++;
    continue;
  }
  
  console.log(carros[i]);
  i++;
}


console.log("%c CICLO DO WHILE", "colo:orange;font-weight:bold;");

let j = 10;

do {
  console.log( carros[j] );
  j++;
} while ( carros[j] );