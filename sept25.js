//? OBJETOS

let persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero de Software',
    especializacion: true,
    hobbies: ['Trotar', 'Cine', 'Ajedrez'],
    saludar: function () {
        console.log('Hola desde el Objeto');
    }
};

//* Acceso a Propiedades

//! Notacion de punto
console.log(persona.profesion);

//! Notacion de corchetes
console.log(persona['hobbies']);
console.log(persona['edad']);

//* Reasignar propiedad
let nombre = 'Rogelio';
persona.nombre = 'Rogelio';
console.log(persona);

//* Metodos dentro Objetos

persona.saludar();

//* Alcance de variables y propiedades en los objetos
let marca = 'Renault';
let year = 2023;

const carro = {
    marca: 'Honda',
    year: 2024,
    color: 'Azul',
    describir: function () {
        console.log(`El carro es marca ${this.marca}`);
    }
};

carro.describir();

//* Iteracion sobre propiedades for...in

for (let prop in persona) {
    console.log(prop + ' : ' + persona[prop]);
}

//* Metodos aplicables a los objetos

//* Object.keys(objeto)

let keys = Object.keys(carro);

console.log(keys);

//* Object.values(objeto)
let valores = Object.values(carro);
console.log(valores);

//* Object.entries(objeto)
let kv = Object.entries(carro);
console.log(kv);

//! desestructuracion de objetos

const pc = {
    procesador: 'amd',
    velocidad: '4.5 Ghz',
    ram: '32 gb',
    tarjeta_video: false
};

const { procesador: cpu, ram: memoria, velocidad } = pc;

console.log(cpu);
console.log(memoria);
console.log(velocidad);
console.log(pc.ram);


//! desestructuracion de objetos Anidados

const america = {
    mexico: {
        capital: 'CDMX',
        poblacion: 22000000
    },
    colombia: {
        capital: 'Bogota',
        poblacion: 10000000
    },
    confirmado: true
};

const { mexico: { capital: ciudadPr } } = america;

console.log(ciudadPr);

//! Desestructuracion: pasar objeto como argumento a una funcion

const user = {
    id: 2056,
    name: 'Carlos',
    password: 'hfi5lwyhi'
};

function validar(objeto) {
    const { id: i, name: nombre, password: pass } = objeto;
    console.log(i, nombre, pass);
}

//validar(user);

function valida({ id, name, password }) {
    console.log(id, name, password);
}

//valida(user);

const validador = ({ id, name, password }) => console.log(id, name, password);
validador(user);

