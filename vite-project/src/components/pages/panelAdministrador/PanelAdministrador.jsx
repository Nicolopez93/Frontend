import React from 'react';
import { Link } from 'react-router-dom';

const PanelAdministrador = () => {
  return (
    <div className="bg-[#91c0f34d] min-h-screen flex flex-col justify-center items-center p-8" style={{ minHeight: '83vh' }}>
      <h1 className="text-3xl font-bold text-center mb-8">Panel de administrador</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link to="/ListaDeProductos">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Lista De Productos</button>
        </Link>
        <Link to="/ListaDeUsuarios">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Lista De Usuarios</button>
        </Link>
        <Link to="/ListaDeCaracteristicas">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Administrar Caracteristicas</button>
        </Link>
        <Link to="/ListaDeCategorias">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Administrar Categorias</button>
        </Link>
      </div>
    </div>
  );
};

export default PanelAdministrador;
