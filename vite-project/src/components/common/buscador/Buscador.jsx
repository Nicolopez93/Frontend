import React, { useContext, useState } from 'react';
import imgAuto from '../../../assets/renegade-jelly-2023-576x340-1-1.png';
import './buscador.css';
import { ReservaContext } from '../../../context/ReservaContext'

const Buscador = ({ onSearchResults, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fechaRetiro: '',
    fechaDevolucion: '',
  });

  const { setFechaSeleccionada } = useContext(ReservaContext);

  console.log('formData:', formData)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData); 
    setFechaSeleccionada(formData) 
    fetchAutos(formData); 
  };

  const fetchAutos = (formData) => {
    fetch(`http://localhost:3000/autos`)
      .then((res) => res.json())
      .then((data) => {
        onSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching autos:', error);
      });
  };

  const { fechaDevolucion, fechaRetiro } = formData;

  return (
    <div className='buscador-container'>
      <form onSubmit={handleSubmit}>
        <div className='select-container'>
          <input
            name='fechaRetiro'
            required
            type='date'
            placeholder='Fecha de Retiro'
            value={fechaRetiro}
            onChange={handleChange}
          />
          <input
            name='fechaDevolucion'
            required
            type='date'
            placeholder='Fecha de Devolución'
            value={fechaDevolucion}
            onChange={handleChange}
          />
          <button type='submit' className='buscar-autos-button'>
            Buscar
          </button>
        </div>
      </form>
      <img src={imgAuto} alt='auto' className='auto-img' />
    </div>
  );
};

export default Buscador;
