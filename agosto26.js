// Truthy y Falsy

//Valores Falsy JS
/* console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("")); */
// console.log(Boolean([])); true
// console.log(Boolean({})); true

if (!null) {
    console.log('Verdadero');
}
else {
    console.log('EL valor es Falsy');
}

// Array

let arregloVacio = [];
let arregloLleno = [100, 300, 500, 700];

console.log(arregloLleno[2]);

// Metodos de los Arrays

// push
arregloVacio.push(64);
console.log(arregloVacio);

// lenght
console.log(arregloLleno.length);

// pop
let valor = arregloLleno.pop();
console.log(arregloLleno);
console.log(valor);

//shift
let primero = arregloLleno.shift();
console.log(primero);
console.log(arregloLleno);

// unshift
arregloLleno.unshift(10, 900);
console.log(arregloLleno);

// splice
let miArray = [20, 30, 40, 50, 60];
//miArray.splice(2, 2);
//console.log(miArray);
miArray.splice(2, 0, 3);
console.log(miArray);

// slice
let nuevoArray = miArray.slice(3);
console.log(nuevoArray);

