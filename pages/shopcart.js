import React from 'react'
import { Router, useRouter } from 'next/router'
import styled from 'styled-components'
import firebaseInstance from '../config/firebase'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { XCircle } from 'phosphor-react'
import { useAuth } from '../utils/auth'
import { useCart } from '../utils/CartContext'

const Shopcart = () => {
  const user = useAuth()
  const cart = useCart()
  const router = useRouter()

  console.log(cart.quantity, 'from shopcart file', cart.total)

  function renderItems() {
    return cart.productLines.map((item) => (
      <ItemContainer key={item.id}>
        <p>
          {item.title} x {item.qty} <span>${item.price}.00</span>
        </p>
        <button
          onClick={() => {
            handleDelete(item.id)
          }}
        >
          <XCircle size={35} />
        </button>
      </ItemContainer>
    ))
  }

  //function to handle deletes
  function handleDelete(id) {
    console.log('from cart file', id, cart.productLines)
    cart.setProductLines(cart.productLines.filter((item) => item.id !== id))
  }

  //function to push the order to firestore
  function handleOrderPush() {
    const collection = firebaseInstance.firestore().collection('orders')
    collection
      .doc()
      .set({
        customer: user.displayName,
        items: [...cart.productLines],
        complete: false,
        bill: cart.total,
      })
      .then(() => {
        console.log('pushed to firebase wooo')
        router.push('/ordersup')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <MainBase>
      <PageMenu title={'B.'} />
      <Wrapper>
        <PageTitle style={{ fontWeight: '100' }}>
          {user ? `${user.displayName}'s Cart` : 'Your cart'}
        </PageTitle>
        <CartContainer>
          {cart.quantity > 0 ? renderItems() : 'Your cart is empty!'}
          <TotalContainer>
            Your total: <span>${cart.total}.00</span>
          </TotalContainer>
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
  /* border: 1px solid pink; */
  min-height: 50vh;
  width: 100%;
  background-color: #f9f871;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ItemContainer = styled.div`
  font-size: 2.1rem;
  color: black;
  display: flex;
  justify-content: space-between;

  p {
    border-bottom: 1px solid grey;
    background-color: white;
    padding: 0 0.5rem;

    span {
      font-weight: 600;
    }
  }

  button {
    background-color: #f9f871;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`

const TotalContainer = styled.div`
  font-size: 2.5rem;
  color: black;

  span {
    font-weight: 600;
  }
`

const OrderButton = styled.button`
  font-size: 2rem;
  padding: 1rem;
  border-radius: 10px;
  width: 50%;
  background-color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: white;
  }
`

export default Shopcart
