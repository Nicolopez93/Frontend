import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa axios
import Card from '../card/Card';
import './recomendacion.css';

const Recomendacion = () => { // Elimina los paréntesis vacíos del componente

  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/autos")
      .then(response => {
        setAutos(response.data);
      })
      .catch(error => {
        console.error("Error fetching autos:", error);
      });
  }, []);

  return (
    <div className="recomendacion-container">
      <h2 className="recomendacion-title">Recomendaciones</h2>
      <div className="recomendacion-cards">
        {autos.slice(0, 2).map(auto => (
          <Card key={auto.id} auto={auto} className="recomendacion-card" />
        ))}
      </div>
    </div>
  );
};

export default Recomendacion;
