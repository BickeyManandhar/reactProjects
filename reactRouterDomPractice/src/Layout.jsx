//some people name this file as root

import React from 'react'
import { Outlet } from 'react-router-dom'; //this will inject dynamic components 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function Layout() {
  return (
    <>
    <Header/>
     <Outlet/> {/*we specify what components to be treated as outlet inside the main.jsx under the children */}
    <Footer/>
    </>
  )
}

export default Layout