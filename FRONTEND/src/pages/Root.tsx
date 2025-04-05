import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navbar/Nav'

function Root() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
 
  )
}

export default Root