import { createContext, useEffect, useState, useContext } from 'react'
import firebaseInstance from '../config/firebase'

import nookies from 'nookies'

export const AuthContext = createContext({ user: null })

export function AuthProvider({ children }) {
  const [user, setUser] = useState()

  //idk what these tokens or nookies are doing.......
  useEffect(() => {
    return firebaseInstance.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', null, { path: '/' })
      } else {
        const token = user.getIdToken()
        setUser(user)
        console.log('toot toot context working', user.email)
        nookies.set(undefined, 'token', token, { path: '/' })
      }
    })
  })

  useEffect(() => {
    const handle = setInterval(async () => {
      console.log('refresher going')
      const user = firebase.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    return clearInterval(handle)
  })

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
