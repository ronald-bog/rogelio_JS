function valores() {
    const a = 10 + 5;
    const b = 500;
    return a, b;
}

//console.log(valores);

// Desestruccion o desempaquetamiento o  de un array.

let numeros = [564, 951, 67];

let [n1, valor, otro, num] = numeros;
let [n, v] = numeros;

/* console.log(n1);
console.log(valor);
console.log(otro);
console.log(num);
console.log(n);
console.log(v);
console.log(numeros); */


function valoresM() {
    const a = 10 + 5;
    const b = 500;
    return [a, b];
}

const [primero, segundo] = valoresM();

//console.log(primero);
//console.log(segundo);


// METODOS DE ORDEN SUPERIOR DE ITERACION DE ARRAY

// ** forEach ** Itera por cada elemento del arreglo y no me retorna nada.
// Sintaxis: array.forEach(callback(valor iterado, index, array))

const numerosA = [20, 100, 40, 5, 2000];
numerosA.forEach(numero => console.log(numero));
numerosA.forEach((numero, i) => {
    console.log(numero);
    console.log(i);
});


console.log('*********************');

const numerosB = [21, 88, 65];

numerosB.forEach(z => console.log(z + 100));


