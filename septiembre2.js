// for

//for (inicializacion; condicion; expresion de iteracion){ cuerpo }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//     suma += i;
// }

// console.log(suma);

const nombres = ['Rogelio', 'Ana', 'Lucia', 'Carlos', 'Vicente'];

// for (let i = 0; i < nombres.length; i++) {
//     console.log(`Nombre ${i + 1}: ${nombres[i]}`);
// }

// for ...of

for (let item of nombres) {
    console.log(item);
}

for (let x in nombres) {
    console.log(x);
}