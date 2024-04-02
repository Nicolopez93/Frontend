import React from 'react';
import { Link } from 'react-router-dom';
import './tipoDeAuto.css';

const TipoDeAuto = () => {
    

    return (
        <>
        <div className='tipoDeAuto-container'>
            <h2 className='tipoDeAuto-titulo'>ALQUILER DE AUTOS EN LATINOAMÉRICA</h2>
                <div className='tipoDeAuto-card-link'>
                <Link to="/flotaDeAutos"><button>Autos</button>                    
                </Link>
                <Link to="/flotaDeCamioneta">
                <button>Camionetas</button>
                </Link>
                </div>
            </div>
        </>
    );
};

export default TipoDeAuto;
