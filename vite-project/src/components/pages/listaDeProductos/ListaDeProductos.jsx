import React, { useState } from "react";
import AgregarProducto from "../../common/agregarProducto/AgregarProducto";
import TablaAdministrador from "../../common/tablaAdmin/TablaAdministrador";
import { Link } from "react-router-dom";
import Button from "../../common/button/Button";

const ListaDeProductos = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-[#91c0f34d] min-h-screen">
      <div className="mx-4 sm:mx-8 pt-8 mb-16 ">
        <Link to="/PanelAdministrador">
          <Button>Volver</Button>
        </Link>
        <h1 className="text-3xl font-bold text-center my-8">
          Lista De Productos
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-8 w-full sm:w-auto"
          onClick={handleOpen}
        >
          Agregar Producto
        </button>
        <AgregarProducto open={open} handleClose={handleClose} />
        <div className="-mb-8">
          <TablaAdministrador />
        </div>
      </div>
    </div>
  );
};

export default ListaDeProductos;
