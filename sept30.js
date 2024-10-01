
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

