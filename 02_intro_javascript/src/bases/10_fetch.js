//Fetch Api
//La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, 
//pero la nueva API ofrece un conjunto de características más potente y flexible

//Ya viene en los navegadores web, permite hacer peticiones http sin importar alguna libreria

//GIPHY es api que permite traer gips animados, se necesita un api key

//https://api.giphy.com/v1/gifs/random?api_key=kyMUjeZaQCS8yHQOswdUaR922jlTDBwx
const apiKey = 'kyMUjeZaQCS8yHQOswdUaR922jlTDBwx';

//utilizamos el fetch api

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);     //retorna una promesa
/*  
peticion.then( (resp) => {
    //console.log( resp );            //en el body: ReadableStream  vienen los datos de la respuesta del api a giphy
    //una forma de hacerlo
    resp.json().then( data => {         //igualmente este metodo json devuelve una promesa
        console.log( data );            //aqui obtenemos los datos del api
    })                    
})
.catch( console.warn )
*/

//las promesas pueden encadenarse (promesas en cadena)
//mismo código y se ve mas limpio
/*
peticion
    .then( resp => resp.json() )
    .then( data => {
        console.log( data );
    } )
.catch( console.warn )          //en promesas encadenadas, el catch atrapa todos los posibles errores de las promesas o se puede cachar cada error
*/
peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {                //como viene data.data, desestructuramos
        //console.log( data.data );
        //console.log( data.images.original.url );
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        //ya que tenemos la imagen la colocamos en el html
        document.body.append( img );
    })
.catch( console.warn )