//template string, sirven para concatenar entre otras cosas cadenas

const nombre = 'Francisco';
const apellido = 'García Ledesma';

//const nombreCompleto = nombre + ' ' + apellido;       //regularmente se hace esto

//para usar templates strings hay que usar los backticks ``
//const nombreCompleto =  `Hola Mundo!! `;

//con template string, podemos inscrustar código de javascript
const nombreCompleto =  `${nombre} ${apellido}`;

//con temaplate string, tambien se renderizan los caracteres de salto de linea
/*const nombreCompleto =  ` 
${nombre} 
${apellido}
${1+1}
`;
*/

console.log(nombreCompleto);

//los templates string se pueden combinar con los strings
function getSaludo(nombre) {
    return 'Hola ' + nombre;
}


console.log(`Esto es un texto ${getSaludo()}`); 
//asi arroja undefined, por que no se le esta mandando un valor a la funcion
//cualquier variable no inicializadatiene un valor undefined

console.log(`Esto es un texto ${getSaludo(nombreCompleto)}`);