// Map: Itera por cada elemento del arreglo y retorna un nuevo array.
const numerosArray = [52, 66, 87, 23, 20];

const doble = numerosArray.map((n, i, a) => {
    //console.log(i);
    //console.log(a);
    return n * 2;
});

//console.log(doble);

// filter
const filtrados = numerosArray.filter(num => num > 60);
//console.log(filtrados);

const ciudades = ['Guadalajara', 'Bogota', 'Buenos Aires', 'Barcelona', 'Quito', 'Madrid', 'Mexico'];
const cityFilter = ciudades.filter(ciudad => ciudad.startsWith('B'));
const filter = ciudades.filter(ciudad => ciudad[0] === 'B');

console.log(filter);
