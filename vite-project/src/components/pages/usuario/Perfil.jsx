import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import './perfil.css';
import Avatar from '@mui/material/Avatar';

const Perfil = () => {
  const { user } = useContext(AuthContext);

  const obtenerInicial = () => {
    if (user && user.nombre) {
      return user.nombre.charAt(0).toUpperCase();
    }
    return '';
  };

  return (
    <div >
      <h2 className="perfil-heading">Datos de Usuario</h2>
      <div className="perfil-container">
        
        <ul className="perfil-list">
          <li className="perfil-item">Nombre: {user.nombre}</li>
          <li className="perfil-item">Email: {user.email}</li>
          <li className="perfil-item">Rol de Usuario: {user.usuarioRol}</li>
        </ul>
        <div>
      <Avatar sx={{ width: 200, height: 200,fontSize: 100 }} style={{ backgroundColor: 'orange' }}>
      {obtenerInicial()}
            </Avatar>
      </div>
      </div>
      
    </div>
  );
};

export default Perfil;
