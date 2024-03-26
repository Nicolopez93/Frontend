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
const [editFields, setEditFields] = useState({});
const [newCategoria, setNewCategoria] = useState('');

useEffect(() => {
    fetchCategorias();
}, []);

const fetchCategorias = () => {
    axios.get('http://localhost:3000/categorias')
    .then(response => setCategorias(response.data))
    .catch(error => console.error('Error fetching data:', error));
};

const handleEdit = (id, categoria) => {
    setEditingId(id);
    setEditFields({ id, categoria });
};

const handleSave = (id) => {
    axios.patch(`http://localhost:3000/categorias/${id}`, editFields)
    .then(() => {
        setEditingId(null);
        fetchCategorias();
    })
    .catch(err => console.error(err));
};

const handleInputChange = (e, key) => {
    setEditFields({ ...editFields, [key]: e.target.value });
};

const eliminarCategoria = (id) => {
    axios.delete(`http://localhost:3000/categorias/${id}`)
    .then(() => {
        setCategorias(categorias.filter(cat => cat.id !== id));
    })
    .catch(err => console.error(err));
};
const agregarCategoria = () => {
    const nuevoId = categorias.length > 0 ? `${categorias[categorias.length - 1].id + 1}` : "1"; // Convertir a string y agregar comillas
    const nuevaCategoria = { id: nuevoId, nombre: newCategoria };

    axios.post('http://localhost:3000/categorias', nuevaCategoria)
    .then(() => {
        setNewCategoria('');
        fetchCategorias();
    })
    .catch(err => console.error(err));
};

return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto' }}>
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Categoría</TableCell>  
            <TableCell>Acciones</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {categorias && categorias.map(categoria => (
            <TableRow key={categoria.id}>

                <TableCell>
                {editingId === categoria.id ? (
                    <TextField
                    fullWidth
                    value={editFields.nombre}
                    onChange={(e) => handleInputChange(e, 'nombre')}
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
              <TableCell colSpan={2}>
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