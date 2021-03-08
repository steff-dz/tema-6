import React, { useState, useEffect, useContext } from 'react'
//import { LoginContext } from '../utils/status'
//import firebaseInstance from '../config/firebase'
//import Link from 'next/link'
import styled from 'styled-components'
import getMenuData from '../components/GetMenu'
import MenuSkeleton from '../components/MenuSkeleton'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { useAuth } from '../utils/auth'
import { useRouter } from 'next/router'
//import { AuthContext } from '../utils/auth'

const Menu = ({}) => {
  //const { loggedIn, setLoggedIn } = useContext(LoginContext)
  //initial state
  const user = useAuth()
  const router = useRouter()
  const [menuData, setMenuData] = useState([])

  //states for the food data coming from firestore
  const [burgers, setBurgers] = useState([])
  const [drinks, setDrinks] = useState([])
  const [sides, setSides] = useState([])
  const [displayFood, setDisplayFood] = useState([])

  //function for getting the food data
  const fetchMenuData = async () => {
    const result = await getMenuData()
    setMenuData(result)
  }

  //Retrieving menu data if the state is empty
  // useEffect(() => {
  // if (menuData.length === 0 || menuData === undefined) {
  // getMenuData()
  // console.log(AuthContext.user)
  // fetchMenuData()
  // } else {
  // return
  // }, [])

  useEffect(() => {
    if (menuData.length === 0 || menuData === undefined) {
      fetchMenuData()
    } else {
      //console.log('stuff from useEffect')
      return
    }
  })

  // useEffect(() => {
  //   if (menuData.length === 0 || menuData === undefined) {
  //     getMenuData()
  //   } else {
  //     console.log('something went wrong')
  //   }
  // })

  //Filtering and sorting out the different food types into different states for organization.
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

  //Page skeleton below
  function renderSkeleton() {
    return (
      <React.Fragment>
        <MenuSkeleton />
        <MenuSkeleton />
        <MenuSkeleton />
      </React.Fragment>
    )
  }

  //Actual page render below:
  function renderPage() {
    return displayFood.map((item) => (
      <FoodArticle key={item.id}>
        <InfoContainer>
          <img className={item.type} src={item.pic} />
          <div className="title-container">{item.name}</div>
        </InfoContainer>

        <button
          key={item.name}
          onClick={() => checkOutItem(item.id)}
          className={user ? '' : 'toggle-btn'}
        >
          Check Out
        </button>
      </FoodArticle>
    ))
  }

  //Function to render out the burger toppings in a list
  function renderToppings(data) {
    if (data === undefined) {
      return <li>Something will come here later.</li>
    } else {
      return data.map((el) => <li key={el}>{`${el}`}</li>)
    }
  }

  //Filter handler to switch between food types.
  function filterHandler(e) {
    if (e.target.innerHTML === 'burgers') {
      setDisplayFood([])
      setDisplayFood([...burgers])
    } else if (e.target.innerHTML === 'sides') {
      setDisplayFood([])
      setDisplayFood([...sides])
    } else if (e.target.innerHTML === 'drinks') {
      setDisplayFood([])
      setDisplayFood([...drinks])
    } else if (e.target.innerHTML === 'all') {
      setDisplayFood([])
      setDisplayFood([...burgers, ...sides, ...drinks])
    }
  }

  function checkOutItem(name) {
    console.log(name)
    router.push(`/food/${name}`)
  }

  return (
    <>
      <PageMenu />

      <Wrapper>
        <MenuNav>
          <ul>
            <li onClick={(e) => filterHandler(e)}>burgers</li>
            <li onClick={(e) => filterHandler(e)}>sides</li>
            <li onClick={(e) => filterHandler(e)}>drinks</li>
            <li onClick={(e) => filterHandler(e)}>all</li>
          </ul>
        </MenuNav>
        <MainBase>{displayFood.length === 0 ? renderSkeleton() : renderPage()}</MainBase>
      </Wrapper>
    </>
  )
}

const MenuNav = styled.nav`
  /* width: 80vw; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: fit-content;

  ul {
    padding: 0;
    list-style: none;
    font-size: 2.5rem;
    color: #ffba6a;
    display: flex;
    justify-content: center;
    gap: 1rem;

    li {
      width: fit-content;
      padding: 0.3rem;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background-color: black;
      }
    }
  }
`

const MainBase = styled.main`
  /* border: 1px solid green; */
  min-height: 100vh;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  gap: 2rem;
`

const FoodArticle = styled.article`
  /* border: 1px solid blue; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .toggle-btn {
    display: none;
  }
`

const InfoContainer = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .drink {
    height: 200px;
    width: auto;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }

  .title-container {
    font-size: 3.5rem;
    color: black;
    width: 100%;
    padding: 0 1rem;
    text-align: center;
    background-color: #078080;
  }
`
const CheckoutBtn = styled.button`
  width: 100%;
  font-size: 2rem;
`
export default Menu

// <ClickCard activeStyle={{ opacity: '1' }}>
// <h2>{item.toppings === undefined ? '' : 'Toppings'}</h2>
// <ul>{renderToppings(item.toppings)}</ul>
// </ClickCard>
