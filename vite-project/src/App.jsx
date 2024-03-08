import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import IniciarSesion from './components/pages/inicioSesion/InicioSesion';
import CrearCuenta from './components/pages/crearCuenta/CrearCuenta';
import Detalle from './components/pages/detalle/Detalle';
import FlotaDeAutos from './components/pages/flotaAutos/FlotaDeAutos';
import FlotaDeCamioneta from './components/pages/flotaCamioneta/FlotaDeCamioneta';
import AuthContextProvider from './context/AuthContext';
import PanelAdministrador from './components/pages/panelAdministrador/PanelAdministrador';
import ListaDeProductos from './components/pages/listaDeProductos/ListaDeProductos';
function App() {
  return (
    <BrowserRouter>
       <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/PanelAdministrador" element={<PanelAdministrador />} />
          <Route path="/crearCuenta" element={<CrearCuenta />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/flotaDeAutos" element={<FlotaDeAutos />} />
          <Route path="/flotaDeCamioneta" element={<FlotaDeCamioneta />} />
          <Route path="/ListaDeProductos" element={<ListaDeProductos />} />
         </Routes>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
