import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";
import "./detalle.css";


const Detalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/autos")
      .then(response => {
        const data = response.data;
        const prodAuto = data.find((auto) => auto.id === parseInt(id));
        setAuto(prodAuto);
      })
      .catch(error => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);

  return (
    <section className="container">
      <Link 
        className="volver-btn"
        to="/home">Volver
      </Link>
      <div className="detalle-container">
      <div className="card-container">
        <img src={auto?.imgUrl} alt={auto?.nombre} />
        <h2>{auto?.nombre}</h2>
        <p>Puertas: {auto?.puertas}</p>
        <p>Valijas: {auto?.valijas}</p>
        <p>Personas: {auto?.personas}</p>
        <p className="price">Precio: ${auto?.precio}</p>
      </div>
    </div>
  </section>
  );
};

export default Detalle;