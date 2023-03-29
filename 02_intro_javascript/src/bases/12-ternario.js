//Operador condicional ternario
//forma corta de hacer una decision

const activo = true;
/*
let mensaje = '';

if ( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
*/

//mejoramos el codigo anterior con el operador ternario, este operador siempre espera las dos partes
/*
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
//const mensaje = ( activo ) ? 'Activo' : null;
*/
const mensaje = activo && 'Activo';     //esto indica que si es true, se hace la asignacion de 'Activo', ES DECIR, SOLO SE HACE LA PRIMERA parte del if, SIN TOMAR EN CTA EL FALSE
                                        //SI 'activo' es false, se devuelve un false
//const mensaje = ( activo === true) && 'Activo';       //mismo código que ela linea anterior

console.log(mensaje);


//true && 1                 regresa 1
//true && 'Hola mundo'      regresa "Hola mundo"
//false && 'Hola mundo'     regresa false, no se ejecuta lo demas

