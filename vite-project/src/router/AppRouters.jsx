import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { CardRouters } from '../components/routers/CardRouters';
import { PrivateRouter } from './PrivateRouter'
import { PublicRouters } from './PublicRouters'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { AdminRouters } from '../components/routers/AdminRouters';
import PanelAdministrador from '../components/pages/panelAdministrador/PanelAdministrador';
import ListaDeProductos from '../components/pages/listaDeProductos/ListaDeProductos';
import ListaDeUsuarios from '../components/pages/listaDeUsuarios/ListaDeUsuarios';
import ListaDeCaracteristicas from '../components/pages/listaDeCaracteristicas/ListaDeCaracteristicas';

export const AppRouters = () => {
  return(
    <>
      <Routes>
        <Route path='login' element={
          <PublicRouters>
            <LoginPage/>
          </PublicRouters>
        }/>

        <Route path='register' element={
            <RegisterPage/>
        }/>
        <Route path='/*' element={<CardRouters/>}/>
        
        <Route path='/PanelAdministrador' element={
          <PrivateRouter>
            <PanelAdministrador/>
          </PrivateRouter>
        }/>

        <Route path='/ListaDeProductos' element={
          <PrivateRouter>
            <ListaDeProductos/>
          </PrivateRouter>
        }/>
        <Route path='/ListaDeUsuarios' element={
          <PrivateRouter>
            <ListaDeUsuarios/>
          </PrivateRouter>
        }/>

        <Route path='/ListaDeCaracteristicas' element={
          <PrivateRouter>
            <ListaDeCaracteristicas/>
          </PrivateRouter>
        }/>

      </Routes>
    </>
  )
}