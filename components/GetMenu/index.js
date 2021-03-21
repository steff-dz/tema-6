//import React from 'react'
import firebaseInstance from '../../config/firebase'

//function to get menu data from firebase-----------------
async function getMenuData() {
  let menuArray = []

  try {
    const foodCollection = await firebaseInstance.firestore().collection('food')
    const foodData = await foodCollection.get()

    foodData.forEach((el) => {
      menuArray.push({
        id: el.id,
        ...el.data(),
      })
    })

    return menuArray
  } catch (error) {
    console.log(error)
  }
}

export default getMenuData
