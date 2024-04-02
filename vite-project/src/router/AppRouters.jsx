import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { CardRouters } from '../components/routers/CardRouters';
import { PrivateRouter } from './PrivateRouter'
import { PublicRouters } from './PublicRouters'
import { RegisterPage } from '../auth/pages/RegisterPage'
import PanelAdministrador from '../components/pages/panelAdministrador/PanelAdministrador';
import ListaDeProductos from '../components/pages/listaDeProductos/ListaDeProductos';
import ListaDeUsuarios from '../components/pages/listaDeUsuarios/ListaDeUsuarios';
import ListaDeCaracteristicas from '../components/pages/listaDeCaracteristicas/ListaDeCaracteristicas';
import ListaDeCategorias from '../components/pages/listaDeCategorias/ListaDeCategorias';
import { Reserva } from '../components/pages/reserva/Reserva'
import PoliticasDeUso from '../components/pages/politicasDeUso/PoliticasDeUso';

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

        <Route path='ListaDeCategorias' element={
          <PrivateRouter>
            <ListaDeCategorias/>
          </PrivateRouter>
        }/>
        
        <Route
          path='/reserva'
          element={
            <PrivateRouter>
              <Reserva />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  )
}

