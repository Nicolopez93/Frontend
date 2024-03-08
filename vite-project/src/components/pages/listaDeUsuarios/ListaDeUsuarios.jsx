import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import TablaUsuarios from '../../common/tablaUsuarios/TablaUsuarios'
import './listaDeUsuarios.css'
import Footer from '../../common/footer/Footer'
const ListaDeUsuarios = () => {
  return (
    <>
    <Navbar/>
    <div className="panel-users-container">
      <h1 className="panel-users-title">Lista de usuarios</h1>
      <TablaUsuarios/>
    </div>
    <Footer/>
    </>
  )
}

export default ListaDeUsuarios
