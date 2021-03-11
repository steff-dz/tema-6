import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageTitle } from '../PageTitle'
import { useAuth } from '../../utils/auth'
import { useCart } from '../../utils/CartContext'
import { ShoppingCartSimple } from 'phosphor-react'
import Link from 'next/link'

const SiteFooter = () => {
  const user = useAuth()
  const cart = useCart()

  useEffect(() => {
    console.log(cart.productLines)
  }, [cart.productLines])

  function renderLoginMessage() {
    return <PageTitle>Login or sign up to start eating!</PageTitle>
  }

  function renderShoppingCart() {
    return (
      <article>
        <Link href="/shopcart">
          <ShoppingCartSimple color="white" size={50} weight="fill" />
        </Link>
        <p>
          {cart.productLines.length > 0
            ? `Something here! ${cart.quantity}`
            : 'Your cart is empty!'}
        </p>
      </article>
    )
  }

  return <FooterBase>{user ? renderShoppingCart() : renderLoginMessage()}</FooterBase>
}

const FooterBase = styled.footer`
  width: 100vw;
  height: 15vh;
  padding: 1rem;
  background-color: #078080;
  position: fixed;
  bottom: 0;

  article {
    display: flex;
    height: fit-content;
    width: 100%;
    gap: 1rem;

    p {
      font-size: 2rem;
      margin: auto 0;
      color: white;
      font-weight: 600;
    }
  }
`

export default SiteFooter
