import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AgregarProducto = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    imgUrl: "",
    marca: "",
    modelo: "",
    puertas: "",
    valijas: "",
    personas: "",
    precio: "",
    tipoCaja: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    axios.post('http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/autos', formData)
      .then(res => {
        handleClose();
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onSubmit={handleSubmit}
          >
            {Object.keys(formData).map((key) => (
              <TextField
                key={key}
                id={`outlined-${key}`}
                label={key}
                variant="outlined"
                name={key}
                fullWidth
                value={formData[key]}
                onChange={handleChange}
              />
            ))}
            <Button type='submit' variant='contained' color='primary'>Agregar producto</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AgregarProducto;
