//as long as this files starst with brackets, it is dynamic. This is a Next thing.
import firebaseInstance from '../../config/firebase'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageMenu from '../../components/PageMenu'
import { Wrapper } from '../../components/Wrapper'
import SiteFooter from '../../components/SiteFooter'
import { useCart } from '../../utils/CartContext'
import { useAuth } from '../../utils/auth'

function FoodPage({ item, error }) {
  const cart = useCart()
  const user = useAuth()

  //console.log(item)

  //Add to cart function. What important info should I be including here? Name/Id of the person ordering, perhaps? And a boolean completed/incomplete property? And perhaps a paid/unpaid property?
  function addToCart() {
    //console.log('clicky')
    cart.addProductLine({
      id: item.id,
      title: item.name,
      price: item.price,
      toppings: item.toppings ? item.toppings : 'no toppings',
      complete: false,
      paid: false,
    })

    console.log(cart.productLines, user.uid, user.displayName)
  }

  return (
    <>
      <PageMenu />
      <Wrapper>
        <ItemContainer>
          <h2>{item.name}</h2>
          <img id={item.type === 'drink' ? 'drink' : ''} src={item.pic}></img>
          <p>Price: ${item.price}</p>
          <button onClick={() => addToCart()}>Add To Cart</button>
        </ItemContainer>
      </Wrapper>
      <SiteFooter />
    </>
  )
}

//the query here holds all of the info on what Next is asked about for it wil rennder this component. It holds the URL and possibly the history and other info
FoodPage.getInitialProps = async ({ query }) => {
  try {
    const collection = await firebaseInstance.firestore().collection('food')
    const document = await collection.doc(`${query.id}`).get()

    const item = {
      id: document.id,
      ...document.data(),
    }

    return { item }
  } catch (error) {
    return { error: error.message }
  }
}

const ItemContainer = styled.article`
  h2 {
    font-size: 3.5rem;
    color: #ffba6a;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid grey; */
  height: 60vh;

  #drink {
    height: 200px;
    width: auto;
  }

  img {
    width: 250px;
  }

  p {
    font-size: 2.5rem;
    color: white;
  }

  button {
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
`

export default FoodPage
