import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'

export const UserRouters = ({ children }) => {

    const { logged, user } = useContext(AuthContext);
  
    return logged ? (
      <>
        {children}
      </>
    ) : user.usuarioRol === 'ROLE_ADMIN' ? (
      <Navigate to="/PanelAdministrador" />
    ) : (
      <Navigate to="/login" />
    );
  };
