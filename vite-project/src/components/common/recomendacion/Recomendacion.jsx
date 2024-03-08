import React from 'react';
import Card from '../card/Card';
import './recomendacion.css';
const Recomendacion = ({ autos, handleLike }) => {
  return (
    <div className="recomendacion-container">
      <h2 className="recomendacion-title">Recomendaciones</h2>
      <div className="recomendacion-cards">
        <Card auto={autos[0]} className="recomendacion-card" handleLike={handleLike} />
        <Card auto={autos[1]} className="recomendacion-card" handleLike={handleLike} />
      </div>
    </div>
  );
};

export default Recomendacion;

