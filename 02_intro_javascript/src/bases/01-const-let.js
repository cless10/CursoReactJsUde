//Variables y constantes
        //ya no se debe de usar 'var', hay que trabajar con const y let
        //const se debe de usar como una constante aunque puede cambiar su valor

const nombre = 'Francisco';
const apellido = 'García Ledesma';

//con const y let se generan variables con scope
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if(true) {
    const nombre = 'Peter';
    let valorDado = 6
    
    console.log(nombre, valorDado);
    
}

console.log(valorDado);

//REACT inicia buscando el archivo index.js, por lo que aqui podemos a empezar a agregar código, el mismo que se mostrará en el navegador