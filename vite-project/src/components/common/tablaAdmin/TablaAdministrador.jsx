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

const TablaAdministrador = () => {
  const [autos, setAutos] = useState([]);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    fetchAutos();
  }, [isProductDeleted]);

  const fetchAutos = () => {
    fetch('http://localhost:5000/autos')
      .then(response => response.json())
      .then(data => setAutos(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const editingAuto = autos.find(auto => auto.id === id);
    setEditFields(editingAuto);
  };

  const handleSave = (id) => {
    axios.patch(`http://localhost:5000/autos/${id}`, editFields)
      .then(res => {
        setEditFields(res.data);
        setIsProductDeleted(!isProductDeleted); // Actualiza el estado para desencadenar la recarga de datos
      })
      .catch(err => console.error(err));
    console.log('Guardar cambios del auto con ID:', id);
    setEditingId(null);
    fetchAutos(); // Actualiza los datos después de guardar
  };

  const handleInputChange = (e, key) => {
    setEditFields({ ...editFields, [key]: e.target.value });
  };

  const eliminarProducto = (id) => {
    axios.delete(`http://localhost:5000/autos/${id}`)
      .then(res => setIsProductDeleted(true))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Vehiculo</TableCell>
              <TableCell align="right">ID </TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Personas</TableCell>
              <TableCell align="right">Valijas</TableCell>
              <TableCell align="right">Puertas</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {autos.map(auto => (
              <TableRow key={auto.id}>
                <TableCell component="th" scope="row">
                  {editingId === auto.id ? (
                    <input
                      type="text"
                      value={editFields.nombre}
                      onChange={(e) => handleInputChange(e, 'nombre')}
                    />
                  ) : (
                    auto.nombre
                  )}
                </TableCell>
                <TableCell align="right">{auto.id}</TableCell>
                <TableCell align="right">{editingId === auto.id ? (
                  <input
                    type="text"
                    value={editFields.categoria}
                    onChange={(e) => handleInputChange(e, 'categoria')}
                  />
                ) : (
                  auto.categoria
                )}</TableCell>
                <TableCell align="right">{editingId === auto.id ? (
                  <input
                    type="text"
                    value={editFields.personas}
                    onChange={(e) => handleInputChange(e, 'personas')}
                  />
                ) : (
                  auto.personas
                )}</TableCell>
                <TableCell align="right">{editingId === auto.id ? (
                  <input
                    type="text"
                    value={editFields.valijas}
                    onChange={(e) => handleInputChange(e, 'valijas')}
                  />
                ) : (
                  auto.valijas
                )}</TableCell>
                <TableCell align="right">{editingId === auto.id ? (
                  <input
                    type="text"
                    value={editFields.puertas}
                    onChange={(e) => handleInputChange(e, 'puertas')}
                  />
                ) : (
                  auto.puertas
                )}</TableCell>
                <TableCell align="right">{editingId === auto.id ? (
                  <input
                    type="text"
                    value={editFields.precio}
                    onChange={(e) => handleInputChange(e, 'precio')}
                  />
                ) : (
                  auto.precio
                )}</TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <Button variant="contained" color="primary" onClick={() => handleSave(auto.id)}>Guardar</Button>
                  ) : (
                    <>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(auto.id)}>Editar</Button>
                      <Button variant="contained" color="error" onClick={() => eliminarProducto(auto.id)}>Eliminar</Button>
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

export default TablaAdministrador;
