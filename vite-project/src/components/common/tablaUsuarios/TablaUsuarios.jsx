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

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isUsuarioDeleted, setIsUsuarioDeleted] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    fetchUsuarios();
  }, [isUsuarioDeleted]);

  const fetchUsuarios = () => {
    axios.get('http://localhost:8080/usuario')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const editingUsuario = usuarios.find(usuario => usuario.id === id);
    setEditFields(editingUsuario);
  };

  const handleSave = (id) => {
    axios.put('http://localhost:8080/usuario', editFields) 
      .then(res => {
        setIsUsuarioDeleted(!isUsuarioDeleted);
        setEditingId(null);
      })
      .catch(err => console.error(err));
  };

  const handleInputChange = (e, key) => {
    setEditFields({ ...editFields, [key]: e.target.value });
  };

  const eliminarUsuario = (id) => {
    axios.delete(`http://localhost:8080/usuario/${id}`)
      .then(res => setIsUsuarioDeleted(true))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map(usuario => (
              <TableRow key={usuario.id}>
                <TableCell component="th" scope="row">
                  {editingId === usuario.id ? (
                    <input
                      type="text"
                      value={editFields.nombre}
                      onChange={(e) => handleInputChange(e, 'nombre')}
                    />
                  ) : (
                    usuario.nombre
                  )}
                </TableCell>
                <TableCell>
                  {editingId === usuario.id ? (
                    <input
                      type="text"
                      value={editFields.usuarioRol}
                      onChange={(e) => handleInputChange(e, 'usuarioRol')}
                    />
                  ) : (
                    usuario.usuarioRol
                  )}
                </TableCell>
                <TableCell>
                  {editingId === usuario.id ? (
                    <Button variant="contained" color="primary" onClick={() => handleSave(usuario.id)}>Guardar</Button>
                  ) : (
                    <>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(usuario.id)}>Editar</Button>
                      <Button variant="contained" color="error" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</Button>
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
};

export default TablaUsuarios;
