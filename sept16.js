// Reduce
// Sintaxis: array.reduce(CB(acumulador, valorIterando, index, array), valor inicial)

const numbersR = [5, 9, 85, 464, 6, 100];

const sum = numbersR.reduce((acc, v) => acc + v, 0);
const sum1 = numbersR.reduce((acc, v) => acc + v, 1000);

console.log(sum);
console.log(sum1);

// find

// Sintaxis: array.find(cb(elem, index, array))

const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.find(elem => elem === 30);

console.log(resultado);


