import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
        <Header/>
        <main>
          <p>
            <Outlet/>
          </p>
        </main>
        <Footer/>
    </>
  )
}

export default UserLayout
