import React, { useState, useEffect } from 'react';

const Perfil = () => {
  const [userData, setUserData] = useState({
    password: '',
    email: '',
    nombre: '',
    usuarioRol: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/usuario');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Datos de Usuario</h2>
      <ul>
        <li>Nombre: {userData.nombre}</li>
        <li>Email: {userData.email}</li>
        <li>Rol de Usuario: {userData.usuarioRol}</li>
      </ul>
    </div>
  );
};

export default Perfil;

