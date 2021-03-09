import React from 'react'
import styled from 'styled-components'
import SiteMenu from '../components/SiteMenu'
import SiteFooter from '../components/SiteFooter'
import { useAuth } from '../utils/auth'

export default function Home() {
  return (
    <MainBase>
      <SiteMenu />
      <SiteFooter />
    </MainBase>
  )
}

const MainBase = styled.main`
  width: 100vw;
  height: 100vh;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
