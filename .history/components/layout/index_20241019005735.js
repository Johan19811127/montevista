import React from 'react'
import Header from '../navbar'
import Footer from '../footer'
import Sidebar from '../sidebar'
import TopNav from '../navbar/topnav'
import NavLinks from '../navbar/navlink'


export default function Layout({children}) {
  return (
    <>
    <div className="w-screen flex  flex-col min-h-screen">
   <TopNav></TopNav>
 
 
    <main className="flex-1  me-auto justify-items-center align-content-center p-8 bg-gray-50 min-h-screen">

 {children}

</main>
 
   <Footer className="fixed top-0 left-0 right-0"></Footer>
   </div>
   </>
  )
}
