import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import imgLogo from '../../../assets/logotransp.png'
import './navbar.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Typography } from '@mui/material'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  
  const navigate = useNavigate()
  const iniciar = (user) => {
    const inicial = user ? user.name.charAt(0) : '';
    return inicial;
}

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <nav className='navbar-container'>
      <a href='/'>
        <img
          src={imgLogo}
          alt='logo'
          className='navbar-logo'
        />
      </a>
      <div className='navbar-buttons'>
        <Typography
          variant='h4'
          sx={{ mr: 4, color: '#fff', textTransform: 'capitalize', borderRadius: '25px', backgroundColor: '#fa5c00', padding: '10px' }}>
          {iniciar ? iniciar(user) : ''}
        </Typography>

        {user?.usuarioRole === 'admin' ? (
          <Link to='/PanelAdministrador'>
            <button>Administrador</button>
          </Link>
        ) : (
          ''
        )}

        {user ? (
          ''
        ) : (
          <Link to='/login'>
            <button>Iniciar sesión</button>
          </Link>
        )}
        {user ? (
          ''
        ) : (
          <Link to='/register'>
            <button>Crear cuenta</button>
          </Link>
        )}
        {user ? <button onClick={handleLogout}>Cerrar sesión</button> : ''}
      </div>
    </nav>
  )
}

export default Navbar
