// Operadores aritmeticos + * - /

// oeradores de asignacion
// = += -=

// Operadores de comparacion > < >= <= == ===
// igualdad ==
console.log(10 == '10');

// igualdad estricta ===
console.log(10 === '10');

// Operadores Logicos
// and &&
// or ||
// not !
let a = 5;
let b = 10;
let c = 20;
console.log((a > b) && (b < c));

// Metodos de los strings
let frase = 'Hola mundo';
// Medir longitud del string
console.log(frase.length);

// chartAt 
console.log(frase.charAt(5));
console.log(frase[5]);

// concat
const nombre = 'Rogelio Sanchez';
const apellido = 'Sanchez';
console.log(nombre.concat('', apellido));

// indexOf
console.log(nombre.indexOf('Sanchez'));

// substring
const saludo = 'Buenos dias';
console.log(saludo.substring(0, 4));
console.log(saludo.substring(7, 13));

// slice 
console.log(saludo.slice(-1));

// toLowerCase toUpperCase
const palabra = 'computadora';
console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());

// trim
const dato = '    esto es un ejemplo    ';
console.log(dato);
console.log(dato.trim());

// split 
const saludo2 = 'Hola como estas';
console.log(saludo2.split(' '));

// replace
console.log();
console.log(saludo2.length);
const nueva = saludo2.replace('estas', 'vas');
console.log(nueva);
console.log(nueva.length);