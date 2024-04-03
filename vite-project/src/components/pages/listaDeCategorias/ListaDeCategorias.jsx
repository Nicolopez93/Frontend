import React from 'react'
import { Link } from 'react-router-dom'
import TablaCategorias from '../../common/tablaCategorias/TablaCategorias'
import Button from "../../common/button/Button";
const ListaDeCategorias = () => {
    return (
        <>
         <div className='bg-[#91c0f34d] h-screen'>
          <div className='mx-[4vw] pt-8 h-screen mb-40'>
          <Link to="/PanelAdministrador">
          <Button>Volver</Button>
        </Link>
            <h1 className="text-3xl font-bold text-center my-8 ">Administrar categorías</h1>
            <TablaCategorias />
          </div>
        </div>
        </>
      )
}

export default ListaDeCategorias