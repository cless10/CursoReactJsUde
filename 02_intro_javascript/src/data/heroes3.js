const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export default heroes;

export const owners = ['DC', 'Marvel'];

//las dos exportaciones anteriores se pueden realizar en un solo export:
/*
export {
    heroes, 
    owners
}
//sin embargo aqui ya no indicamos un default, por lo que al importalo se debe usar la siguiente sintaxis:
//import { heroes, owners } from './data/heroes3'; 

//podemos indicar un a exportaciónpor defecto:
export {
    heroes as default, 
    owners
}
//e importariamos igual que antes:
//import heroes, { owners } from './data/heroes3'; 
*/