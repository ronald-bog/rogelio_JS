
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