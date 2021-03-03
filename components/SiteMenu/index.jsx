import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SiteMenu = () => {
  return (
    <MainBase>
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
        <Link href="/order">
          <motion.div
            style={{ backgroundColor: '#A46877' }}
            initial={{ opacity: 0, y: -100, rotateZ: 50 }}
            animate={{ opacity: 1, y: 0, rotateZ: 0 }}
            transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 130 }}
          >
            LOGIN
          </motion.div>
        </Link>

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
    </MainBase>
  )
}

const MainBase = styled.main`
  height: 100vh;
  width: 100vw;
`

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
