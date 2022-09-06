import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
   return (
      <div>
         <Header />
         <Outlet />
         <div>footer</div>
      </div>
   )
}

export default WebsiteLayout