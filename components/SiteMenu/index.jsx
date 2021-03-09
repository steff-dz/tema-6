import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import firebaseInstance from '../../config/firebase'
import { LoginContext } from '../../utils/status'
import { useAuth } from '../../utils/auth'

const SiteMenu = () => {
  //const { loggedIn, setLoggedIn } = useContext(LoginContext)
  //const {user, setUser} = useAuth()
  //const { ...values } = useAuth()
  const user = useAuth()
  //console.log(user)

  useEffect(() => {
    console.log(user)
  })

  function handleSignOut() {
    firebaseInstance
      .auth()
      .signOut()
      .then(() => {
        console.log('you signed out')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  //}

  return (
    <SiteNav>
      <Link href="/menu">
        <motion.div
          style={{ backgroundColor: '#FFBA6A' }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 130 }}
        >
          MENU
        </motion.div>
      </Link>
      <Link href="/login">
        <motion.div
          style={{ backgroundColor: '#A46877' }}
          initial={{ opacity: 0, y: -100, rotateZ: 50 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 130 }}
          className={user ? 'toggle-button' : ''}
        >
          LOGIN
        </motion.div>
      </Link>

      <motion.div
        style={{ backgroundColor: '#A46877' }}
        initial={{ opacity: 0, y: -100, rotateZ: 50 }}
        animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 130 }}
        onClick={() => handleSignOut()}
        className={user ? '' : 'toggle-button'}
      >
        LOG OUT
      </motion.div>

      <Link href="/login">
        <motion.div
          style={{ backgroundColor: '#FFBA6A' }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, type: 'spring', stiffness: 130 }}
        >
          ORDERS UP
        </motion.div>
      </Link>
    </SiteNav>
  )
}

// const MainBase = styled.main`
//   height: 80vh;
//   width: 100vw;
//   border: 1px solid white;
// `

const SiteNav = styled.nav`
  /* border: 1px solid pink; */
  margin: 0 auto;
  width: 80%;
  height: 60%;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  color: #232323;

  .toggle-button {
    display: none;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    border-radius: 10px;
    font-weight: 600;
  }
`

export default SiteMenu

// useEffect(() => {
//   if (values === undefined) {
//     console.log('not logged in')
//   } else {
//     console.log(values.email)
//   }
// })

// useEffect(() => {
//   const user = firebaseInstance.auth().currentUser
//   console.log(user, 'from get current user method')
//   authStateListener()
// })

// this is using auth and firebase to check if someone is here
// Could just make this an importable component to check whether a user is signed in or not?
// function authStateListener() {
//   firebaseInstance.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log(user, 'from auth state listener on index')
//     } else {
//       console.log('no user here from auth state listener')
//     }
//   })
// }
