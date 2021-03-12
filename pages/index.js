import React from 'react'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import SiteMenu from '../components/SiteMenu'
import SiteFooter from '../components/SiteFooter'

export default function Home() {
  return (
    <>
      <MainBase>
        <PageMenu title={`Børre's Burgers`} />
        <SiteMenu />
        <SiteFooter />
      </MainBase>
    </>
  )
}

const MainBase = styled.main`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`
