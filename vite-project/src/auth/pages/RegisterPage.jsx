import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'


export const RegisterPage = () => {

  const { login } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const postUser = async (user) => {
    const usuarioRole = 'user'
    user.usuarioRole = usuarioRole
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    console.log(data)
    

    login(data)

    navigate('/', {
      replace: true,
    })
  }

  useEffect(() => {
    if (formData.name && formData.email && formData.password) {
      postUser(formData)
    }

  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.elements.name.value === '' || e.target.elements.email.value === '' || e.target.elements.password.value === ''){
      alert('Todos los campos son requeridos')
      return
    }
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    
    setFormData({ name, email, password })

    setTimeout(() => {
      e.target.reset()
      setFormData({ email: '', password: '' })
    }, 2000)

  }

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              name='name' // Agregado el atributo 'name'
              label='Nombre completo'
              type='text'
              placeholder='Nombre'
              fullWidth
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              name='email' // Agregado el atributo 'name'
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              name='password' // Agregado el atributo 'name'
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}>
              <Button
                type='submit' // Agregado el tipo de botón 'submit'
                variant='contained'
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color='inherit'
              to='/login'>
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
