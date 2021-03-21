import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import firebaseInstance from '../../config/firebase'
import { useAuth } from '../../utils/auth'

const SiteMenu = () => {
  //bringing in the hook for authentication--------------
  const user = useAuth()

  //function for dealing with the user signing out --------------
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
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, type: 'spring', stiffness: 130 }}
        >
          ORDERS UP
        </motion.div>
      </Link>
    </SiteNav>
  )
}

const SiteNav = styled.nav`
  margin: 0 auto;
  margin-top: 2rem;
  width: 90vw;
  padding-bottom: 50%;
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
