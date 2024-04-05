import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReservaContext } from "../../../context/ReservaContext";
import { AuthContext } from "../../../auth/context/AuthContext";
import Button from "../../common/button/Button";

const Detalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { addReserva } = useContext(ReservaContext);

  const fechaRetiro = JSON.parse(
    localStorage.getItem("fechaReserva")
  )?.fechaRetiro;
  const fechaDevolucion = JSON.parse(
    localStorage.getItem("fechaReserva")
  )?.fechaDevolucion;

  useEffect(() => {
    axios
      .get(`http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/autos/buscar/${id}`)
      .then((response) => {
        setAuto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);

  const handleReserva = async () => {
    await addReserva({
      auto: auto,
      fecha: {
        fechaRetiro: fechaRetiro,
        fechaDevolucion: fechaDevolucion,
      },
    });

    try {
      const userReserva = {
        usuarioId: user.id,
        autoId: auto.id,
        fechaInicio: fechaRetiro,
        fechaFin: fechaDevolucion,
      };
      console.log(userReserva);

      const response = await axios.post(
        "http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/reservas",userReserva
      );

      console.log(response.data);
      navigate("/reserva");
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };

  return (
    <>
      <section className=" bg-[#f5f5f5] min-h-screen">
      <div className='mx-[4vw] pt-8 '>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
    </div>
        {auto ? (
          <div className="flex gap-20 justify-between items-center mx-[4vw] ">
            <div className="basis-1/2 flex flex-col gap-4 p-4 shadow-lg border-2 border-[#0C4D9C] rounded-xl bg-slate-200">
              <h2 className="text-2xl font-medium text-gray-900 text-center">
                {auto.marca} {auto.modelo}
              </h2>
              <div className="flex flex-col gap-4 items-center justify-center">
              <Link className="py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem] text-center rounded-lg shadow-md hover:bg-orange-600" to={`/GaleriaDeImagenes/${auto.id}`}>
                <button className="detalle-btn">Ver Galería</button>
              </Link>
              <Link className="py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem] text-center rounded-lg shadow-md hover:bg-orange-600" to={`/Caracteristicas/${auto.id}`}>
                Ver características
              </Link>
              <button className="py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem] text-center rounded-lg shadow-md hover:bg-orange-600">
                Retiro {fechaRetiro ? fechaRetiro : ""}
              </button>
              <button className="py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem] text-center rounded-lg shadow-md hover:bg-orange-600">
                Devolución {fechaDevolucion ? fechaDevolucion : ""}
              </button>
              {user ? (
                <Link to="/reserva">
                  <button
                    className="py-2 px-4 w-[15rem] bg-[#0C4D9C] my-2 text-[1.15rem] text-center rounded-lg shadow-md hover:bg-[#116fe1] text-white"
                    onClick={handleReserva}
                  >
                    Reservar
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem]">
                    Iniciar sesión
                  </button>
                </Link>
              )}
              <Link to={`/PoliticasDeUso/${auto.id}`}>Politicas de uso</Link>
            </div>
            </div>
            <div className="detalle-img-container">
              <img className="detalle-img" src={auto.imgUrl} alt={auto.marca} />
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </>
  );
};

export default Detalle;
