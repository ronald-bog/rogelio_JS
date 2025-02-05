//? Spread Operator

const arreglo = [50, 60, 100];

/* function multiplicar(a, b, c) {
    return a * b * c;
} */

const multiplicar = (a, b, c) => a * b * c;

//console.log(multiplicar(...arreglo));

const numeros = [6, 7, 8];
//console.log(...numeros);

const original = [100, 50, 65];
const copia = [...original];

//console.log(copia);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenado = [...array1, ...array2];

//console.log(concatenado);

//* Uso de spread en objetos
const persona1a = { nombre: 'Juan', edad: 30 };
const persona1b = { ciudad: 'DF', profesion: 'Ingeniero de software' };
const persona2 = { ...persona1a };
const fusion = { ...persona1a, ...persona1b };

//console.log(fusion);

//  Gestion de almacenamiento en memoria
/* 
let a = 10;
let b = a;

console.log(a);
console.log(b);
console.log('****************************');

a = 30;
console.log(a);
console.log(b);

let aS = 'Juan';
let bS = aS;

console.log('****************************');
console.log(aS);
console.log(bS);

aS = 'Rogelio';

console.log('****************************');
console.log(aS);
console.log(bS); */

let arreglo1 = [1, 2];
let arreglo2 = arreglo1;
//let arreglo2 = [...arreglo1]
//let arreglo2 = arreglo1.slice()

console.log('****************************');
console.log(arreglo1);
console.log(arreglo2);

arreglo1.push(20);

console.log('****************************');
console.log(arreglo1);
console.log(arreglo2);

