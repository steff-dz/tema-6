import React from 'react'

import { AuthProvider } from '../utils/auth'
import { Cart } from '../utils/CartContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Cart>
        <Component {...pageProps} />
      </Cart>
    </AuthProvider>
  )
}

export default MyApp
