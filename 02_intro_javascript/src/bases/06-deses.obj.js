//desestructuracion de objetos
//o Asignacion desestructurante

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    //rango: 'Soldado',
}

const { nombre, edad, clave } = persona; //con la desestructuracion se crean constantes con valores que trae algun objeto, no importa el orden

//si por alguna causa ya tenemos una constante i variable llamada 'nombre' se puede renombrar 
const { nombre:nombre2 } = persona;         //al hacer esto, 'nombre' ya no podriamos ocuparlo, y si lo ocupamos marca error //comentamos la linea 12 para probarlo

console.log( persona.nombre);
console.log( persona.edad);
console.log( persona.clave);

//usamos las variables que se crean a traves de la desestructuración
console.log( nombre );
console.log( edad);
console.log( clave);

console.log( nombre2 );

//con funcion flecha
/*
const retornaPersona = ( usuario ) => {

        console.log(usuario);

}

retornaPersona(persona);
*/

/*
const retornaPersona = ( usuario ) => {

    const { edad, clave, nombre, } = usuario;

    console.log(edad, clave, nombre);

}

retornaPersona(persona);
*/
/*
//podemos desestructurar el objeto directamente en los argumentos de la funcion
//tambien se puede definir alguna otra constante en la desestructuracion (que no venga en el objeto)
const retornaPersona = (  { edad, clave, nombre, rango = 'Capitan' } ) => {         //rango puede no estar definido, mandaria undefined
                                                                                    //si rango esta definido en el objeto, se coloca el valor del objeto
    console.log( nombre, edad, rango);

}

retornaPersona(persona);
*/

//podemos desestructurar el objeto directamente en los argumentos de la funcion
//tambien se puede definir alguna otra constante en la desestructuracion (que no venga en el objeto)
const retornaPersona = (  { edad, clave, nombre, rango = 'Capitan' } ) => {         //rango puede no estar definido, mandaria undefined
                                                                                    //si rango esta definido en el objeto, se coloca el valor del objeto
    //console.log( nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.254361,
            lng: -12.6345371254,
        }
    }

}

//console.log del objeto
const avenger = retornaPersona(persona);
console.log(avenger);

//console.log desestructurando el objeto
const {nombreClave, anios, latlng} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(latlng);

/*//console.log desestructurando objetos dentro de otros objetos (desestructuracion anidada)
const {nombreClave:nombreClave1, anios:anios1, latlng:{lat, lng}} = retornaPersona(persona);
console.log(nombreClave1, anios1);
console.log(lat,lng);
*/

//lo anterior no es muy utilizado, para ser mas claro, hay que hacerlo por separado
const {nombreClave:nombreClave1, anios:anios1, latlng:latlng1} = retornaPersona(persona);
const {lat, lng} = latlng1;
console.log(nombreClave1, anios1);
console.log(lat,lng);