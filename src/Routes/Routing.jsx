import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Details from '../component/Details'
import Homepage from '../component/Homepage'


const Routing = () => {
  return (
    (
      <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/:code' element={<Details />}></Route>
    </Routes>
  )
  )
}

export default Routing
