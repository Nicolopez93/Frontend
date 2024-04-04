import React from 'react'
import TablaCaracteristicas from '../../common/tablaCaracteristicas/TablaCaracteristicas'
import { Link } from 'react-router-dom'
import Button from "../../common/button/Button";

const ListaDeCaracteristicas = () => {
  return (
    <div className='bg-[#91c0f34d] min-h-screen'>
      <div className="mx-[4vw] pt-8">
        <Link to="/PanelAdministrador">
          <Button>Volver</Button>
        </Link>
        <h1 className="text-3xl font-bold text-center my-8 ">Lista de Caracteristicas</h1>
        <div className='pb-28'>
        <TablaCaracteristicas />
        </div>
      </div>
    </div>
  )
}

export default ListaDeCaracteristicas
