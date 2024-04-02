import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AgregarUsuario from '../../common/agregarUsuario/AgregarUsuario'; // Asegúrate de importar el componente AgregarUsuario correctamente
import TablaUsuarios from '../../common/tablaUsuarios/TablaUsuarios';
import './listaDeUsuarios.css';
import { Link } from 'react-router-dom';

const ListaDeUsuarios = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='panel-users-container'>
        <Link to='/PanelAdministrador'>
          <button
            style={{
              marginTop: '20px',
              marginLeft: '20px',
            }}>
            Volver
          </button>
        </Link>
        <h1 className='panel-users-title'>Lista de usuarios</h1>
        <Button onClick={handleOpen}>Agregar Usuario</Button>
        <AgregarUsuario
          open={open}
          handleClose={handleClose}
        />
        <TablaUsuarios />
      </div>
    </>
  );
};

export default ListaDeUsuarios;
