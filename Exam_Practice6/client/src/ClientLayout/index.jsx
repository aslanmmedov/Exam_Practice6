import React from 'react'
import Header from "../Layout/Header/index"
import Footer from '../Layout/Footer'
import { Outlet } from 'react-router-dom'
const ClientLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default ClientLayout