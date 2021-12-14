import React from 'react';
import {Fragment} from 'react/cjs/react.production.min';
import PropTypes from 'prop-types'



const PrimeraApp = ({saludos = "hola"}) => {


   
  
    return ( <Fragment >
        <h1 > Hola Mundo {
            saludos
        } </h1> <p> Primera Aplicacion </p> </Fragment >

    );
}

PrimeraApp.propTypes = {

    saludo:PropTypes.string

}

export default PrimeraApp;