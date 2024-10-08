const fs = require('fs');

let a = 200;
let b = 50;
console.log(a + b);
let c = a + b;

fs.writeFileSync('prueba.txt', `la suma de ${a} y ${b} es igual a ${a + b}` );



