import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import './panelAdministrador.css'
import { Link } from 'react-router-dom'
const PanelAdministrador = () => {
  return (
    <>
      <Navbar/>
    <div className="panel-container">
      <h1 className="panel-title">Panel de administrador</h1>
      <Link to="/ListaDeProductos"><button className="panel-button">Lista De Productos</button></Link>
      <button className="panel-button">Lista De Usuarios</button>
      <button className="panel-button">Administrar Caracteristicas</button>
    </div>

      <Footer/>
    </>
  )
}

export default PanelAdministrador
