import React, { useState, useEffect } from 'react'
import firebaseInstance from '../config/firebase'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'

const OrdersUp = () => {
  const [currOrders, setCurrOrders] = useState(null)
  const OrdersCollection = firebaseInstance
    .firestore()
    .collection('orders')
    .where('complete', '==', true)

  getOrders()

  function getOrders() {
    OrdersCollection.onSnapshot((querySnapshot) => {
      const orders = []
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        // orders.push({
        //   id: doc.id,
        //   ...doc.data(),
        // })
      })
      //console.log(setCurrOrders)
      //setCurrOrders(orders)
    })
  }

  return (
    <>
      <PageMenu title={`Børre's Burgers`} />
      <MainBase>
        <SectionBase>
          <PrepContainer>
            <PageTitle style={{ color: 'black', fontSize: '4rem' }}>PREPPING</PageTitle>
          </PrepContainer>
          <ReadyContainer>
            <PageTitle style={{ color: 'black', fontSize: '4rem' }}>READY</PageTitle>
          </ReadyContainer>
        </SectionBase>
      </MainBase>
    </>
  )
}

const MainBase = styled.main`
  margin: 0 1rem;
  height: 70vh;
`

const SectionBase = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    h2 {
      text-align: center;
      letter-spacing: 0.2rem;
    }
  }
`
const PrepContainer = styled.div`
  background-color: #ffba6a;
`
const ReadyContainer = styled.div`
  background-color: #078080;
`
export default OrdersUp
