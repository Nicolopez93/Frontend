import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";
import "../detalle/detalle.css";

const Caracteristicas = () => {

    const { id } = useParams();
    const [auto, setAuto] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/autos/${id}`)
            .then((response) => {
                setAuto(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    [id]);
    console.log(auto);

  return (
    <>
    <section className="detalle-section">
    <Link className="detalle-volver-btn" to={`/detalle/${auto?.id}`}>Volver</Link>
    {auto ? (
      <div className="detalle-content">
        <div className="detalle-info-container">
          <h2 className="detalle-title">{auto?.nombre}</h2>
          <p className="detalle-p">Puertas : {auto?.puertas}</p>
          <p className="detalle-p">Valijas : {auto?.valijas}</p>
          <p className="detalle-p">Personas : {auto?.personas}</p>
          <p className="detalle-p">Precio : ${auto?.precio}</p>
        </div>
        <div className="detalle-img-container">
          <img className="detalle-img" src={auto?.imgUrl} alt={auto?.nombre} />
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </section>
    </>
  );
};
    
export default Caracteristicas
