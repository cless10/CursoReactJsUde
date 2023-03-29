//import, export y funciones comunes de arreglos


//importamos una constante que contiene un arreglo
//forma 1
//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';
//console.log( heroes );
//forma 2.   tecleamos heroes y presionamos tab y automaticamente se hace la importancion (a veces funciona otras no)
//heroes

import { heroes } from './data/heroes';

/*
const getHeroById = (id) => {               //constante que es una funcion, se manda el id como parametro
    return heroes.find( ( heroe ) => {      //find tiene como parametro una funcion, la cual recorre por cada heroe
        if ( heroe.id === id ) {            //si el id del heroe, es igual al id del parámetro de la funcion principal
            return true;                    //regresa true, es decir, regresa el objeto heroe donde es el mismo id
        } else {
            return false;
        }
    });
}
*/
/*
//simlificamos la funcion
const getHeroById = (id) => {               //constante que es una funcion, se manda el id como parametro
    return heroes.find( ( heroe ) => heroe.id === id )      //como es una sola operacion, se puede poner en una sola linea
}
*/

//simlificamos aun mas la funcion
const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id );      //como es una sola operacion, se puede poner en una sola linea

console.log( getHeroById(2) );

const getHeroeByOwner  = ( owner ) => heroes.find( ( heroe ) => heroe.owner === owner );            //find regresa el primero que encuentra

console.log( getHeroeByOwner('DC') );

//Con filter
const getHeroeByOwnerFil  = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );       //filter regresa todos los que encuentra

console.log( getHeroeByOwnerFil('DC') );

console.log( getHeroeByOwnerFil('Marvel') );