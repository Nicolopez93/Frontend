import React from 'react'
import './panelAdministrador.css'
import { Link } from 'react-router-dom'
const PanelAdministrador = () => {
  return (
    <> 
    <div className="panel-container">
      <h1 className="panel-title">Panel de administrador</h1>
      <Link to="/ListaDeProductos"><button className="panel-button">Lista De Productos</button></Link>
      <Link to="/ListaDeUsuarios"><button className="panel-button">Lista De Usuarios</button>
      </Link>
      <Link to="/ListaDeCaracteristicas"><button className="panel-button">Administrar Caracteristicas</button>
    </Link>
    </div>
    </>
  )
}

export default PanelAdministrador
