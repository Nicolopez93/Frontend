import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';

const Perfil = () => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h2>Datos de Usuario</h2>
        <ul>
          <li>Nombre: {user.nombre}</li>
          <li>Email: {user.email}</li>
          <li>Rol de Usuario: {user.usuarioRol}</li>
        </ul>
      </div>
    </div>
  );
};

export default Perfil;
