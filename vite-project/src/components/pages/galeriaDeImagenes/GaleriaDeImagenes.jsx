import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "../../common/button/Button";

const GaleriaDeImagenes = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/autos/buscar/${id}`)
      .then((response) => {
        setAuto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);
  console.log(auto);

  return (
    <>
      <div className=" bg-[#f5f5f5] min-h-[calc(100vh-110px)] ">
        <div className='mx-[4vw] pt-8 '>
        <Link to={`/detalle/${auto?.id}`}>
          <Button>Volver</Button>
        </Link>
        <div className="flex justify-between items-center">
          <img src={auto?.imgUrl} alt={auto?.nombre} style={{ width: "50%" }} />
          <div className="">
            {auto ? (
              <div className="flex flex-wrap">
                {auto?.imagenes.slice(0, 4).map((imagen, id) => (
                  <img
                    className="h-auto max-w-full rounded-lg"
                    key={id}
                    src={imagen.urlImg}
                    alt={`Imagen ${id}`}
                    style={{ width: "40vh", height: "30vh", margin: "10px" }}
                  />
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default GaleriaDeImagenes;
