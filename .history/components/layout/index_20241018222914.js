import React from 'react'
import Header from '../navbar'
import Footer from '../footer'
import Sidebar from '../sidebar'

export default function Layout({children}) {
  return (
    <>
    <div className="w-screen  min-h-screen">
    <div className="flex">
    <Sidebar />
    <main className="flex-1 md:ml-72 p-8 bg-gray-50 min-h-screen">

 
{children}
</div>
   </div>
   <Footer className="fixed top-0 left-0 right-0"></Footer>
   </div>
   </>
  )
}