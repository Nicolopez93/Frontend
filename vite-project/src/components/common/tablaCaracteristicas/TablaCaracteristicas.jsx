import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';

const TablaCaracteristicas = () => {
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    fetchCaracteristicas();
  }, []);

  const fetchCaracteristicas = () => {
    axios.get('http://localhost:3000/caracteristicas')
      .then(response => setCaracteristicas(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const editingCaracteristica = caracteristicas.find(caracteristica => caracteristica.id === id);
    setEditFields(editingCaracteristica);
  };

  const handleSave = (id) => {
    axios.patch(`http://localhost:3000/caracteristicas/${id}`, editFields)
      .then(() => {
        setEditingId(null);
        fetchCaracteristicas();
      })
      .catch(err => console.error(err));
  };

  const handleInputChange = (e, key) => {
    setEditFields({ ...editFields, [key]: e.target.value });
  };

  const eliminarCaracteristica = (id) => {
    axios.delete(`http://localhost:3000/caracteristicas/${id}`)
      .then(() => {
        setCaracteristicas(caracteristicas.filter(caracteristica => caracteristica.id !== id));
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Puertas</TableCell>
              <TableCell>Valijas</TableCell>
              <TableCell>Personas</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {caracteristicas && caracteristicas.map(caracteristica => (
              <TableRow key={caracteristica.id}>
                <TableCell>{caracteristica.id}</TableCell>
                <TableCell>{caracteristica.nombre}</TableCell>
                <TableCell>{caracteristica.puertas}</TableCell>
                <TableCell>{caracteristica.valijas}</TableCell>
                <TableCell>{caracteristica.personas}</TableCell>
                <TableCell>{caracteristica.precio}</TableCell>
                <TableCell>{caracteristica.categoria}</TableCell>
                <TableCell>
                  {editingId === caracteristica.id ? (
                    <Button variant="contained" color="primary" onClick={() => handleSave(caracteristica.id)}>Guardar</Button>
                  ) : (
                    <>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(caracteristica.id)}>Editar</Button>
                      <Button variant="contained" color="error" onClick={() => eliminarCaracteristica(caracteristica.id)}>Eliminar</Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TablaCaracteristicas;
