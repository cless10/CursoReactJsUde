//funciones
/*
function saludar( nombre ) {
    return `Hola, ${ nombre }`;
};

//saludar = 30;         //imprime 30, pero indica el warning de que saludar es una funcion
//console.log( saludar);     //se imprime la referencia a la funcion, se despliega el código de la funcion

console.log( saludar('Goku'));
*/
/*
//Es recomendable utilizar una cosntante y asignar a ella la funcion
const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`;
};

console.log( saludar('Goku'));
*/

//funcion flecha
//Es recomendable utilizar una constante y asignar a ella la funcion
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
};

//simplificamos la funcion flecha, cuando solo se tiene una linea de retorno
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

//las funciones flecha se simplifican aun mas si no llevan argumentos
const saludar4 = ( ) => `Hola mundo`;

console.log( saludar2('Vegeta'));
console.log( saludar3('Goku'));
console.log( saludar4());


//si solo se regresa un objeto
const getUser = () => {
    return {
        uid: 'ABC123',
        userName: 'El_papi1502',
    }
}

console.log( getUser());

//podriamos simplificar de la siguiente forma
const getUser1 = () => ({
        uid: 'ABC123',
        userName: 'El_papi1502',
    });

const user = getUser1();

console.log( user );


//tarea 
// 1. transformar lo siguiente a una funcion flecha
// 2. Tiene que retornar un objeto implicito
// 3. Probarlo
function getUsuarioActivo ( nombre ) {
    return {
        uid: 'ABC567',
        userName: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Francisco');
console.log(usuarioActivo);

//resolucion tarea
const getUsuarioActivo1 = ( nombre ) => ({
        uid: 'ABC567',
        userName: nombre,
    });

const usuarioActivo1 = getUsuarioActivo1('Francisco');
console.log(usuarioActivo1);