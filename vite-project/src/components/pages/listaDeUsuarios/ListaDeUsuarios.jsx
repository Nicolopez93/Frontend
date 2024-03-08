import React from 'react'
import TablaUsuarios from '../../common/tablaUsuarios/TablaUsuarios'
import './listaDeUsuarios.css'

const ListaDeUsuarios = () => {
  return (
    <>
    <div className="panel-users-container">
      <h1 className="panel-users-title">Lista de usuarios</h1>
      <TablaUsuarios/>
    </div>
    </>
  )
}

export default ListaDeUsuarios
