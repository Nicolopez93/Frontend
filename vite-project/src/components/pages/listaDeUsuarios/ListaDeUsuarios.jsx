import React from 'react'
import TablaUsuarios from '../../common/tablaUsuarios/TablaUsuarios'
import './listaDeUsuarios.css'
import { Link } from 'react-router-dom'

const ListaDeUsuarios = () => {
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
        <TablaUsuarios />
      </div>
    </>
  )
}

export default ListaDeUsuarios
