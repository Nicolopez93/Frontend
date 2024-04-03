import React from 'react'
import TablaCaracteristicas from '../../common/tablaCaracteristicas/TablaCaracteristicas'
import { Link } from 'react-router-dom'
import Button from "../../common/button/Button";

const ListaDeCaracteristicas = () => {
  return (
    <>
      <div className="mx-[4vw] pt-8 h-screen mb-28">
        <Link to="/PanelAdministrador">
          <Button>Volver</Button>
        </Link>
        <h1 className="text-3xl font-bold text-center ">Lista de Caracteristicas</h1>
        <TablaCaracteristicas />
      </div>
    </>
  )
}

export default ListaDeCaracteristicas
