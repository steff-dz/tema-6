import React, { useState, useEffect } from 'react'
import firebaseInstance from '../config/firebase'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'

const Kitchen = () => {
  const [currOrders, setCurrOrders] = useState(null)
  const collection = firebaseInstance.firestore().collection('orders')

  return (
    <>
      <PageMenu title={`B's kitchen`} />
      <MainBase>
        <Wrapper>
          <h2>Testtest</h2>
        </Wrapper>
      </MainBase>
    </>
  )
}

const MainBase = styled.main`
  border: 1px solid grey;
  height: 85vh;
`

export default Kitchen
