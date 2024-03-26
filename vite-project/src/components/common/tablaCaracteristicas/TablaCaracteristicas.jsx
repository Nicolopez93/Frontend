import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const TablaCaracteristicas = () => {
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [editingIds, setEditingIds] = useState({});
  const [editFields, setEditFields] = useState({});
  const [newCaracteristica, setNewCaracteristica] = useState({});

  useEffect(() => {
    fetchCaracteristicas();
  }, []);

  const fetchCaracteristicas = () => {
    axios.get('http://localhost:3000/caracteristicas')
      .then(response => setCaracteristicas(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleEdit = (id, caracteristica) => {
    setEditingIds({...editingIds, [id]: true});
    setEditFields({ ...editFields, [id]: { ...caracteristica }});
  };

  const handleSave = (id) => {
    axios.patch(`http://localhost:3000/caracteristicas/${id}`, editFields[id])
      .then(() => {
        setEditingIds({...editingIds, [id]: false});
        fetchCaracteristicas();
      })
      .catch(err => console.error(err));
  };

  const handleInputChange = (e, id, key) => {
    setEditFields({
      ...editFields,
      [id]: {
        ...editFields[id],
        [key]: e.target.value
      }
    });
  };

  const eliminarCaracteristica = (id) => {
    const confirmarEliminar = window.confirm("¿Estás seguro que deseas eliminar esta característica?");
    if (confirmarEliminar) {
      axios.delete(`http://localhost:3000/caracteristicas/${id}`)
        .then(() => {
          setCaracteristicas(caracteristicas.filter(caracteristica => caracteristica.id !== id));
        })
        .catch(err => console.error(err));
    }
  };
  

  const handleNewCaracteristicaChange = (e, key) => {
    setNewCaracteristica({ ...newCaracteristica, [key]: e.target.value });
  };

  const agregarNuevaCaracteristica = () => {
    axios.post('http://localhost:3000/caracteristicas', newCaracteristica)
      .then(() => {
        setNewCaracteristica({});
        fetchCaracteristicas();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Icono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {caracteristicas.map((caracteristica) => (
              <TableRow key={caracteristica.id}>
                <TableCell>
                  {editingIds[caracteristica.id] ? (
                    <TextField
                      value={editFields[caracteristica.id]?.nombre || caracteristica.nombre}
                      onChange={(e) => handleInputChange(e, caracteristica.id, 'nombre')}
                    />
                  ) : (
                    caracteristica.nombre
                  )}
                </TableCell>
                <TableCell>
                  {editingIds[caracteristica.id] ? (
                    <TextField
                      value={editFields[caracteristica.id]?.icono || caracteristica.icono}
                      onChange={(e) => handleInputChange(e, caracteristica.id, 'icono')}
                    />
                  ) : (
                    caracteristica.icono
                  )}
                </TableCell>
                <TableCell>
                  {editingIds[caracteristica.id] ? (
                    <Button variant="contained" color="primary" onClick={() => handleSave(caracteristica.id)}>Guardar</Button>
                  ) : (
                    <>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(caracteristica.id, caracteristica)}>Editar</Button>
                      <Button variant="contained" color="error" onClick={() => eliminarCaracteristica(caracteristica.id)}>Eliminar</Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  label="Nombre"
                  value={newCaracteristica.nombre || ''}
                  onChange={(e) => handleNewCaracteristicaChange(e, 'nombre')}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Icono"
                  value={newCaracteristica.icono || ''}
                  onChange={(e) => handleNewCaracteristicaChange(e, 'icono')}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={agregarNuevaCaracteristica}>Agregar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TablaCaracteristicas;
