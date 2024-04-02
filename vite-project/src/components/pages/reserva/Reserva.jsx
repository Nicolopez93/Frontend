import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../auth/context/AuthContext";
import Button from "../../common/button/Button";
import { ReservaContext } from "../../../context/ReservaContext";
export const Reserva = () => {
  const [reservas, setReservas] = useState([]);
  const { deleteReserva} = useContext(ReservaContext)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    const fechtReservas = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reservas");
        const data = response.data;
        const userReservas = data.filter((reservas) => reservas.usuario?.id === user?.id);
        setReservas(userReservas);
        
      } catch (error) {
        console.error("Error fetching reservas:", error);
      }
    };
    fechtReservas();
  }, []);

  const calcularDias = (reservas) => {
    let totalDias = 0;
  
    reservas.forEach((res) => {
      const fechaRetiro = res?.fechaInicio;
      const fechaDevolucion = res?.fechaFin;
      
      const retiro = new Date(fechaRetiro);
      const devolucion = new Date(fechaDevolucion);
  
      const diasDif = Math.abs(devolucion - retiro);
      const dias = Math.ceil(diasDif / (1000 * 60 * 60 * 24));
  
      totalDias += dias;
    });
  
    return totalDias;
  };
  
  const calcularPrecio = (reservas) => {
    const dias = Number(calcularDias(reservas)) ;

    return  reservas[0]?.auto.precio * dias;
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/reservas/${id}`);
      setReservas(reservas.filter((reserva) => reserva.id !== id));
      deleteReserva(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  }

  return (
    <main className="bg-[#ffd4ba]  min-h-[calc(100vh-10rem)] ">
      <div className="flex flex-col justify-center mx-[4vw] pt-16 ">
        <h4 className="text-[1.35rem] font-semibold mb-2">Fecha de reserva</h4>
        <div className="flex gap-20 items-center  ">
          {reservas.map((reserva, index) => (
            <div
              key={index}
              className="flex justify-between gap-4 p-4 max-w-[35rem] bg-white rounded-lg shadow-md"
            >
              <p className="text-[#0C4D9C] font-semibold">
                Fecha de retiro: {reserva?.fechaInicio}
              </p>
              <span> → </span>
              <p className="text-[#0C4D9C] font-semibold">
                Fecha de devolución: {reserva?.fechaFin}
              </p>
            </div>
          ))}
          <Button onClick={() => handleDelete(reservas[0].id)}>Cambiar reserva</Button>
        </div>
        <h5 className="text-[1.25rem] font-semibold my-4">
          Detalle de la reserva
        </h5>
        {reservas.map((res, index) => (
          <article
            key={index}
            className="flex justify-between items-center gap-4 p-4  bg-white rounded-lg shadow-md mb-4 w-3/4"
          >
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[#0C4D9C] font-semibold text-xl">
                  <span className="font-semibold">Vehículo: </span>
                  <span> {res?.auto.marca} {res?.auto.modelo}</span>
                </p>
              </div>
              <p className="text-[#0C4D9C] font-semibold text-xl">
                Cantidad de puertas: <span> {res?.auto.puertas} </span>
              </p>
              <p className="text-[#0C4D9C] font-semibold text-xl">
                Pasajeros: <span> {res?.auto.personas} </span>
              </p>
              <p className="text-[#0C4D9C] font-semibold text-xl">
                Valijas: <span> {res?.auto.valijas} </span>
              </p>
              <p className="text-[#0C4D9C] font-semibold text-xl">
                <span className="font-semibold">Transmisión: </span>
                <span>{res?.auto.tipoCaja}</span>
              </p>
              <p className="text-[#0C4D9C] font-semibold text-xl">
                <span className="font-semibold">Precio: </span>
                <span>$ { calcularPrecio(reservas)}</span>
              </p>
            </div>
            <div className="basis-1/2">
              {reservas.map((reserva, index) => (
                <div className="w-[30rem]">
                  <img
                    key={index}
                    src={reserva?.auto.imgUrl}
                    alt={reserva?.auto.nombre}
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
