import React from 'react'
import Header from '../navbar'
import Footer from '../footer'

export default function Layout({children}) {
  return (
    <>
    <div className="w-full min-h"
   <Header></Header>
   <div  >
{children}

   </div>
   <Footer></Footer>
   </>
  )
}
