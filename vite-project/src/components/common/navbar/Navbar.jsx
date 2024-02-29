import React from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../../../assets/logotransp.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-container">
        <a href="/home"><img src={imgLogo} alt='logo'className="navbar-logo"/></a>
        <li className="navbar-buttons">
            <Link to="/Admin"><button>Administrador</button></Link>
            <Link to="/IniciarSesion"><button>Iniciar sesión</button></Link>
            <Link to="/CrearCuenta"><button>Crear cuenta</button></Link>
        </li>
    </div>
  )
}

export default Navbar