import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import { Link } from 'react-router-dom';
import './flotaDeAuto.css';
const FlotaDeAutos = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/autos")
      .then(response => {
        const autosCategoriaAuto = response.data.filter(auto => auto.categoria === "auto");
        setAutos(autosCategoriaAuto);
      })
      .catch(error => {
        console.error("Error fetching autos:", error);
      });
  }, []);

  return (
    <>
    <section class = "detalle-section">
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

export default FlotaDeAutos;
