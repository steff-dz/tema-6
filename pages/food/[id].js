//as long as this files starst with brackets, it is dynamic. This is a Next thing.
import firebaseInstance from '../../config/firebase'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageMenu from '../../components/PageMenu'
import { Wrapper } from '../../components/Wrapper'

function FoodPage({ item, error }) {
  //const [selectedItem, setSelectedItem] = useState(item)

  return (
    <>
      <PageMenu />
      <Wrapper>
        <ItemContainer>
          <h2>{item.name}</h2>
          <img id={item.type === 'drink' ? 'drink' : ''} src={item.pic}></img>
        </ItemContainer>
      </Wrapper>
    </>
  )
}

//the query here holds all of the info on what Next is asked about for it wil rennder this component. It holds the URL and possibly the history and other info
FoodPage.getInitialProps = async ({ query }) => {
  try {
    const collection = await firebaseInstance.firestore().collection('food')
    const document = await collection.doc(`${query.id}`).get()

    const item = {
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
  border: 1px solid white;
  height: 60vh;

  #drink {
    height: 200px;
    width: auto;
  }
  img {
    width: 250px;
  }
`

export default FoodPage
