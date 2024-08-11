import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
        <Head>
            <title></title>
        </Head>
  <header >
       <Image src="/Images/Delivery process.png" className="hero" width="1980" height="670" alt="Delivery Procedure for Monte Vista Primary Online Store" ></Image>
        </header>
         <div className="row mt-3 p-3" >
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 text-justify">
            <h1 className="text-center">Our Delivery Process</h1>
 
 <p>
We have streamlined the process for purchasing school uniforms and accessories from Monte Vista Primary's Online Store. Once you place your order, the goods will be delivered to the learner within five working days.</p>

<p >We kindly request that urgent orders not be paid for via EFT, as it can take up to three working days for payment verification. Instead, we suggest using Snapscan for faster payment verification, allowing for more efficient delivery. If EFT is the only available payment option, immediate payment is advised. Goods will only be released once funds reflect in our bank account.</p>

<p>
All orders will undergo four steps for successful delivery. Step one involves receiving the order, with payment verification still pending. Once payment is verified, the order proceeds to step two, and is then ready for dispatch. Step three involves picking and packing the order, making it ready for handover to the learner. Finally, step four denotes completion of the order and successful handover of the goods to the learner.</p>


<p >
For added convenience, order tracking is available on the online store. Simply enter the invoice number and email used for placing the order to view the order's detailed status and history.Kindly note that order information will be accessible solely if the invoice number is entered correctly and matches the email address recorded in our system. It is important to enter the invoice number without the abbreviation "INV."</p>

<p >
Orders may also have the status of "Cancelled," and can be cancelled by the user through the online order tracking system. This option is available only if the order status is "Order Received" and "Payment Verified." If an order is cancelled and payment has already been processed, the user will receive an email containing a voucher for future purchases. Refunds will only be processed if the Monte Vista Primary Online Store is deemed to be at fault.
</p>

<p >
Additionally, the system may cancel orders if payment is not received within three days of the order being placed. Such cancelled orders will be marked as "Cancelled by System."
</p>


<p >
In the event that you require any clarification or have any questions regarding the content of this document, please do not hesitate to reach out to us at <a href="mailto:clothingstore@montevistaps.co.za" target="blank">clothingstore@montevistaps.co.za</a>. We are always happy to assist you.
</p>


          </div>
         
        </div>
            <div className="row my-3 ">
          <div className="col-md-4"></div>
          <div className="col-md-4">
         <Link href="/" className="signin btn" >BACK TO STORE</Link>
          </div>
        </div>






        </div>
  )
}
