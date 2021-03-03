// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import getMenuData from '../components/GetMenu'
// import PageMenu from '../components/PageMenu'
// import { Wrapper } from '../components/Wrapper'

// const OrderPage = ({}) => {
//   const [menuData, setMenuData] = useState([])

//   const [burgers, setBurgers] = useState([])
//   const [drinks, setDrinks] = useState([])
//   const [sides, setSides] = useState([])
//   const [displayFood, setDisplayFood] = useState([])

//   const fetchMenuData = async () => {
//     const result = await getMenuData()
//     setMenuData(result)
//   }

//   useEffect(() => {
//     fetchMenuData()
//     if (menuData.length === 0) {
//       console.log('stuff not here')
//     }
//   }, [])

//   useEffect(() => {
//     if (menuData === undefined) {

//       fetchMenuData()
//     } else {
//       setBurgers([...menuData.filter((item) => item.type === 'burger')])
//       setDrinks([...menuData.filter((item) => item.type === 'drink')])
//       setSides([...menuData.filter((item) => item.type === 'side')])
//     }
//   }, [menuData])

//   useEffect(() => {
//     if (burgers.length !== 0) {
//       setDisplayFood([...burgers, ...sides, ...drinks])
//     }
//   }, [burgers])

//   function renderPage() {
//     if (displayFood.length > 0) {
//     }
//     return displayFood.map((item) => <OrderMenuArticle key={item.id}>{item.name}</OrderMenuArticle>)
//   }

//   return (
//     <React.Fragment>
//       <PageMenu />
//       <Wrapper>{menuData && renderPage()}</Wrapper>
//     </React.Fragment>
//   )
// }

// const OrderMenuArticle = styled.article`
//   width: 100px;
//   height: 100px;
//   background-color: blue;
//   border: 1px solid black;
// `

// export default OrderPage
