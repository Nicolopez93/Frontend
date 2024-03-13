import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./caracteristicas.css";

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
    <div className="caracteristicas-container">
        <img src={auto?.imgUrl} alt={auto?.nombre} style={{ width: "50%" }} />
        {auto ? (
          <div className="caracteristicas-info">
            <h1>{auto.nombre}</h1>
            <p>Puertas : {auto.puertas}</p>
            <p>Valijas : {auto.valijas}</p>
            <p>Personas : {auto.personas}</p>
            <p>Precio : ${auto.precio}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default Caracteristicas
