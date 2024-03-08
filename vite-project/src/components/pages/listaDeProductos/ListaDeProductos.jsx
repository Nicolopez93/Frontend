import React from 'react'
import Button from '@mui/material/Button';
import AgregarProducto from '../../common/agregarProducto/AgregarProducto';
import Navbar from '../../common/navbar/Navbar';
import TablaAdministrador from '../../common/tablaAdmin/TablaAdministrador';
import './ListaDeProductos.css'
const ListaDeProductos = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
    <Navbar/>
    <div className='panel-productos-container'>
      <h1 className='panel-productos-title'>Lista De Productos</h1>
      <Button onClick={handleOpen}>Agregar Producto</Button>
    <AgregarProducto open ={open} handleClose ={handleClose} />
      <TablaAdministrador/>
    </div>
    </>
  )
}

export default ListaDeProductos
