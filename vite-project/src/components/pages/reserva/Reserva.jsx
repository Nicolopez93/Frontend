import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../auth/context/AuthContext";
import Button from "../../common/button/Button";
import { ReservaContext } from "../../../context/ReservaContext";

export const Reserva = () => {
  const [reservas, setReservas] = useState([]);
  const { deleteReserva } = useContext(ReservaContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmReservation, setConfirmReservation] = useState(false);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reservas");
        const data = response.data;
        const userReservas = data.filter(
          (reserva) => reserva.usuario?.id === user?.id
        );
        setReservas(userReservas);
      } catch (error) {
        console.error("Error fetching reservas:", error);
      }
    };
    fetchReservas();
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
    const dias = Number(calcularDias(reservas));

    return reservas[0]?.auto.precio * dias;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/reservas/${id}`);
      setReservas(reservas.filter((reserva) => reserva.id !== id));
      deleteReserva(id);
      openModal();
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (confirmReservation) {
      console.log("Reserva confirmada");
      closeModal();
      navigate("/");
    } else {
      console.log("Reserva rechazada");
      closeModal();
    }
  }, [confirmReservation]);

  return (
    <main className="bg-[#ffd4ba] min-h-[calc(100vh-10rem)]">
      <div className="flex flex-col justify-center mx-[4vw] pt-16">
        <h4 className="text-[1.35rem] font-semibold mb-2">Fecha de reserva</h4>
        <div className="flex gap-20 items-center">
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
          <Button onClick={() => handleDelete(reservas[0].id)}>
            Cambiar reserva
          </Button>
          <Button onClick={() => openModal()}>Confirmar Reserva</Button>
        </div>
        <h5 className="text-[1.25rem] font-semibold my-4">
          Detalle de la reserva
        </h5>
        {reservas.map((res, index) => (
          <article
            key={index}
            className="flex justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4 w-3/4"
          >
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[#0C4D9C] font-semibold text-xl">
                  <span className="font-semibold">Vehículo: </span>
                  <span>
                    {" "}
                    {res?.auto.marca} {res?.auto.modelo}
                  </span>
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
                <span>$ {calcularPrecio(reservas)}</span>
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
      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 text-gray-900 text-center font-bold" id="modal-headline" >
                      ¿Confirmas la reserva?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
                <Button onClick={() => setConfirmReservation(true)} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Aceptar
                </Button>
                <Button onClick={() => closeModal()} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Rechazar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
