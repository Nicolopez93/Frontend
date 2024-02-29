import React from 'react'
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './components/pages/home/home';
import IniciarSesion from './components/pages/inicioSesion/InicioSesion';
import CrearCuenta from './components/pages/crearCuenta/CrearCuenta';
import Administrador from './components/pages/administrador/Administrador';
import Detalle from './components/pages/detalle/Detalle';


function App() {


  return (
    <Router>
          <React.Fragment>
            {/* <Navbar/> */}
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/iniciarSesion" element={<IniciarSesion/>} />
              <Route path="/admin" element={<Administrador/>} />
              <Route path='/crearCuenta' element={<CrearCuenta/>}/>
              <Route path="/detalle/:id" element={<Detalle/>} />
            </Routes>
            {/* <Footer/> */}
            </React.Fragment>
    </Router>
  )
}

export default App
