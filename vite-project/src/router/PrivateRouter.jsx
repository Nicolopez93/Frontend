import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/common/navbar/Navbar'
import Footer from '../components/common/footer/Footer'

export const PrivateRouter = ({ children }) => {

  const { user, logged } = useContext(AuthContext)

  return (logged) ? <> 
  <Navbar />
  {children} 
  <Footer/>
  </> : <Navigate to="/login" />
}
