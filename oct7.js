//! Desestructuracion arreglo

const frameworks = ['Express', 'React', 'Angular', 'Vue', 'Next', 'Nest', 'Svelte'];

const [, , f1, , f2] = frameworks;

//console.log(f1);
//console.log(f2);


//! Sintaxis de desestructuracion con operador rest

const [, , , ...vari] = frameworks;

//console.log(vari);


//*  PROFUNDIZACION FUNCIONES

//! Retorno condicionado

function edad(ed) {
    /*     if (ed >= 18) {
            return 'Eres mayor de edad';
        }
        else {
            return 'Eres menor de edad';
        } */
    return ed >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
}

console.log(edad(10));

//! Funcion Recursiva
//prueba();

/* function prueba() {
    const valor = parseInt(prompt('Dame un numero'));
    if (valor > 5) {
        prueba();
    } else {
        alert('GRACIAS');
    }
} */

//! Operador Rest (...)

function varios(...args) {
    return args.reduce((acc, ele) => acc + ele);
}

const resultadoVarios = varios(2, 5, 6, 10, 8, 500, 56, 1000, 2000, 500);
console.log(resultadoVarios);


function listar(...x) {
    x.forEach(nombre => console.log(nombre));
}

listar('Sofia', 'Ana', 'Laura', 'Rogelio', 'Luis', 'Ronald');


function describir(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Sus Hobbies: ${hobbies}`);
}

describir('Juan', 30, 'leer', 'viajar', 'cine', 'programar', 'gym');


