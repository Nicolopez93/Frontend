import React from 'react'
import TablaCaracteristicas from '../../common/tablaCaracteristicas/TablaCaracteristicas'
import { Link } from 'react-router-dom'

const ListaDeCaracteristicas = () => {
  return (
    <>
      <div>
        <Link to='/PanelAdministrador'>
          <button
            style={{
              marginTop: '20px',
              marginLeft: '20px',
            }}>
            Volver
          </button>
        </Link>
        <h1>Lista de Caracteristicas</h1>
        <TablaCaracteristicas />
      </div>
    </>
  )
}

export default ListaDeCaracteristicas
