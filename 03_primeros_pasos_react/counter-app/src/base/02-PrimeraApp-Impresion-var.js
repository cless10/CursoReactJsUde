//primer componente
//hay 2 tipos de componentes en react, los basados en clases y los basados en funciones
//react está empujando a que se creen componentes en base a funciones  (functional components FC), antes eran Stateless function components SFC, por que no manejaban estado
//el código de componentes basados en clases es literalmente diferente a los basados en funciones

import React from 'react';
//import React, { Fragment } from 'react';        //importación para usar fragment

//FC
const PrimeraApp = () => {

    const saludo = 'Hola Ark!, vas avanzando!';
    //const saludo = 123;         //LO IMPRIME
    //const saludo = 123.123;         //LO IMPRIME
    //const saludo = true;            //los booleanos no los imprime
    //const saludo = [1,2,3,4,5,6];     //los imprime, barre cada uno de los elementos y los imprime: 123456
    /*const saludo = {                //los objetos no se imprimen, una forma para imprimir objetos es usar JSON.stringify
        nombre: 'Francisco',        //aunque para esta version, marca error en la consola
        edad: 34
    }*/

    return (
        <>  
            {/*<h1> saludo </h1>           //imprime 'saludo', no imprmime el valor de la constante, AQUI SE IMPRIMEN VALORES PRIMITIVOS, NO CUALQUIER VALOR */}
            {/*<h1> { saludo } </h1>*/}
            {/*<pre> { JSON.stringify(saludo, null,3) } </pre>    se puede sustituir <h1> por <pre></pre></h1>*/}
            <h1> { saludo } </h1>
            <p>Mi primera aplicacion</p>
        </>
    )
}
//PARA PONER COMENTARIOS DENTRO DE COMPONENTES REACT, HAT QUE COLOCARLOS ENTRE LLAVES:  {/* . . . */}

export default PrimeraApp;
