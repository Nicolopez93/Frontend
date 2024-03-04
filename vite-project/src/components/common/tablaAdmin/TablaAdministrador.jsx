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

  useEffect(() => {
    fetch('http://localhost:5000/autos')
      .then(response => response.json())
      .then(data => setAutos(data))
      .catch(error => console.error('Error fetching data:', error));
      
      setIsProductDeleted(false)
  }, [isProductDeleted]);

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
              <TableRow key={auto.nombre}>
                <TableCell component="th" scope="row">
                  {auto.nombre}
                </TableCell>
                <TableCell align="right">{auto.id}</TableCell>
                <TableCell align="right">{auto.categoria}</TableCell>
                <TableCell align="right">{auto.personas}</TableCell>
                <TableCell align="right">{auto.valijas}</TableCell>
                <TableCell align="right">{auto.puertas}</TableCell>
                <TableCell align="right">{auto.precio}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="error" onClick={() => eliminarProducto(auto.id)}>Eliminar</Button>
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
