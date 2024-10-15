//? Spread Operator

const arreglo = [50, 60, 100];

/* function multiplicar(a, b, c) {
    return a * b * c;
} */

const multiplicar = (a, b, c) => a * b * c;

console.log(multiplicar(...arreglo));

const numeros = [6, 7, 8];
console.log(...numeros);

const original = [100, 50, 65];
const copia = [...original];

console.log(copia);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenado = [...array1, ...array2];

console.log(concatenado);

//* Uso de spread en objetos
const persona1a = { nombre: 'Juan', edad: 30 };
const persona1b = { ciudad: 'DF', profesion: 'Ingeniero de software' };
const persona2 = { ...persona1a };
const fusion = { ...persona1a, ...persona1b };

console.log(fusion);