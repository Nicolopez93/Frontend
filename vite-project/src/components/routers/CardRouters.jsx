import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Detalle from '../pages/detalle/Detalle'
import FlotaDeAutos from '../pages/flotaAutos/FlotaDeAutos'
import FlotaDeCamioneta from '../pages/flotaCamioneta/FlotaDeCamioneta'
import Navbar from '../common/navbar/Navbar'
import Footer from '../common/footer/Footer'
import GaleriaDeImagenes from '../pages/galeriaDeImagenes/GaleriaDeImagenes'

export const CardRouters = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/detalle/:id'
          element={<Detalle />}
        />
        <Route path='/GaleriaDeImagenes/:id' element={<GaleriaDeImagenes />} />
        <Route
          path='/flotaDeAutos'
          element={<FlotaDeAutos />}
        />
        <Route
          path='/flotaDeCamioneta'
          element={<FlotaDeCamioneta />}
        />
      </Routes>
      <Footer />
    </>
  )
}
