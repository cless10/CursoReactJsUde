//COMUNICACION ENTRE COMPONENTES
//hay 2 tipos de componentes en react, los basados en clases y los basados en funciones
//react está empujando a que se creen componentes en base a funciones  (functional components FC), antes eran Stateless function components SFC, por que no manejaban estado
//el código de componentes basados en clases es literalmente diferente a los basados en funciones

import React from 'react';
//import React, { Fragment } from 'react';        //importación para usar fragment

//FC Las propiedades en react se conocen tambien como 'props'
//las propiedades son enviadas a este componente de su componente padre, en este caso de (en index.js) ReactDOM.render( <PrimeraApp />, divRoot);  
const PrimeraApp = ( props ) => {
    //actualmente ya ni siquiera veremos la palabra props
    const saludo = 'Hola Ark!, vas avanzando!';

    console.log( props );       //sin props, se manda un objeto vacio
    
    return (
        <>  
            <h1> { saludo } </h1>
            <p>Mi primera aplicacion</p>
        </>
    )
}
//PARA PONER COMENTARIOS DENTRO DE COMPONENTES REACT, HAT QUE COLOCARLOS ENTRE LLAVES:  {/* . . . */}

export default PrimeraApp;
