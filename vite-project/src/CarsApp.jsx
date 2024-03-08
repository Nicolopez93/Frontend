import React from 'react'

import { AppRouters } from './router/AppRouters'
import { AuthProvider } from './auth/context/AuthProvider'

export const CarsApp = () => {
  return (
    <AuthProvider>
      <AppRouters />
    </AuthProvider>
  )
}
