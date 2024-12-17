import React from 'react'
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'


import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    {/* Navbar Component */}
      <Navbar/>
    {/* Routing Setup for the app */}
    <Routes> {/* It will ensure there is only one route that matches the path is rendered in the ui */ }
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App