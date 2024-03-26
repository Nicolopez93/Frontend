import React from 'react'

import { AppRouters } from './router/AppRouters'
import { AuthProvider } from './auth/context/AuthProvider'
import { ReservaProvider } from './context/ReservaProvider'

export const CarsApp = () => {
  return (
    <AuthProvider>
      <ReservaProvider>
        <AppRouters />
      </ReservaProvider>
    </AuthProvider>
  )
}
