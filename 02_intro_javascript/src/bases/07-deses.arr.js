//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

/*
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );
*/
/*
//para desestructuración de arreglos, se utilizan corchetes cuadrados, no llaves
//const [ goku ] = personajes;    //esto no extrae el valor de Goku', extrae el primer elemento
const [ p1 ] = personajes;
console.log( p1 );

//para cambiar el valor de una constante y en todo el código, nos situamos en el nombre de la constante, presionamos la tecla F2 en windows y colocamos el nuevo nombre
//esto modifica todas las referencias de ese nombre en el archivo
*/

//como los valores de los arreglos vienen en posiciones, podemos dejar por ejemplo el primer valor vacio y no se toma en cuenta
//para obtener el segundo valor del arreglo seria:
const [ , p2 ] = personajes;
console.log( p2 );

//para obtener el tercer valor del arreglo seria:
const [ , , p3 ] = personajes;
console.log( p3 );



const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo();
console.log( arr );

//desestructuramos
const [letras, numeros] = retornaArreglo();

console.log( letras );
console.log( numeros );


/*
const usStatus = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const arre = usStatus( 'Goku');
console.log(arre);

arre[1]();   //si no desestructuramos, tendriamos que hacer algo asi
*/
//tarea.
// 1. la primera posicion del arreglo se llamara nombre
// 2. segundo se llamara setNombre
const usStatus = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usStatus( 'Goku');
console.log(nombre);
setNombre();