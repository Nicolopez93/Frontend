import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import imgLogo from '../../../assets/logotransp.png'
import './navbar.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Typography, Tooltip, IconButton, Avatar, Button } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const { user, logout } = useContext(AuthContext)

  console.log(user)

  const navigate = useNavigate()
  const iniciar = (user) => {
    const inicial = user ? user.name.charAt(0) : ''
    return inicial
  }

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
      <div
        className='navbar-buttons'
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 1rem',
        }}>
        <Tooltip title='Administrador de usuario'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            style={{ backgroundColor: 'orange' }}>
            <Avatar
              sx={{ width: 48, height: 48 }}
              style={{ backgroundColor: 'orange' }}>
              {iniciar ? iniciar(user) : ''}
            </Avatar>
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
          <MenuItem onClick={handleClose}>
            <Link to='/perfil'>
              <p
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                }}>
                Usuario:
                {user ? (
                  user?.name + ' ' + user?.apellido
                ) : (
                  <Link to='/login'>
                    <Button>Iniciar sesión</Button>
                  </Link>
                )}
              </p>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {user ? <Button onClick={handleLogout}>Cerrar sesión</Button> : ''}
          </MenuItem>
        </Menu>

        {/* {user?.usuarioRole === 'admin' ? (
          <Link to='/PanelAdministrador'>
            <button>Administrador</button>
          </Link>
        ) : (
          ''
        )} */}

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
      </div>
    </nav>
  )
}

export default Navbar
