import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import IniciarSesion from './components/pages/inicioSesion/InicioSesion';
import CrearCuenta from './components/pages/crearCuenta/CrearCuenta';
import Administrador from './components/pages/administrador/Administrador';
import Detalle from './components/pages/detalle/Detalle';
import FlotaDeAutos from './components/pages/flotaAutos/FlotaDeAutos';
import FlotaDeCamioneta from './components/pages/flotaCamioneta/FlotaDeCamioneta';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
       <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/admin" element={<Administrador />} />
          <Route path="/crearCuenta" element={<CrearCuenta />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/flotaDeAutos" element={<FlotaDeAutos />} />
          <Route path="/flotaDeCamioneta" element={<FlotaDeCamioneta />} />
         </Routes>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
