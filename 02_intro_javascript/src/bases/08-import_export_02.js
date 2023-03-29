//import, export y funciones comunes de arreglos
//import heroes from './data/heroes2';        //exportacion por defecto, heroes no es por el nombre del archivo de datos, es un nombre que queramos

//import heroes from './data/heroes3';        //otra forma de exportar por defaul (desde el archivo de datos, es mas claro)

//utilizamos owners, exposamos por defecto y uno o mas elementos adicionales
import heroes, { owners } from './data/heroes3';       

//import { heroes, owners } from './data/heroes3'; 

console.log( owners);

//simlificamos aun mas la funcion
export const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id );      //como es una sola operacion, se puede poner en una sola linea
//exportamos para el siguiente archivo de promesas

console.log( getHeroById(2) );

const getHeroeByOwner  = ( owner ) => heroes.find( ( heroe ) => heroe.owner === owner );            //find regresa el primero que encuentra

console.log( getHeroeByOwner('DC') );

//Con filter
const getHeroeByOwnerFil  = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );       //filter regresa todos los que encuentra

console.log( getHeroeByOwnerFil('DC') );

console.log( getHeroeByOwnerFil('Marvel') );