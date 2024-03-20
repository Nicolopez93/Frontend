import React, { useNavegate } from 'react'
import Button from '@mui/material/Button'
import AgregarProducto from '../../common/agregarProducto/AgregarProducto'
import TablaAdministrador from '../../common/tablaAdmin/TablaAdministrador'
import './ListaDeProductos.css'
import { Link } from 'react-router-dom'

const ListaDeProductos = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className='panel-productos-container'>
        <Link to='/PanelAdministrador'>
          <button
            style={{
              marginTop: '20px',
              marginLeft: '20px',
            }}>
            Volver
          </button>
        </Link>
        <h1 className='panel-productos-title'>Lista De Productos</h1>
        <Button onClick={handleOpen}>Agregar Producto</Button>
        <AgregarProducto
          open={open}
          handleClose={handleClose}
        />
        <TablaAdministrador />
      </div>
    </>
  )
}

export default ListaDeProductos
