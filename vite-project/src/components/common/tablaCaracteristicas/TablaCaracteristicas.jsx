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
  const [autos, setAutos] = useState([]);
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [editFields, setEditFields] = useState({});
  const [isCaracteristicasDeleted, setCaracteristicasDeleted] = useState(false);

  useEffect(() => {
    fetchCaracteristicas();
  }, []);

  const fetchCaracteristicas = () => {
    axios.get('http://localhost:8080/autos')
      .then(response => {
        if (response.data.length > 0) {
          const primerAuto = response.data[0];
          const nombresCaracteristicas = Object.keys(primerAuto);
          setCaracteristicas(nombresCaracteristicas);
        }

        setAutos(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleEditarCaracteristica = (caracteristica) => {
    const index = caracteristicas.indexOf(caracteristica);
    setEditFields({ ...editFields, [index]: caracteristica });
  };

  const handleGuardarCaracteristica = (index, newValue) => {
    const nuevasCaracteristicas = [...caracteristicas];
    nuevasCaracteristicas[index] = newValue;
    setCaracteristicas(nuevasCaracteristicas);
    setEditFields({});
    // Aquí puedes realizar una solicitud para actualizar la característica en la base de datos si es necesario
  };

  const handleEliminarCaracteristica = (index) => {
    const nuevasCaracteristicas = [...caracteristicas];
    nuevasCaracteristicas.splice(index, 1);
    setCaracteristicas(nuevasCaracteristicas);
    // Aquí puedes realizar una solicitud para eliminar la característica de la base de datos si es necesario
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {caracteristicas.map((caracteristica, index) => (
              <TableRow key={index} >
                <TableCell>
                  {editFields[index] !== undefined ? (
                    <TextField
                      value={editFields[index]}
                      onChange={(e) => setEditFields({ ...editFields, [index]: e.target.value })}
                    />
                  ) : (
                    caracteristica
                  )}
                </TableCell>
                <TableCell >
                  {editFields[index] !== undefined ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleGuardarCaracteristica(index, editFields[index])}
                    >
                      Guardar
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEditarCaracteristica(caracteristica)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleEliminarCaracteristica(index)}
                      >
                        Eliminar
                      </Button>
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
