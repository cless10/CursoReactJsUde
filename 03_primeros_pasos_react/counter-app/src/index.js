//punto inicia de nuestra aplicacion
import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';           //utilizamos un css

/*
const saludo = <h1>Hola Mundo</h1>;     //para renderizar esta etiqueta, debemos utilzar el react-dom, esto no es un componente
//console.log( saludo );

//HAY QUE INDICAR DONDE LO QUIERO RENDERIZAR
//Creamos la referencia al div donde queremos incrustar la etiqueta

const divRoot = document.querySelector('#root');  //buscamos el elemento Root por su id con # en el documento (index.xhtml)
//console.log( divRoot );

//podría ocuparse la siguiente linea para poner saludos en el documento, pero esto no es react:
//document.body.append( saludo );     --pero esto manda un object

//renderizamos saludos
ReactDOM.render( saludo, divRoot);      //usamos el reactDOM para renderizar, 1er arg es el elemento a renderizar y el 2ndo en donde se renderiza
//ReactDOM permite empezar a manejar un árbol de componentes, permite solo actualizar en donde exista algun cabio, así como la comunicación entre componentes
*/



const divRoot = document.querySelector('#root'); 

ReactDOM.render( <PrimeraApp saludo="Hola soy Goku"/>, divRoot);          //como es un componente, lo manejamos como una etiqueta html