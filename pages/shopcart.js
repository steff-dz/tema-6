import React from 'react'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { useAuth } from '../utils/auth'
import { useCart } from '../utils/CartContext'

const Shopcart = () => {
  const user = useAuth()
  const cart = useCart()
  console.log(cart.total)

  function renderItems() {
    return cart.productLines.map((item) => (
      <li key={item.id}>
        {item.title} - ${item.price}
      </li>
    ))
  }

  return (
    <MainBase>
      <PageMenu />
      <Wrapper>
        <PageTitle>{user ? `${user.displayName}'s Cart` : 'Your cart'}</PageTitle>
        <CartContainer>
          <ul>{cart.quantity > 0 ? renderItems() : 'Your cart is empty!'}</ul>
          <TotalContainer>Your total: ${cart.total}.00</TotalContainer>
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
  border: 1px solid green;
  font-size: 2rem;
  background-color: white;
  color: black;
`

export default Shopcart
