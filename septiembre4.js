// funciones

// Declarativas
// sin parametros void
/* function saludar() {
    console.log('HOLA MUNDO');
}

//saludar();

let mensaje = saludar();
console.log(mensaje);

// sin parametros retorno

function saludarRet() {
    return 'HOLA DESDE LA FUNCION CON RETORNO';
}

let mensaje2 = saludarRet();
console.log(mensaje2);

// void con parametros
function saludarVP(nombre) {
    console.log(`HOLA ${nombre}`);
}

saludarVP('Rogelio');

// parametros y retorno
function saludarRP(nombre1) {
    return `Hola como estas ${nombre1}`;
}

console.log(saludarRP('Ana')); */

// funciones expresivas anonimas tradicionales: hoisted
let saludo = function () {
    return 'Hola soy funcion anonima';
};

console.log(saludo());


// funciones expresivas anonimas flecha

let flecha = () => console.log('Hola desde Flecha');

flecha();

const flecha2 = (num1) => {
    return num1 + 10;
};

const flecha3 = function (num1) {
    return num1 + 10;
};

const flecha4 = num1 => num1 + 10;

function flecha5(num1) {
    return num1 + 10;
}

console.log(flecha2(5));

const flechaVP = (num1, num2) => console.log(num1 + num2);

flechaVP(10, 30);
