import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import Navbar from '../../common/navbar/Navbar';
import './flotaDeAuto.css';
const FlotaDeAutos = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/autos")
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
      <div><Navbar/></div>
      <div className="container-auto">
        {autos.map(auto => (
          <Card key={auto.id} auto={auto} />
        ))}
      </div>
    </>
  );
};

export default FlotaDeAutos;
