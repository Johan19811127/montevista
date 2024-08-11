import React from 'react'
import Header from '../navbar'
import Footer from '../footer'

export default function Layout({children}) {
  return (
    <>
   <Header></Header>
   <div className=" ">
{children}

   </div>
   <Footer
   </>
  )
}
