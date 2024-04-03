import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Button from "../../common/button/Button";

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
    <section className=" bg-[#91c0f34d] h-screen ">
    <div className='mx-[4vw] pt-8 '>
        <Link to='/'>
          <Button>Volver</Button>
        </Link>
      
      <h2 className=" text-3xl font-medium text-gray-900 text-center ">Datos de Usuario</h2>
      <div className="flex gap-20 justify-between items-center mx-[4vw]">
        <ul className="basis-1/2 flex flex-col gap-4 p-4 shadow-lg border-2 border-[#0C4D9C] rounded-xl bg-slate-200">
          <li className="text-lg font-medium text-gray-900">Nombre: {user.nombre}</li>
          <li className="text-lg font-medium text-gray-900">Email: {user.email}</li>
          <li className="text-lg font-medium text-gray-900">Rol de Usuario: {user.usuarioRol}</li>
        </ul>
        <div className="basis-1/2">
      <Avatar sx={{ width: 200, height: 200,fontSize: 100 }} style={{ backgroundColor: 'orange' }}>
      {obtenerInicial()}
      </Avatar>
      </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Perfil;
