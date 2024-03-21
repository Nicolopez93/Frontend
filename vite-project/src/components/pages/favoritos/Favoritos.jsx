import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import { Link } from 'react-router-dom';
import './favoritos.css';

const Favoritos = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/autos')
      .then((response) => {
        const autosFavoritos = response.data.filter((auto) => auto.isLiked);
        setAutos(autosFavoritos);
      })
      .catch((error) => {
        console.error('Error al obtener autos:', error);
      });
  }, []);

  return (
    <>
    <section className="detalle-section">
    <Link className="detalle-volver-btn" to="/">Volver</Link>
    <h2 className="detalle-title">Tus Vehiculos Favoritos</h2>
      <div className='fav-container'>
        {autos.map((auto) => (
          <Card key={auto.id} auto={auto}/>
        ))}
      </div>
    </section>
    </>
  );
};

export default Favoritos;
