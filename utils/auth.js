import { createContext, useEffect, useState, useContext } from 'react'
import firebaseInstance from '../config/firebase'

import nookies from 'nookies'

export const AuthContext = createContext({ user: null })

//Wrapping the application at the top in _app.js
export function AuthProvider({ children }) {
  //Storing the user in state.
  const [user, setUser] = useState(null)

  //idk what these tokens or nookies are doing.......
  useEffect(() => {
    return firebaseInstance.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        console.log('no one here')
        nookies.set(undefined, 'token', null, { path: '/' })
      } else {
        const token = user.getIdToken()
        //console.log(user, token)
        setUser(user)
        console.log('toot toot form auth.js', user.email)
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

//Custom React hook to access the context. We can use this in any page and the value is stored in one single location.
export const useAuth = () => {
  return useContext(AuthContext)
}
