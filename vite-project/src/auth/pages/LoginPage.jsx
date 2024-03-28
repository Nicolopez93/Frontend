import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import './LoginPage.css'

export const LoginPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [notFound, setNotFound] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { login } = useContext(AuthContext)

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/usuario')
    
    const data = await response.json()
    console.log(response);
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    setFormData({ email, password })

    const user = users.find(
      (user) => user.email === email && user.password === password
    )
    
    if (user) {
      console.log('Usuario logueado')
      setUser(user)
      setNotFound(false)
      login(user)
      navigate('/PanelAdministrador', {
        replace: true,
      })
    } else {
      console.log('Usuario no encontrado')
      setNotFound(true)
    }

    setFormData({ email: '', password: '' })
    e.target.reset()
  }

  return (

    <AuthLayout>
      <div>
        <div className="heading">Inicia sesión</div>
        <form onSubmit={handleSubmit} className="form">
          {notFound && (
            <Grid item xs={12}>
              <Typography sx={{ ml: 1, color: '#000'}}>Usuario no encontrado</Typography>
            </Grid>
          )}
          <TextField
            id='email'
            name='email'
            label='Correo'
            type='email'
            placeholder='correo@google.com'
            fullWidth
            className="input"
          />
          <TextField
            id='password'
            name='password'
            label='Contraseña'
            type='password'
            placeholder='Contraseña'
            fullWidth
            className="input"
          />
          <Button
            variant='contained'
            fullWidth
            type='submit'
            className="login-button">
            Ingresar
          </Button>
          <div className="social-account-container">
            <span className="title">O ingresa con:</span>
            <div className="social-accounts">
              <button className="social-button google">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              </button>
              <button className="social-button twitter">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Grid
        container
        direction='row'
        justifyContent='end'
      >
        <Link
          component={RouterLink}
          color='inherit'
          to='/register'
        >
          Crear una cuenta
        </Link>
      </Grid>
    </AuthLayout>
  )
}