import { types } from '../types/types'

export const reservaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.reservaAdd:
      const newStateAfterAdd = {
        ...state,
        reservas: [...state.reservas, action.payload],
      }
      localStorage.setItem(
        'reservas',
        JSON.stringify(newStateAfterAdd.reservas)
      )
      return newStateAfterAdd

    case types.reservaDelete:
      const newStateAfterDelete = {
        ...state,
        reservas: state.reservas.filter(
          (reserva) => reserva.id !== action.payload
        ),
      }
      localStorage.removeItem(
        'reservas',
        JSON.stringify(newStateAfterDelete.reservas)
      )
      return newStateAfterDelete

    case types.reservaUpdate:
      const newStateAfterUpdate = {
        ...state,
        reservas: state.reservas.map((reserva) =>
          reserva.id === action.payload.id ? action.payload : reserva
        ),
      }
      localStorage.setItem(
        'reservas',
        JSON.stringify(newStateAfterUpdate.reservas)
      )
      return newStateAfterUpdate

    case types.reservaLoad:
      const newStateAfterLoad = {
        ...state,
        reservas: [...action.payload],
      }
      localStorage.setItem(
        'reservas',
        JSON.stringify(newStateAfterLoad.reservas)
      )
      return newStateAfterLoad

    case types.updateFechaSeleccionada: // Cambiar el nombre de la acción
      return {
        ...state,
        fechaSeleccionada: action.payload,
      }

    default:
      return state
  }
}
