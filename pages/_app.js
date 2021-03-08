import React, { useState, useEffect } from 'react'
//import firebaseInstance from '../config/firebase'
import { AuthProvider } from '../utils/auth'
import { LoginContext } from '../utils/status'
import '../styles/globals.css'
//import { AppWrapper } from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  //console.log(StatusContext)
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </LoginContext.Provider>
  )
}

export default MyApp
/* <AuthProvider>
<Component {...pageProps} />
</AuthProvider> */

//   const [menuData, setMenuData] = useState([])

//   useEffect(() => {
//     if (menuData.length === 0) {
//       getMenuData()
//     } else {
//       return
//     }
//   }, [])

//   async function getMenuData() {
//     let menuArray = []
//     if (menuArray.length === 0) {
//       try {
//         const foodCollection = await firebaseInstance.firestore().collection('food')
//         const foodData = await foodCollection.get()

//         foodData.forEach((el) => {
//           menuArray.push({
//             id: el.id,
//             ...el.data(),
//           })
//         })
//         setMenuData(menuArray)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }
