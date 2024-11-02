import React from 'react'
import Header from '../navbar'
import Footer from '../footer'
import Sidebar from '../sidebar'

export default function Layout({children}) {
  return (
    <>
    <div className="w-screen  min-h-screen">


   <div className="flex md:flex-row w-full" >
  
    <div className="w-full ">
{children}
</div>
   </div>
   <Footer className="fixed top-0 left-0 right-0"></Footer>
   </div>
   </>
  )
}
