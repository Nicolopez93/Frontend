import React, { useReducer } from 'react';
import { reservaReducer } from './reservaReducer';
import { ReservaContext } from './ReservaContext';
import { types } from '../types/types';

const init = () => {
  const reservas = JSON.parse(localStorage.getItem('reservas'));

  return {
    reservas: reservas || [],
    fechaSeleccionada: { fechaRetiro: '', fechaDevolucion: '' }
  };
};

export const ReservaProvider = ({ children }) => {
  const [reservaState, dispatch] = useReducer(reservaReducer, {}, init);

  const setFechaSeleccionada = (fecha) => {
    const formattedFechaRetiro = formatDate(fecha.fechaRetiro);
    const formattedFechaDevolucion = formatDate(fecha.fechaDevolucion);

    dispatch({
      type: 'setFechaSeleccionada',
      payload: { fechaRetiro: formattedFechaRetiro, fechaDevolucion: formattedFechaDevolucion },
    });
  };

  const addReserva = (reserva) => {
    dispatch({
      type: types.reservaAdd,
      payload: reserva,
    });

    const { reservas } = reservaState;
    localStorage.setItem('reservas', JSON.stringify(reservas));
  };

  const deleteReserva = (id) => {
    dispatch({
      type: types.reservaDelete,
      payload: id,
    });

    const { reservas } = reservaState;
    localStorage.setItem('reservas', JSON.stringify(reservas));
  };

  const updateReserva = (reserva) => {
    dispatch({
      type: types.reservaUpdate,
      payload: reserva,
    });

    const { reservas } = reservaState;
    localStorage.setItem('reservas', JSON.stringify(reservas));
  };

  const loadReservas = (reservas) => {
    dispatch({
      type: types.reservaLoad,
      payload: reservas,
    });
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };

  return (
    <ReservaContext.Provider
      value={{
        ...reservaState,
        addReserva,
        deleteReserva,
        updateReserva,
        loadReservas,
        setFechaSeleccionada,
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
};

