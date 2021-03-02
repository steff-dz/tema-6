import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import getMenuData from '../components/GetMenu'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'

const OrderPage = ({}) => {
  const [menuData, setMenuData] = useState([])

  //states for the food data coming from firestore
  const [burgers, setBurgers] = useState([])
  const [drinks, setDrinks] = useState([])
  const [sides, setSides] = useState([])
  const [displayFood, setDisplayFood] = useState([])

  const fetchMenuData = async () => {
    const result = await getMenuData()
    setMenuData(result)
  }

  useEffect(() => {
    fetchMenuData()
    if (menuData.length === 0) {
      console.log('stuff not here')
    }
  }, [])

  useEffect(() => {
    if (menuData === undefined) {
      //console.log('nothing here')
      fetchMenuData()
    } else {
      setBurgers([...menuData.filter((item) => item.type === 'burger')])
      setDrinks([...menuData.filter((item) => item.type === 'drink')])
      setSides([...menuData.filter((item) => item.type === 'side')])
    }
  }, [menuData])

  //Rending out the food in a desired order
  useEffect(() => {
    if (burgers.length !== 0) {
      setDisplayFood([...burgers, ...sides, ...drinks])
    }
  }, [burgers])

  function renderPage() {
    if (displayFood.length > 0) {
      console.log(displayFood)
    }
    return <h1>Order Page Will Be Here</h1>
  }

  return (
    <React.Fragment>
      <PageMenu />
      <Wrapper>{menuData && renderPage()}</Wrapper>
    </React.Fragment>
  )
}

export default OrderPage
