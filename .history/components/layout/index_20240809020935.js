import React from 'react'
import Header from '../navbar'
import Footer from '../footer'

export default function Layout({children}) {
  return (
    <>
    <div className="w-full min-h-screen">
   <Header></Header>
   <div  >
{children}

   </div>
   <Footer className-"fixed top-0 left-0 right-0"></Footer>
   </div>
   </>
  )
}
