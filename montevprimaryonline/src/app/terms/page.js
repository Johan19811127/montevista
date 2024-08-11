import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import React from 'react'
import Footer from '../footer'

export default function page() {
  return (
    <div> 
        <header >
    <Image src="/Images/terms and conditions.png" class="hero" width="1980" height="670" alt="Terms and Conditions for Monte Vista Primary Online Store"></Image>
     </header>
     <div className="row mt-3 p-3" >
       <div className="col-lg-3 col-md-2"></div>
       <div className="col-lg-6 col-md-8 px-3 py-3">
 <h1 className="text-center">Terms and Conditions</h1>
 <p>Welcome to Monte Vista Primary - Online Store! These terms and conditions outline the rules and regulations for the use of our website.</p>
 <p>By accessing this website, we assume that you accept these terms and conditions. If you do not agree to all of these terms and conditions, you may not use this website.</p>
 <h4>Cookies</h4>
 <p>We might employ the use of cookies. By using this website, you consent to the use of cookies in accordance with our privacy policy. Most interactive websites use cookies to retrieve user details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people to visit our website.</p>
 <h4>License</h4>
 <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
 <p>You must not:</p>
 <ul>
   <li>Republish material from this website, including republication on another website.</li>      
   <li>Sell, rent or sub-license material from the website.</li>
   <li>Show any material from the website in public.</li>
   <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose.</li>
 </ul>
 <h4>User Content</h4>
 <p>In these terms and conditions, “your user content” means material that you submit to our website, for whatever purpose. You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media.</p>
 <h4>Limitations of Liability</h4>
 <p>We will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>
 <ul>
   <li>To the extent that the website is provided free-of-charge, for any direct loss.</li>
   <li>For any indirect, special or consequential loss.</li>
   <li>For any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
   <li>For any losses arising out of any event beyond our reasonable control.</li>
 </ul>
 <h4>Reservation of Rights</h4>
 <p>We reserve the right at any time and in our sole discretion to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our website upon such request.</p>
 <h4>Variation of Terms</h4>
 <p>We may revise these terms and conditions from time-to-time without notice. The revised terms and conditions shall apply to the use of our website from the date of publication of the revised terms and conditions on our website.</p>
 <h4>Returns Policy</h4>
 <p>We understand that sometimes you may need to return an item, and we want to make the returns process as easy as possible for you. Here are the guidelines for returning an item purchased from our online store:</p>
<ol>
<li>Eligibility: Items purchased from our online store are eligible for return within 14 days of the delivery date, provided they are in their original condition and packaging.</li>

<li>Returns Process: To initiate a return, please contact us via email or phone. We will arrange for the return of the item at a mutually convenient time. Once we receive the returned item, we will inspect it to ensure it is in its original condition and packaging.</li>

<li>Exchanges: We do not currently offer exchanges. If you wish to exchange an item, please return the original item and place a new order for the desired item.</li>

<li>Non-Returnable Items: Some items are non-returnable, including:
<ul>
<li>Personalized items</li>
<li>Items that have been used or damaged</li>
<li>Items that have been opened or taken out of their original packaging</li>
<li>Damaged or Defective Items</li>
</ul>
</li>
</ol>

<p>If an item is damaged or defective upon arrival, please contact us immediately. We will arrange for a replacement or refund as soon as possible.</p>

<p>Please note that we reserve the right to refuse any returns that do not meet the above criteria.</p>

<p>If you have any questions or concerns about our returns policy, please don't hesitate to contact us.</p>

       </div>
      
     </div>
     <div className="row my-3 ">
       <div className="col-md-4"></div>
       <div className="col-md-4 text-center">
      <Link href="/" className="btn signin mb-5 mt-2" >BACK TO STORE</Link>
       </div>
       </div>
    
       </div>
  )
}
