import React from 'react'
import Header from '../navbar'

export default function Layout({children}) {
  return (
    <>
   <Header></Header>
   <div className="container ">
{children}

   </div>
   </>
  )
}
