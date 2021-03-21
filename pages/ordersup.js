import React, { useState, useEffect } from 'react'
import firebaseInstance from '../config/firebase'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { PageTitle } from '../components/PageTitle'

const OrdersUp = () => {
  const [doneOrders, setDoneOrders] = useState([])
  const [currOrders, setCurrOrders] = useState([])

  const getOrders = (CompletedOrders, IncompleteOrders) => {
    CompletedOrders.onSnapshot((querySnapshot) => {
      const orders = []
      querySnapshot.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setDoneOrders(orders)
    })

    IncompleteOrders.onSnapshot((querySnapshot) => {
      const orders = []
      querySnapshot.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setCurrOrders(orders)
    })
  }

  useEffect(() => {
    try {
      const CompletedOrders = firebaseInstance
        .firestore()
        .collection('orders')
        .where('complete', '==', true)

      const IncompleteOrders = firebaseInstance
        .firestore()
        .collection('orders')
        .where('complete', '==', false)

      getOrders(CompletedOrders, IncompleteOrders)
    } catch (err) {
      console.log(err, 'from odersup file')
    }
  }, [])

  function renderOrders(data) {
    return data.map((order) => (
      <OrderContainer key={order.id}>ticket #{order.orderNum}</OrderContainer>
    ))
  }

  return (
    <>
      <PageMenu title={`Børre's Burgers`} />
      <MainBase>
        <SectionBase>
          <PrepContainer>
            <PageTitle style={{ color: 'black', fontSize: '4rem' }}>PREPPING</PageTitle>
            {currOrders ? renderOrders(currOrders) : <p>Nothin' cookin' in the kitchen!</p>}
          </PrepContainer>
          <ReadyContainer>
            <PageTitle style={{ color: 'black', fontSize: '4rem' }}>READY</PageTitle>
            {doneOrders ? renderOrders(doneOrders) : <p>We're cookin' 'em up!</p>}
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
  gap: 1rem;

  div {
    h2 {
      text-align: center;
      letter-spacing: 0.2rem;
    }
  }
`
const PrepContainer = styled.div`
  background-color: #ffba6a;
  padding: 0 1rem;
`
const ReadyContainer = styled.div`
  background-color: #078080;
  padding: 0 1rem;
`
const OrderContainer = styled.div`
  border: 1px solid black;
  font-size: 2.5rem;
  width: 100px;
  height: 75px;
  margin: 1rem 0;
  text-align: center;
  background-color: whitesmoke;
`
export default OrdersUp
