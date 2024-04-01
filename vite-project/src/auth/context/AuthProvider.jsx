import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

// const initialState = {
//   logged: false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (userLogin) => {
    const { nombre, apellido, usuarioRol, id, email } = userLogin
    const user = {
      id,
      nombre,
      apellido,
      usuarioRol,
      email
    }
    const action = {
      type: types.login,
      payload: user,
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {
    const action = {
      type: types.logout,
    }
    localStorage.removeItem('user')
    dispatch(action)
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
