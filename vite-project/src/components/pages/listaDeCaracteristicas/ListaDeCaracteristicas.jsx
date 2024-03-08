import React from 'react'
import TablaCaracteristicas from '../../common/tablaCaracteristicas/TablaCaracteristicas'
import Navbar from '../../common/navbar/Navbar'
const ListaDeCaracteristicas = () => {
  return (
    <>
    <Navbar/>
    <div>
      <h1 >Lista de Caracteristicas</h1>
      <TablaCaracteristicas/>
    </div>
    </>
  )
}

export default ListaDeCaracteristicas

