import React, { useState } from 'react';
import imgAuto from '../../../assets/renegade-jelly-2023-576x340-1-1.png'
import './buscador.css'
const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event) => {
  setSearchTerm( event.target.value)
  };
  const handleSearch = () => {
    // Llamar a la función de búsqueda pasando el término de búsqueda
    onSearch(searchTerm);
  };

  return (
    <div className="buscador-container">
       <div >
          <input type="text" placeholder="Buscar autos..." value={searchTerm} onChange={handleInputChange}/>
          <button className="buscar-autos-button" onClick={handleSearch}>Buscar</button>
        </div>
      <div className="carNow-image-container">
        <img src={imgAuto} alt='auto' className="auto-img" />
        </div>
    </div>
  )
}

export default Buscador