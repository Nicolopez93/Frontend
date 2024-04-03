import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../../assets/logotransp.png';
import './navbar.css';
import { AuthContext } from '../../../auth/context/AuthContext';
import { Typography, Tooltip, IconButton, Avatar, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const obtenerInicial = () => {
    if (user && user.nombre) {
      return user.nombre.charAt(0).toUpperCase();
    }
    return '';
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        
        <Tooltip title='Administrador de usuario'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            style={{ backgroundColor: 'orange' }}
          >
            <Avatar sx={{ width: 48, height: 48 }} style={{ backgroundColor: 'orange' }}>
              {obtenerInicial()}
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
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
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
                  `${user.nombre}`
                ) : (
                  <Link to='/login'>
                    <Button>Iniciar sesión</Button>
                  </Link>
                )}
              </p>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {user ? (
              <Link to={'/Favoritos'}>
                <p
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'normal',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                  }}>
                  Favoritos
                </p>
              </Link>
            ) : (
              ''
            )}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {user ? (
              <Link to={'/reserva'}>
                <p
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'normal',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                  }}>
                  Reservas
                </p>
              </Link>
            ) : (
              ''
            )}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {user ? (
              <Link to={'/PanelAdministrador'}>
                <p
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'normal',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                  }}>
                  Administrador
                </p>
              </Link>
            ) : (
              ''
            )}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {user ? (
              <Button
                onClick={handleLogout}
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'normal',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  padding: '0',
                }}>
                Cerrar sesión
              </Button>
            ) : (
              ''
            )}
          </MenuItem>
        </Menu>

        {!user && (
          <Link to='/login'>
            <button>Iniciar sesión</button>
          </Link>
        )}
        {!user && (
          <Link to='/register'>
            <button>Crear cuenta</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
