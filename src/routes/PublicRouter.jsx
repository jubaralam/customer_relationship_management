/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../public_pages/Home'
import UserLogin from '../pages/UserLogin'
import Customers from '../public_pages/Customers'
import Products from '../public_pages/Products'
import Support from '../public_pages/Support'

const PublicRouter = () => {
    

  return (
    <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  )
}

export default PublicRouter