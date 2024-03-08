import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

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
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()
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
      navigate('/', {
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
    <AuthLayout title='Login'>
      <form onSubmit={handleSubmit}>
        <Grid container>
          {notFound && (
            <Grid item xs={12}>
              <Typography sx={{ ml: 1, color: '#000'}}>Usuario no encontrado</Typography>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              id='email'
              name='email'
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
              id='password'
              name='password'
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
              xs={12}
              sm={6}>
              <Button
                variant='contained'
                fullWidth
                type='submit'>
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'>
            <Link
              component={RouterLink}
              color='inherit'
              to='/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
