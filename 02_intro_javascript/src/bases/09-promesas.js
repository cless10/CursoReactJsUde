//Promesas   Las promesas por naturaleza son asincronas
//primero se ejecuta el codigo sincrono (linea por linea (secuencial)) y posteriormente se ejecutanlas promesas, se ejectutan despues de lo sincrono
//representa un valor que puede estar disponible ahora, posteriormente o nunca


import { getHeroById } from './bases/08_import_export_02';  

//podemos crear aqui el metodo, importando el archivo de heroes y utilizar la funcion
//import heroes, { owners } from './data/heroes3';  
//const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id );      //como es una sola operacion, se puede poner en una sola linea

/*
const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
        //console.log('2 segundos después');
        //resolve();
        
        //Tarea
        //importar 
        const heroe = getHeroById(2);
        console.log( heroe );
        //resolve( heroe );           //aqui mandamos como valor de devolucion al hero o dato obtenido, este lo atrapa el then
        reject('No se pudo encontrar el heroe');            //en caso de quefalle algo
    }, 2000)

});      //se crean con un argumento que es un callback, recibe 2 argumentos, resolve y reject, pueden tener otros nombres pero por convencion se utilizan
//resolve es otro callback, el reject se ejecuta cuando la promesa falla


//hay 3 metodos, then catch (para manejar los errores) y finally (se ejecuta despues de los otros dos)
promesa.then( ( heroe ) => {                   //then tambien recibe un callback, este se detona al tener el resolve de la promesa
    console.log('then de la promesa, el heroe es:', heroe);
})
.catch( err => console.warn( err ) );           //con catch atrapamos el error
*/

const getHeroeByIdAsync = (id ) =>{

    //para regresar la promesa, quitamos la constante yponemos el return
    //const promesa = new Promise( (resolve, reject) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            //console.log('2 segundos después');
            //resolve();
            

            const heroe = getHeroById(id);
            //resolve( heroe );           //aqui mandamos como valor de devolucion al hero o dato obtenido, este lo atrapa el then
            //reject('No se pudo encontrar el heroe');            //en caso de quefalle algo

            //Tarea
            if ( heroe ) {
                resolve( heroe ); 
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    
    });

    //o si es una Constant, regresamos la misma, esto ya no se usa mucho
    //return promesa;

}

//para tener los metodos de las promesas (then, catch y finally, debemos dehacer que se retorne la promesa en getHeroeByIdAsync
const id1 = 3;
getHeroeByIdAsync(id1)
    //.then( heroe => console.log('Heroe: ', heroe))
    .then( console.log)                 //tarea, igual que catch sin escribir el argumento
    //.catch( err => console.warn( err ))
    .catch( console.warn )   
    //tambien funciona, significa que en la funcion se acepta un unico parametro (err) y este se pasa directamente a la funcion o metodo, en este caso console.warn
    
