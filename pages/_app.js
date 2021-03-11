import React, { useState, useEffect } from 'react'
//import firebaseInstance from '../config/firebase'
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
