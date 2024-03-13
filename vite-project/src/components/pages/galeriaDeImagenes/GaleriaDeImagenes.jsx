import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./galeriaDeImagenes.css";
const GaleriaDeImagenes = () => {

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
 console.log(auto);
  return (
    
    <div className="galeria-container">
        <img src={auto?.imgUrl} alt={auto?.nombre} style={{ width: "50%" }} />
        
    <div className="galeria-img-container">
        {auto ? (
          <div>
           
            {auto?.imagenes.map((auto, id) => (
              <img key={id} src={auto} alt={auto}  style={{ width: "40vh", height: "30vh" , margin: "10px"}}/>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        </div>
    </div>
  );
};

export default GaleriaDeImagenes;
