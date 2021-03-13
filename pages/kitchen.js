import React, { useState, useEffect } from 'react'
import firebaseInstance from '../config/firebase'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'

const Kitchen = () => {
  const [currOrders, setCurrOrders] = useState(null)
  //const [completedOrders, setCompletedOrders] = useState(null)

  const OrdersCollection = firebaseInstance.firestore().collection('orders')

  useEffect(() => {
    console.log('stuff here')

    getOrders()
  }, [])

  // useEffect(() => {
  //   console.log(completedOrders)
  // }, [completedOrders])

  function getOrders() {
    OrdersCollection.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setCurrOrders(items)
    })
  }

  function renderOrders() {
    let incompleteOrders = [...currOrders.filter((order) => order.complete === false)]
    return incompleteOrders.map((order) => (
      <OrderArticle key={order.id}>
        <div>
          <h2>For {order.customer}</h2>
          <ul>{renderItems(order.items)}</ul>
        </div>

        <button onClick={() => handleComplete(order)}>Complete</button>
      </OrderArticle>
    ))
  }

  function renderItems(data) {
    let foodItems = []
    foodItems.push(...data.filter((el) => el.type !== 'drink'))
    return foodItems.map((el) => <li key={el.id}>{el.title}</li>)
  }

  function handleComplete(data) {
    console.log(data.id)
    let orderDoc = OrdersCollection.doc(`${data.id}`)
    return orderDoc
      .update({
        complete: true,
      })
      .then(() => {
        console.log('doc has been updated')
      })
      .catch((error) => {
        console.error('you messed shit up', error)
      })
  }

  return (
    <>
      <HeaderBase>
        <h1>Børre's Kitchen</h1>
      </HeaderBase>
      <MainBase>
        <Wrapper>{currOrders && renderOrders()}</Wrapper>
      </MainBase>
    </>
  )
}

const HeaderBase = styled.header`
  h1 {
    color: #ffba6a;
    font-size: 5rem;
    font-weight: 100;
    text-align: center;
  }
`

const MainBase = styled.main`
  /* border: 1px solid grey; */
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OrderArticle = styled.article`
  margin: 2rem 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 2rem;
  /* border: 1px solid green; */

  div {
    /* border: 1px solid pink; */
    width: 30rem;
    min-height: 15rem;
    padding: 0.5rem 1.5rem;
    background-color: #f9f871;
    box-shadow: -7px 10px 0px -1px #aaaa59;
    h2 {
      font-size: 2.5rem;
    }

    ul {
      list-style: inside;
      font-size: 2.3rem;
    }
  }

  button {
    font-size: 2.3rem;
    height: 5rem;
    padding: 0 1rem;
    align-self: center;
    background-color: #ffba6a;
    border-radius: 10px;
  }
`

export default Kitchen

// function deleteThings() {
//   OrdersCollection.doc('bugYLE8d5QlQ1OchkjHp')
//     .delete()
//     .then(() => {
//       console.log('delete!')
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// {currOrders &&
//   currOrders.map((el) => {
//     return <li key={el.id}>{el.id}</li>
//   })}
