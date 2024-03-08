import { Routes, Route } from 'react-router-dom'
import PanelAdministrador from '../pages/panelAdministrador/PanelAdministrador'
import ListaDeProductos from '../pages/listaDeProductos/ListaDeProductos'
import ListaDeUsuarios from '../pages/listaDeUsuarios/ListaDeUsuarios'
import ListaDeCaracteristicas from '../pages/listaDeCaracteristicas/ListaDeCaracteristicas'
export const AdminRouters = () => {
  return (
    <>
    <Routes>
    <Route path="/PanelAdministrador" element={<PanelAdministrador />} />
    <Route path="/ListaDeProductos" element={<ListaDeProductos />} />
    <Route path="/ListaDeUsuarios" element={<ListaDeUsuarios />} />
    <Route path="/ListaDeCaracteristicas" element={<ListaDeCaracteristicas />} />
    </Routes>
    
    </>
  )
}

