// switch

let diaSemana = 10;

switch (diaSemana) {
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3:
        console.log('Hoy es miercoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sabado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
    default:
        console.log('el numero no corresponde a ningun dia');
}

console.log('despues del switch');

const nombre = 'carlos'.toUpperCase();

switch (nombre) {
    case 'LUIS':
        console.log('tu nombre es Luis');
        break;
    case 'CARLOS':
        console.log('tu nombre es Carlos');
        break;
    case 'ANA':
        console.log('tu nombre es Ana');
        break;
    default:
        console.log(`El nombre: ${nombre} no existe en los registros`);
}
const endPoint = '/edit';
const metodo = 'PUT';
const concatenado = metodo + endPoint;

switch (concatenado) {
    case 'POST/users':
        console.log('Medoto POST endpoint /users');
        break;
    case 'GET/listado':
        console.log('Medoto GET endpoint /listado');
        break;
    case 'PUT/editar':
        console.log('Medoto PUT endpoint /editar');
        break;
    default:
        console.log(`No existe la combinacion dada`);
}


