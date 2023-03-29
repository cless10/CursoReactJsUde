//primer componente
//hay 2 tipos de componentes en react, los basados en clases y los basados en funciones
//react está empujando a que se creen componentes en base a funciones  (functional components FC), antes eran Stateless function components SFC, por que no manejaban estado
//el código de componentes basados en clases es literalmente diferente a los basados en funciones

import React from 'react';      //tecleando imr y despues tab, completa la linea, en el tutorial marco error, pero en esta version ya no lo marca
                                //el error marcado enla clase es: 'React must be in scope when using JXX', aunque aqui no marque error, siempre hay que poner la linea de importación de react
//import React, { Fragment } from 'react';        //importación para usar fragment

//FC
const PrimeraApp = () => {
    //Como es un componente esperamos a que regrese algo de html
    /*
    return <h1>Hola mundo!</h1>;         //con esto ya es un FC completo
    */

    //nuestro codigo pasa por babel en el backgroun, por lo que tenemos que tener ciertas consideraciones
    /*no es lomismo lo siguiente
    return 
        <h1>Hola mundo!</h1>;
    // esto no retorna nada  */

    //javascript solo puede retornar un objeto a la vez (una etiqueta)
    /*
    return (
        <h1>Hola mundo!</h1>
        //<p>Esta es mi aplicacion</p>  //con esta linea marca error
    )
        */
    //para solcentar lo anterior uencapsulamos los componentes en un solo div, que es el que se va a retornar
    /*
    return (
        <div>
            <h1>Hola mundo!</h1>
            <p>Mi primera aplicacion</p>
        </div>
    )
    */
    //para no cargar inf innecesaria (el div para encapsular usamos fragment)
    //fragament, es un highee order componente (componente que tiene componentes hijos), la importación para usar fragment es: import React, { Fragment } from 'react'; 
    /*
    return (
        <Fragment>  
            <h1>Hola mundo!</h1>
            <p>Mi primera aplicacion</p>
        </Fragment>
    )*/

    //para usar un fragament sintes¿tisado, sin la importación indicada arribausamos una etiqueta vacia
    return (
        <>  
            <h1>Hola mundo!</h1>
            <p>Mi primera aplicacion</p>
        </>
    )
}
//este ya es un componente, y casi siemptr se tendrá que hacer este cascaron

export default PrimeraApp;
