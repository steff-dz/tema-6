//as long as this files starst with brackets, it is dynamic. This is a Next thing.

import firebaseInstance from '../../config/firebase'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageMenu from '../../components/PageMenu'
import { Wrapper } from '../../components/Wrapper'
import SiteFooter from '../../components/SiteFooter'
import { MinusCircle } from 'phosphor-react'
import { PlusCircle } from 'phosphor-react'
import { useCart } from '../../utils/CartContext'
import { useAuth } from '../../utils/auth'

function FoodPage({ item, error }) {
  const [counter, setCounter] = useState(1)

  const cart = useCart()
  const user = useAuth()

  useEffect(() => {
    console.log(cart.productLines)
  }, [cart.productLines])

  //Adding product to the cart
  function addToCart() {
    cart.addProductLine({
      id: item.id,
      qty: counter,
      title: item.name,
      price: item.price * counter,
      type: item.type,
      toppings: item.toppings ? item.toppings : 'no toppings',
    })

    console.log(cart.productLines, 'from product pg')
  }

  return (
    <>
      <PageMenu title={'B.'} />
      <Wrapper>
        <ItemContainer>
          <h2>{item.name}</h2>
          <img id={item.type === 'drink' ? 'drink' : ''} src={item.pic}></img>
          <DetailContainer>
            <p>Price: ${item.price * counter}.00</p>
            <div>
              <MinusCircle size={48} onClick={() => setCounter(counter - 1)} />
              {counter}
              <PlusCircle size={48} onClick={() => setCounter(counter + 1)} />
            </div>
          </DetailContainer>
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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  h2 {
    font-size: 3.5rem;
    color: #ffba6a;
  }

  #drink {
    height: 200px;
    width: auto;
  }

  img {
    width: 250px;
  }

  button {
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
    margin-top: 2rem;
  }
`

const DetailContainer = styled.div`
  /* border: 1px solid white; */
  width: 250px;

  p {
    font-size: 2.5rem;
    color: white;
  }

  div {
    margin-top: 1rem;
    color: white;
    font-size: 3rem;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`

export default FoodPage
