import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import Navbar from '../../common/navbar/Navbar';
import './crearCuenta.css'
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

const CrearCuenta = () => {
  const [emailError, setEmailError] = useState('');

  const initialValues = {
    nombre: '',
    apellido: '',
    password: '',
    email: '',
    usuarioRole: '',
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/users?email=${data.email}`);
      if (response.data.length > 0) {
        setEmailError('Ya existe un usuario registrado con este correo electrónico.');
      } else {
        await axios.post('http://localhost:5000/users', data);
        setEmailError('');
        alert('Usuario registrado exitosamente.');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <Navbar/>
    
    <div className="crear-cuenta-container">
      <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.3/illustrations-traveller/TripsCarRentalManageMyAccount.png" alt="munecooo" />
      <Box className = "crear-cuenta-form">
        <form
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic-nombre"
            label="Ingrese el nombre"
            variant="outlined"
            name="nombre"
            fullWidth
            onChange={handleChange}
          />

          <TextField style={{ marginTop: "20px" }}
            id="outlined-basic-apellido"
            label="Ingrese el apellido"
            variant="outlined"
            name="apellido"
            fullWidth
            onChange={handleChange}
          />

          <TextField style={{ marginTop: "20px" }}
            id="outlined-basic-email"
            label="Ingrese el email"
            variant="outlined"
            name="email"
            fullWidth
            onChange={handleChange}
            error={Boolean(emailError)}
            helperText={emailError}
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

          <TextField style={{ marginTop: "20px" }}
            id="outlined-basic-usuarioRole"
            label="Ingrese el rol de usuario"
            variant="outlined"
            name="usuarioRole"
            fullWidth
            onChange={handleChange}
          />

          <Button style={{ marginTop: "20px"}} type='submit' variant='contained' color='primary'>Agregar usuario</Button>
        </form>
      </Box>
    </div>
    
    </>
  );
}

export default CrearCuenta;
