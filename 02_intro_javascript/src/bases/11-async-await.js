//Await async
/*
const getImagenPromesa = () => {
    const promesa = new Promise( ( resolve, reject) => {
        resolve('https://ñlwejfwpoejfpowe.com');
    })

    return promesa;
}

getImagenPromesa().then( console.log );
*/
/*
//simplificamos
const getImagenPromesa = () => {
    return new Promise( ( resolve, reject) => {
        resolve('https://ñlwejfwpoejfpowe.com');
    })

}

getImagenPromesa().then( console.log );
*/
/*
//simplificamos aun mas (no usamos el reject)
const getImagenPromesa = () => {
    return new Promise( resolve => resolve('https://ñlwejfwpoejfpowe.com') )
}

getImagenPromesa().then( console.log );
*/
/*
//simplificamos aun mas
const getImagenPromesa = () => new Promise( resolve => resolve('https://ñlwejfwpoejfpowe.com') );

getImagenPromesa().then( console.log );
*/

//UTILIZAMOS ASYNC
/*
//esto es una funcion normal, con async se vuelve una promesa
const getImagen = () => {
    return 'https://ñlwejfwpoejfpowe.com';
}

console.log( getImagen() );
*/
/*
//el async puede ir solo, pero si se usa el await, forzosamente se tiene que usar el async
const getImagen = async() => {
    return 'https://ñlwejfwpoejfpowe.com';
}

getImagen().then( console.log );
*/


//el await nos ayuda a que el código se ejecute sincrono (linea por linea)
//simplificamos el ejercicio anterior (fetch) utilizando async await
/*
const getImagen = async() => {
    
    const apiKey = 'kyMUjeZaQCS8yHQOswdUaR922jlTDBwx';
    //const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);     //retorna una promesa
    
    //al poner await, retorna un response
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);  
    //es decir, el await le dice al código: ESPERA A QUE EL fetch (promesa) termine de ejecutarse, para seguir a la siguiente linea
    const data = await resp.json();           //.json regresa otra promesa, por lo que se puede volver a usar await

    console.log( data );

    //Tarea, mostramos una imagen, como en el ejercicio anterior
}

getImagen();
*/

//Tarea, mostramos una imagen, como en el ejercicio anterior
/*
const getImagen = async() => {
    
    const apiKey = 'kyMUjeZaQCS8yHQOswdUaR922jlTDBwx';
    //const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);     //retorna una promesa
    
    //al poner await, retorna un response
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);  
    //es decir, el await le dice al código: ESPERA A QUE EL fetch (promesa) termine de ejecutarse, para seguir a la siguiente linea
    const { data } = await resp.json();           //.json regresa otra promesa, por lo que se puede volver a usar await

    const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        //ya que tenemos la imagen la colocamos en el html
        document.body.append( img );

}

getImagen();
*/

//Para manejar los errores utilizando el async y el await, se debe de usar el bloque try, catch
const getImagen = async() => {
    
    try {
        const apiKey = 'kyMUjeZaQCS8yHQOswdUaR922jlTDBwx';
        //const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);     //retorna una promesa
    
        //al poner await, retorna un response
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);  
        //es decir, el await le dice al código: ESPERA A QUE EL fetch (promesa) termine de ejecutarse, para seguir a la siguiente linea
        const { data } = await resp.json();           //.json regresa otra promesa, por lo que se puede volver a usar await

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        //ya que tenemos la imagen la colocamos en el html
        document.body.append( img );
    } catch ( err ) {
        //manejamos el error
        console.error( err );
    }
}

getImagen();
