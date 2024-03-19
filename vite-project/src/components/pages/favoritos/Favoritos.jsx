import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';

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
    <div>
      <h1>Favoritos</h1>
      <div>
        {autos.map((auto) => (
          <Card key={auto.id} auto={auto}/>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
