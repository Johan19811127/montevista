import React from 'react'
import Header from '../navbar'
import Footer from '../footer'
import Sidebar from '../sidebar'

export default function Layout({children}) {
  return (
    <>
    <div className="w-screen flex  flex-col min-h-screen">
   
    <Sidebar className="w-[250px]" />
    <main className="flex-1 md:ml- mx-auto justify-items-center align-content-center p-8 bg-gray-50 min-h-screen">

 
{children}
</main>
   </div>
   <Footer className="fixed top-0 left-0 right-0"></Footer>

   </>
  )
}