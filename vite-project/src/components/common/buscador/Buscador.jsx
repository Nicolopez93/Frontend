import React, { useState, useEffect } from "react";

const Buscador = ({ onSearchResults, onFormSubmit, onBuscar }) => {
  const [formData, setFormData] = useState({
    fechaRetiro: "",
    fechaDevolucion: "",
  });
  const [autos, setAutos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBuscar = (event) => {
    const searchText = event.target.value.toLowerCase();
    onBuscar(searchText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
    fetchAutos(formData);
  };

  const fetchAuto = () => {
    fetch(`http://localhost:8080/autos`)
      .then((res) => res.json())
      .then((data) => {
        setAutos(data);
      })
      .catch((error) => {
        console.error("Error fetching autos:", error);
      });
  };
  useEffect(() => {
    fetchAuto();
  }, []);

  console.log(autos);
  const fetchAutos = (formData) => {
    fetch(`http://localhost:8080/autos`)
      .then((res) => res.json())
      .then((data) => {
        onSearchResults(data);
      })
      .catch((error) => {
        console.error("Error fetching autos:", error);
      });
  };

  const { fechaDevolucion, fechaRetiro } = formData;

  return (
    <div className="flex-col flex md:flex-row justify-center items-center gap-8  h-[calc(12vh-10px)]">
      <input
        name="buscar"
        type="text"
        placeholder="Buscar por auto"
        onChange={(event) => handleBuscar(event)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2 md:mb-0"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:flex-row md:space-x-4"
      >
        <input
          name="fechaRetiro"
          required
          type="date"
          placeholder="Fecha de Retiro"
          value={fechaRetiro}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2 md:mb-0"
        />
        <input
          name="fechaDevolucion"
          required
          type="date"
          placeholder="Fecha de Devolución"
          value={fechaDevolucion}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2 md:mb-0"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;
