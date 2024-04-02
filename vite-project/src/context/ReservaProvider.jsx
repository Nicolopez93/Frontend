import React, { useReducer, useEffect } from 'react'
import { reservaReducer } from './reservaReducer'
import { ReservaContext } from './ReservaContext'
import { types } from '../types/types'

const init = () => {
  const reservas = JSON.parse(localStorage.getItem('reservas'))

  return {
    reservas: reservas || [],
    fechaSeleccionada: { fechaRetiro: '', fechaDevolucion: '' },
  }
}

export const ReservaProvider = ({ children }) => {
  const [reservaState, dispatch] = useReducer(reservaReducer, {}, init)

 
  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservaState.reservas))
  }, [reservaState.reservas])

  const setFechaSeleccionada = (fecha) => {
    const formattedFechaRetiro = formatDate(fecha?.fechaRetiro)
    const formattedFechaDevolucion = formatDate(fecha?.fechaDevolucion)

    dispatch({
      type: types.updateFechaSeleccionada,
      payload: {
        fechaRetiro: formattedFechaRetiro,
        fechaDevolucion: formattedFechaDevolucion,
      },
    })

    localStorage.setItem(
      'fechaReserva',
      JSON.stringify({
        fechaRetiro: formattedFechaRetiro,
        fechaDevolucion: formattedFechaDevolucion,
      })
    )
  }

  const addReserva = (reserva) => {
    dispatch({
      type: types.reservaAdd,
      payload: reserva,
    })
  }

  const deleteReserva = (id) => {
    dispatch({
      type: types.reservaDelete,
      payload: id,
    })
  }

  const updateReserva = (reserva) => {
    dispatch({
      type: types.reservaUpdate,
      payload: reserva,
    })
  }

  const loadReservas = (reservas) => {
    dispatch({
      type: types.reservaLoad,
      payload: reservas,
    })
  }

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const day = String(dateObject.getDate()).padStart(2, '0'); // Asegura que haya dos dígitos para el día
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Asegura que haya dos dígitos para el mes
    const year = dateObject.getFullYear();
  
    return `${year}-${month}-${day}`;
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
      }}>
      {children}
    </ReservaContext.Provider>
  )
}

export default ReservaProvider
