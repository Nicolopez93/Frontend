import React from 'react'
import { Link } from 'react-router-dom'
import TablaCategorias from '../../common/tablaCategorias/TablaCategorias'

const ListaDeCategorias = () => {
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
            <h1>Administrar categorías</h1>
            <TablaCategorias />
          </div>
        </>
      )
}

export default ListaDeCategorias