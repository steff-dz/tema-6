import React from 'react'
import SiteMenu from '../components/SiteMenu'
import { useAuth } from '../utils/auth'

export default function Home() {
  //console.log(props.value)
  //Home.contextType = AuthProvider
  //console.log(value)
  //const thisUser = value.user
  //console.log(thisUser)
  return (
    <React.Fragment>
      <SiteMenu />
    </React.Fragment>
  )
}
