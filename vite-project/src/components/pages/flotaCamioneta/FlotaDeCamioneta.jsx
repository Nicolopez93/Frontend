import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import { Link } from 'react-router-dom';
import './flotaDeCamioneta.css';

const FlotaDeCamioneta = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/categoria/buscar/2')
      .then(response => {
        if (response.data && response.data.autos) {
          setAutos(response.data.autos);
        } else {
          console.error("No se encontraron autos en la categoría especificada.");
        }
      })
      .catch(error => {
        console.error("Error fetching autos:", error);
      });
  }, []);

  return (
    <>
      <section className="detalle-section">
        <Link className="detalle-volver-btn" to="/">Volver</Link>
        <div className="container-auto">
          {autos.map(auto => (
            <Card key={auto.id} auto={auto} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FlotaDeCamioneta;
