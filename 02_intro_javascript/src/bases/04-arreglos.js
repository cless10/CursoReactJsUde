//Arreglos en JS

//const arreglo = new Array();    //para crear un array, es preferible solo utilizar las llaves cuadradas [], solo hay que usar new Array cuando se crea un arreglo de tamaño predefinido
/*
const arreglo = new Array(100);   //aun asi se puede seguir expandiendo el arreglo
arreglo.push(1);

console.log( arreglo );
*/
/*
const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
//no es recomendable usar push, ya que este modifica el valor del objeto original

console.log( arreglo );
*/
/*
const arreglo = [1,2,3,4];

let arreglo2 = arreglo;
arreglo2.push(5);

console.log( arreglo );
console.log( arreglo2 );
*/

/*
//tarea 1, copiar un arreglo y adicionar un elemento sin modificar el original
const arreglo = [1,2,3,4];

let arreglo2 = [ ...arreglo, 5];            //... es el operador spred

console.log( arreglo );
console.log( arreglo2 );
*/

//metodo map, si lo vemos en el navegador (console.log), en el prototipe del array vemos que el map() es una funcion
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//esto rompe la referencia, es decir, crea un objeto nuevo

const arreglo = [1,2,3,4];

let arreglo2 = [ ...arreglo, 5];            //... es el operador spred

//usamos un callback, es decir, una funcion como parametro de otra funcion
//cuando una funcion no tiene un valor de retorno explicito, retorna undefined
const arreglo3 = arreglo2.map( function(numero) {     //es un ciclo por cada numero del arreglo
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );