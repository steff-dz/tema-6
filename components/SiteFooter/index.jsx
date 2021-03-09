import React from 'react'
import styled from 'styled-components'
import { PageTitle } from '../PageTitle'
import { useAuth } from '../../utils/auth'
import { ShoppingCartSimple } from 'phosphor-react'

const SiteFooter = () => {
  const user = useAuth()

  function renderLoginMessage() {
    return <PageTitle>Login or sign up to start eating!</PageTitle>
  }

  function renderShoppingCart() {
    return (
      <>
        <ShoppingCartSimple color="white" size={40} weight="fill" />
      </>
    )
  }

  return <FooterBase>{user ? renderShoppingCart() : renderLoginMessage()}</FooterBase>
}

const FooterBase = styled.footer`
  border: 1px solid grey;
  width: 100vw;
  height: 10vh;
`

export default SiteFooter
