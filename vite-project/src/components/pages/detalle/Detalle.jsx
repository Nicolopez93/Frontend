import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./detalle.css";
import Navbar from "../../common/navbar/Navbar";
import Footer from "../../common/footer/Footer";

const Detalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/autos/${id}`)
      .then(response => {
        const data = response.data;
        setAuto(data);
      })
      .catch(error => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);

  return (
    <>
    <Navbar/>
    <section className="detalle-section">
      <Link className="detalle-volver-btn" to="/home">Volver</Link>
      <div className="detalle-container">
        {auto ? (
          <div className="detalle-card">
            <img className="detalle-img" src={auto.imgUrl} alt={auto.nombre} />
            <h2 className="detalle-title">{auto.nombre}</h2>
            <p className="detalle-info">Puertas: {auto.puertas}</p>
            <p className="detalle-info">Valijas: {auto.valijas}</p>
            <p className="detalle-info">Personas: {auto.personas}</p>
            <p className="detalle-price">Precio: ${auto.precio}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Detalle;

