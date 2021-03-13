import React from 'react'
import styled from 'styled-components'
import firebaseInstance from '../config/firebase'

import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { useAuth } from '../utils/auth'
import { useCart } from '../utils/CartContext'

const Shopcart = () => {
  const user = useAuth()
  const cart = useCart()

  function renderItems() {
    return cart.productLines.map((item) => (
      <li key={item.id}>
        {item.title} - ${item.price}.00
      </li>
    ))
  }

  //add a 'order has been received message
  function handleOrderPush() {
    const collection = firebaseInstance.firestore().collection('orders')
    collection
      .doc()
      .set({
        customer: user.displayName,
        items: [...cart.productLines],
        complete: false,
        paid: false,
        status: 'prepping',
        bill: cart.total,
      })
      .then(() => {
        console.log('pushed to firebase wooo')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <MainBase>
      <PageMenu title={'B.'} />
      <Wrapper>
        <PageTitle>{user ? `${user.displayName}'s Cart` : 'Your cart'}</PageTitle>
        <CartContainer>
          <ul>{cart.quantity > 0 ? renderItems() : 'Your cart is empty!'}</ul>
          <TotalContainer>Your total: ${cart.total}.00</TotalContainer>
          <OrderButton onClick={() => handleOrderPush()}>Place Order</OrderButton>
        </CartContainer>
      </Wrapper>
    </MainBase>
  )
}

const MainBase = styled.main`
  width: 100vw;
  height: 100vh;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
`

const CartContainer = styled.article`
  border: 1px solid grey;
  min-height: 50vh;
  width: 100%;

  ul {
    font-size: 2rem;
    color: white;
    list-style-position: inside;
  }
`

const TotalContainer = styled.div`
  font-size: 2rem;
  background-color: white;
  color: black;
`

const OrderButton = styled.button`
  font-size: 2rem;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
`

export default Shopcart
