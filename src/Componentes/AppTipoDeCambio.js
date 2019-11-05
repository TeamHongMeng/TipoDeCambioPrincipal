import React, { Component } from 'react';
//import './App.css';
import '../App2.css';
import "react-table/react-table.css";
import Navegacion from './Navegacion';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import PropTypes from 'prop-types';
import Tabla from './Tabla';
import Tabla4 from './Tabla4';
import HeaderTabla from './HeaderTabla'


class AppTipoDeCambio extends Component {

  render() {

    return (

      <div>
      <div className="row">
        <div className="col s12">
          <HeaderTabla />
        </div>
      </div>

      <div className="row">
        <div className="col s6">
          <Tabla />
        </div>
        <div className="col s6">
          <Tabla4 />
        </div>
      </div>

      </div>

      
    );
  }

}



export default AppTipoDeCambio;





