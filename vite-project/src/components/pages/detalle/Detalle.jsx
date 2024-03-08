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
    axios.get(`http://localhost:3000/autos/${id}`)
      .then(response => {
        setAuto(response.data);
      })
      .catch(error => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="detalle-section">
        <Link className="detalle-volver-btn" to="/home">Volver</Link>
        {auto ? (
          <div className="detalle-content">
            <div className="detalle-info-container">
              <h2 className="detalle-title">{auto.nombre}</h2>
              <button className="detalle-btn">Ver Galería</button>
              <button className="detalle-btn">Ver características</button>
            </div>
            <div className="detalle-img-container">
              <img className="detalle-img" src={auto.imgUrl} alt={auto.nombre} />
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Detalle;
