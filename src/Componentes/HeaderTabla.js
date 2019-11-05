import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import ReactTable from "react-table";
//import './App2.css';
import { browserHistory } from 'react-router-3';

class HeaderTabla extends Component {
    Regresar = (e) => {
        browserHistory.push('/');
        e.preventDefault();

    }

    onclick(event) {
        console.log(event.target.type);

    }



    render() {
        return (
            <div>
                <h3> Mantenimiento de Cambios  <ul id="nav-mobile" class="right  hide-on-med-and-down">
                    <li ><a className="seleccionar" onClick={this.Regresar} >Regresar<i className="material-icons right">reply</i></a></li>
                </ul></h3>
            </div>
        )
    }
}

export default HeaderTabla;