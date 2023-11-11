import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Sentance from '../Sections/Sentance/Sentance'




export const Layout = ({children}) => {
  return (
    <>
    <Sentance/>
    <Header />

    {children}
    <Footer/>
    </>
  )
}
