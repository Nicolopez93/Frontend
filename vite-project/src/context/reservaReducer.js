import { types } from '../types/types'

export const reservaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.reservaAdd:
      return {
        ...state,
        reservas: [...state.reservas, action.payload],
      }
    case types.reservaDelete:
      return {
        ...state,
        reservas: state.reservas.filter(
          (reserva) => reserva.id !== action.payload
        ),
      }
    case types.reservaUpdate:
      return {
        ...state,
        reservas: state.reservas.map((reserva) =>
          reserva.id === action.payload.id ? action.payload : reserva
        ),
      }
    case types.reservaLoad:
      return {
        ...state,
        reservas: [...action.payload],
      }
    case 'setFechaSeleccionada':
      return {
        ...state,
        fechaSeleccionada: action.payload,
      }
    default:
      return state
  }
}
