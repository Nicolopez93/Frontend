import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import './LoginPage.css' // Agrega un archivo CSS para los estilos

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { login } = useContext(AuthContext)

  const postUser = async (user) => {
    const usuarioRole = 'user'
    user.usuarioRole = usuarioRole
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    console.log(data)
    login(data)
    navigate('/', { replace: true, })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name === '' || formData.email === '' || formData.password === '') {
      alert('Todos los campos son requeridos')
      return
    }
    postUser(formData)
    setFormData({ name: '', email: '', password: '' })
  }

  return (
    <AuthLayout>
      <div>
        <div className="heading">Crear cuenta</div>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            id='name'
            name='name'
            label='Nombre completo'
            type='text'
            placeholder='Nombre'
            fullWidth
            className="input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            id='email'
            name='email'
            label='Correo'
            type='email'
            placeholder='correo@google.com'
            fullWidth
            className="input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            id='password'
            name='password'
            label='Contraseña'
            type='password'
            placeholder='Contraseña'
            fullWidth
            className="input"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Button
            variant='contained'
            fullWidth
            type='submit'
            className="login-button">
            Crear cuenta
          </Button>
        </form>
      </div>
      <Grid
        container
        direction='row'
        justifyContent='end'
      >
        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
        <Link
          component={RouterLink}
          color='inherit'
          to='/login'
        >
          ingresar
        </Link>
      </Grid>
    </AuthLayout>
  )
}