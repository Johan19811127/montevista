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
 <Header></Header>

    <main className="bg-gradient-to-b from-blue-100 to-blue-300">

 {children}

</main>
 
   <Footer className="fixed top-0 left-0 right-0"></Footer>
   </div>
   </>
  )
}
