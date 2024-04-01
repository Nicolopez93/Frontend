import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import './perfil.css';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
const Perfil = () => {
  const { user } = useContext(AuthContext);

  const obtenerInicial = () => {
    if (user && user.nombre) {
      return user.nombre.charAt(0).toUpperCase();
    }
    return '';
  };

  return (
    <>
    <section className="detalle-section" >
      <Link className="detalle-volver-btn" to="/">
          Volver
        </Link>
      <h2 className="detalle-title">Datos de Usuario</h2>
      <div className="perfil-subcontainer">
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
      
    </section>
    </>
  );
};

export default Perfil;
