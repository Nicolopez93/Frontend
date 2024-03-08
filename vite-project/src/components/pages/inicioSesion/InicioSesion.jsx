import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import Navbar from '../../common/navbar/Navbar';
import './inicioSesion.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const InicioSesion = () => {
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`);
      if (response.data.length > 0) {
        setIsLoggedIn(true);
      } else {
        setLoginError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  if (isLoggedIn) {
    console.log('Usuario inició sesión con éxito');
  }

  return (
    <>
    
      <Navbar />
      <div className='inicio-sesion-container'>
      <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.3/illustrations-traveller/TripsCarRentalManageMyAccount.png" alt="munecooo" />
      <Box className = 'inicio-sesion-form'>
        <form
          onSubmit={handleSubmit}
        >
          <TextField 
            id="outlined-basic-email"
            label="Ingrese el email"
            variant="outlined"
            name="email"
            fullWidth
            onChange={handleChange}
          />

          <TextField style={{ marginTop: "20px" }}
            id="outlined-basic-password"
            label="Ingrese la contraseña"
            variant="outlined"
            type="password"
            name="password"
            fullWidth
            onChange={handleChange}
          />

          <Button style={{ marginTop: "20px" }} type='submit' variant='contained' color='primary'>Iniciar sesión</Button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </form>
      </Box>
    </div>
    </>
  );
}

export default InicioSesion;
