import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from "./ClientLayout/index"
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Add from './Pages/Add'
import Detail from './Pages/Detail'
import NotFound from './Pages/NotFound'
function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element ={<ClientLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path = "wishlist" element = {<Wishlist/>}/>
          <Route path = "add" element = {<Add/>}/>
          <Route path = ":id" element = {<Detail/>}/>
        </Route>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
