import firebaseInstance from '../../config/firebase'

export function getOrders(el) {
  let items = []

  try {
    el.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })

    console.log(items)
    return items
  } catch (error) {
    console.log(error)
  }
}

// useEffect(() => {
//     console.log('stuff here')

//     getOrders(OrdersCollection)
//     fetchOrdersData()
//     setCurrOrders(result)
//   }, [])

//   const fetchOrdersData = async () => {
//     const result = await getOrders(OrdersCollection)
//     setCurrOrders(result)
//   }
