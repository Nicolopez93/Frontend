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

const TablaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({ nombre: '' });
  const [newCategoria, setNewCategoria] = useState('');

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = () => {
    axios.get('http://localhost:8080/categoria') // Corregir la URL de la API
      .then(response => setCategorias(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleEdit = (id, nombre) => {
    setEditingId(id);
    setEditFields({ nombre });
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8080/categoria`, { id, ...editFields }) // Corregir la URL de la API
      .then(() => {
        setEditingId(null);
        fetchCategorias();
      })
      .catch(err => console.error(err));
  };

  const handleInputChange = (e) => {
    setEditFields({ nombre: e.target.value });
  };

  const eliminarCategoria = (id) => {
    const confirmarEliminar = window.confirm("¿Estás seguro que deseas eliminar esta categoría?");
    if (confirmarEliminar) {
      axios.delete(`http://localhost:8080/categoria/${id}`) // Corregir la URL de la API
        .then(() => {
          setCategorias(categorias.filter(cat => cat.id !== id));
        })
        .catch(err => console.error(err));
    }
  };

  const agregarCategoria = () => {
    const nuevaCategoria = { nombre: newCategoria };

    axios.post('http://localhost:8080/categoria', nuevaCategoria) // Corregir la URL de la API
      .then(() => {
        setNewCategoria('');
        fetchCategorias();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Categoría</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map(categoria => (
              <TableRow key={categoria.id}>
                <TableCell>
                  {editingId === categoria.id ? (
                    <TextField
                      fullWidth
                      value={editFields.nombre}
                      onChange={handleInputChange}
                    />
                  ) : (
                    categoria.nombre
                  )}
                </TableCell>
                <TableCell>
                  {editingId === categoria.id ? (
                    <Button variant="contained" color="primary" onClick={() => handleSave(categoria.id)}>Guardar</Button>
                  ) : (
                    <>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(categoria.id, categoria.nombre)}>Editar</Button>
                      <Button variant="contained" color="error" onClick={() => eliminarCategoria(categoria.id)}>Eliminar</Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  label="Nueva Categoría"
                  value={newCategoria}
                  onChange={(e) => setNewCategoria(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={agregarCategoria}>Agregar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablaCategorias;
