//as long as this files starst with brackets, it is dynamic. This is a Next thing.
import firebaseInstance from '../../config/firebase'
import React, { useState, useEffect } from 'react'

function FoodPage({ item, error }) {
  const [selectedItem, setSelectedItem] = useState(item)

  return (
    <>
      <h1>you are looking at {selectedItem.name}</h1>
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

export default FoodPage
