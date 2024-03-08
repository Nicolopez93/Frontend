import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import  Administrador  from '../components/pages/administrador/Administrador';
import { CardRouters } from '../components/routers/CardRouters';
import { PrivateRouter } from './PrivateRouter'
import { PublicRouters } from './PublicRouters'

import { RegisterPage } from '../auth/pages/RegisterPage'

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

        <Route path='/Admin' element={
          <PrivateRouter>
            <Administrador/>
          </PrivateRouter>
        }/>
      </Routes>
    </>
  )
}