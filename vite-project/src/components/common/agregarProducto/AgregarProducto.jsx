import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import {useFormik} from 'formik';
import axios from 'axios';

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

const AgregarProducto = ({open, handleClose}) => {
    let initialValues = {
        nombre: '',
        puertas: '',
        valijas: '',
        personas: '',
        categoria: '',
        imgUrl: '',
        precio: ''
    }
    const onSubmit = (data) => {
        let newData = {
            nombre: data.nombre,
            puertas: data.puertas,
            valijas: data.valijas,
            personas: data.personas,
            categoria: data.categoria,
            imgUrl: data.imgUrl,
            precio: data.precio,
            isLiked: false
        }
        axios.post('http://localhost:8080/autos', newData)
        .then (res => {
            handleClose();
            window.location.reload();
        })
        .cath (err => console.log(err))
    }

const {handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit
})

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form style={{display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", height: "400px"}}
        onSubmit={handleSubmit}
        >

        <TextField id="outlined-basic" 
        label="Ingrese el nombre" variant="outlined" name = "nombre" fullWidth onChange={handleChange} />

        <TextField id="outlined-basic" 
        label="Cantidad de puertas" variant="outlined"name = "puertas" fullWidth onChange={handleChange} />

        <TextField id="outlined-basic" 
        label="Cantidad de personas" variant="outlined" name = "personas" fullWidth onChange={handleChange} />

        <TextField id="outlined-basic" 
        label="Cantidad de valijas" variant="outlined" name = "valijas" fullWidth onChange={handleChange}/>

        <TextField id="outlined-basic" 
        label="Categoria auto o camioneta" variant="outlined" name = "categoria" fullWidth onChange={handleChange} />

        <TextField id="outlined-basic" 
        label="Insertar url de la imagen" variant="outlined" name = "imgUrl" fullWidth onChange={handleChange} />

        <TextField id="outlined-basic" 
        label="Precio" variant="outlined" name = "precio" fullWidth onChange={handleChange} />

    <Button type='submit' variant='contained' color='primary'>Agregar producto</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AgregarProducto
