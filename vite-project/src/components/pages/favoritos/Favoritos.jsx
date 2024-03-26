import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import { Link } from 'react-router-dom';
import './favoritos.css';

const Favoritos = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/autos')
      .then((response) => {
        setAutos(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener autos:', error);
      });
  }, []);

  const handleLike = (auto) => {
    const updatedAuto = { ...auto, isLiked: !auto.isLiked };
    axios
      .put(`http://localhost:8080/autos/${auto.id}`, updatedAuto)
      .then(() => {
        const updatedAutos = autos.map((a) => (a.id === auto.id ? updatedAuto : a));
        setAutos(updatedAutos);
      })
      .catch((error) => {
        console.error('Error al actualizar auto:', error);
      });
  };

  return (
    <>
      <section className="detalle-section">
        <Link className="detalle-volver-btn" to="/">
          Volver
        </Link>
        <h2 className="detalle-title">Tus Vehiculos Favoritos</h2>
        <div className="fav-container">
          {autos.filter((auto) => auto.isLiked).map((auto) => (
            <Card key={auto.id} auto={auto} handleLike={handleLike} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Favoritos;