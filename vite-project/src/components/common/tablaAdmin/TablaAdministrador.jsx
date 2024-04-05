import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

const TablaAdministrador = () => {
  const [autos, setAutos] = useState([]);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchAutos();
  }, [isProductDeleted]);

  useEffect(() => {
    if (isProductDeleted) {
      fetchAutos();
    }
  }, [isProductDeleted]);

  const fetchAutos = () => {
    fetch("http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/autos")
      .then((response) => response.json())
      .then((data) => setAutos(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const editingAuto = autos.find((auto) => auto.id === id);
    setEditFields(editingAuto);
    setSelectedCategory(editingAuto.categoria.nombre);
  };

  const handleSave = async (editFields) => {
    console.log(editFields);
    try {
      const url = "http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/autos/actualizar";

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFields),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el auto");
      }

      const data = await response.text();
      console.log("Datos actualizados:", data);
      if (data.includes("actualizado")) {
        fetchAutos();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };

  const categoriaSelected = (nombre) => {
    if (nombre === "Auto") {
      return { id: 1, nombre: "Auto" };
    } else if (nombre === "Camioneta") {
      return { id: 2, nombre: "Camioneta" };
    }
  };

  const handleInputChange = (e, key) => {
    const value = e.target.value;
    if (key === "categoria") {
      setEditFields((prevFields) => ({
        ...prevFields,
        categoria: categoriaSelected(value),
      }));
    } else {
      setEditFields((prevFields) => ({
        ...prevFields,
        [key]: value,
      }));
    }
    setSelectedCategory(value);
  };

  const eliminarProducto = (id) => {
    axios
      .delete(`http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/autos/${id}`)
      .then((res) => setIsProductDeleted(true))
      .catch((err) => console.error(err));
  };

  return (
    <div className="pb-28">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Modelo del Vehiculo</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell align="right">Tipo De Caja</TableCell>
              <TableCell align="right">Personas</TableCell>
              <TableCell align="right">Valijas</TableCell>
              <TableCell align="right">Puertas</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {autos.map((auto) => (
              <TableRow key={auto.id}>
                <TableCell>{auto.id}</TableCell>
                <TableCell component="th" scope="row">
                  {editingId === auto.id ? (
                    <input
                      type="text"
                      value={editFields.modelo}
                      onChange={(e) => handleInputChange(e, "modelo")}
                    />
                  ) : (
                    auto.modelo
                  )}
                </TableCell>
                <TableCell>{auto.marca}</TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <input
                      type="text"
                      value={editFields.tipoCaja}
                      onChange={(e) => handleInputChange(e, "tipoCaja")}
                    />
                  ) : (
                    auto.tipoCaja
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <input
                      type="number"
                      value={editFields.personas}
                      onChange={(e) => handleInputChange(e, "personas")}
                    />
                  ) : (
                    auto.personas
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <input
                      type="number"
                      value={editFields.valijas}
                      onChange={(e) => handleInputChange(e, "valijas")}
                    />
                  ) : (
                    auto.valijas
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <input
                      type="number"
                      value={editFields.puertas}
                      onChange={(e) => handleInputChange(e, "puertas")}
                    />
                  ) : (
                    auto.puertas
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <input
                      type="number"
                      value={editFields.precio}
                      onChange={(e) => handleInputChange(e, "precio")}
                    />
                  ) : (
                    auto.precio
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingId === auto.id ? (
                    <input
                      type="text"
                      value={editFields.categoria?.nombre}
                      onChange={(e) => handleInputChange(e, "categoria")}
                    />
                  ) : (
                    auto.categoria?.nombre
                  )}
                </TableCell>

                <TableCell align="right">
                  {editingId === auto.id ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave(editFields)}
                    >
                      Guardar
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(auto.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => eliminarProducto(auto.id)}
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
};

export default TablaAdministrador;
