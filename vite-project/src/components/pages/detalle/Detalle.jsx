import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./detalle.css";

const Detalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/autos/${id}`)
      .then(response => {
        const data = response.data;
        setAuto(data);
      })
      .catch(error => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);

  return (
    <section className="container">
      <Link className="volver-btn" to="/home">Volver</Link>
      <div className="detalle-container">
        {auto ? (
          <div className="card-container">
            <img src={auto.imgUrl} alt={auto.nombre} />
            <h2>{auto.nombre}</h2>
            <p>Puertas: {auto.puertas}</p>
            <p>Valijas: {auto.valijas}</p>
            <p>Personas: {auto.personas}</p>
            <p className="price">Precio: ${auto.precio}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </section>
  );
};

export default Detalle;
