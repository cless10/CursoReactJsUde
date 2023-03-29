//Objetos literales

//las llaves indican que es un objeto, cuyos valores son pares de valores, llave y valor
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    //se pueden añadir otros objetos, hay que tratar de no poner caracteres especiales
    direccion: {
        ciudad: 'New York',
        zip: 786876876,
        lat: 14.5343,
        lng: 34.723657,
    }
};

//Imprimimos el objeto de varias formas
//console.log( persona );

//console.log( {          //creamos un objeto y le pasamos el objeto anterior
//    persona: persona  
//} );

//si la llave tiene el mismo valor que el valor, se puede obviar el valor
//console.log( {          //creamos un objeto y le pasamos el objeto anterior
//    persona
//} );

//imprimimos en forma de tabla
console.table( persona );       

console.log( persona );         //slos navegadores web imprimen por orden alfabetico

//para clonar un objeto
/*
const persona2 = persona;       //aqui no clonamos, solo copiamos la referencia al objeto 1

persona2.nombre = 'Peter';  
console.log( persona2 );        //esto da un falso positivo, ya que lo que se cambia es el valor de nombre del objeto persona
*/
//clonamos (copiamos, esto es lo que se debe de hacer)
const persona3 = {...persona};      //al utilizar los tres puntos, indicamos que se haga una copia del objeto
persona3.nombre = 'Peter';  

//vemos el cambio
console.log( persona );      
console.log( persona3 );      