import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

export default function page() {
  return (
    <div>
<Head></Head>
<Script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></Script>
   <Link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet"></Link>
<Script id="catwork">




</Script>

<header >
      <Image src="/Images/Full Catalog.png" className="hero" width="1980" height="670" alt="Download the complete catalogue for Monte Vista Online Store"></Image>
       </header>

       <div className="container text-center imgpage" >
        <h2 className="text-center my-4">Our Full Catalogue</h2>
      <p>Whether you're a parent looking for essential school supplies, or a proud supporter of the Monte Vista community seeking to show your school spirit, our online catalog offers a diverse selection to cater to your needs. Explore our collection and discover a world of educational excellence right at your fingertips.</p>
      </div>
       <div className="text-center container w-75">
        <a href="/Images/Monte Vista  School Store Catalogue.pdf" target="blank" download className="signin my-2 imgpage">Download the Full Catalogue</a>
    </div>	
    <div className="container-fluid">
        <div
        id="main-carousel"
        className="splide "
        aria-label="The main carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div className="splide__track">
              <ul className="splide__list">
                  <li className="splide__slide">
                      <Image src="/Images/1.png" width="1200" height="1692"alt="Monte Vista Primary School Online store catalogue page 1 of 3"></Image>
                  </li>
                  <li className="splide__slide">
                      <Image src="/Images/2.png" width="1200" height="1692"alt="Monte Vista Primary School Online store catalogue page 2 of 3"></Image>
                  </li>
                  <li className="splide__slide">
                      <Image src="/Images/3.png" width="1200" height="1692" alt="Monte Vista Primary School Online store catalogue page 3 of 3"></Image>
                  </li>
                 
              </ul>
        </div>
        </div>
    </div>

            
        
   
       <div className="row my-3 ">
         <div className="col-md-4"></div>
         <div className="col-md-4">
        <Link href="/" className="signin mb-5 mt-2">BACK TO STORE</Link>
         </div>





    </div>
    </div>
  )
}
