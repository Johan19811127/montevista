import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
    <div>
        <div className="container-fluid footer mt-auto py-1 ">
       <footer className="sticky-bottom d-flex flex-wrap justify-content-between  align-self-bottom justify-self-bottom align-items-center py-4 my-0  ps-2 ">
           <div className='row w-100 pb-4'>
            
       <div href="#" className=" col-lg-2 col-md-2 col-sm-0 d-flex align-items-center px-3 justify-content-center  link-body-emphasis text-decoration-none">
          <Image src="/Images/Badge Own.png" width="150" height="150" alt="Monte Vista School Badge" className="footerimg d-none d-md-block"></Image>
         </div>
         <div className="col-sm-12 col-md-5 col-lg-4 mb-0 py-2 pe-2">
           <h5 className="t-footer m-0 p-0 fw-bolder ms-3"><span className="me-3"><i className="bi bi-shop-window"></i></span>Monte Vista Primary School</h5>
              <hr  className="fine mb-3 mt-0" ></hr>
   <p className="t-footer m-0 p- mt-1" ><span className="mx-3"><i className="bi bi-shop"></i></span>40 Huising Avenue, Monte Vista , 7460 </p>
   <p className="t-footer m-0 p-0 py-1" ><span className="mx-3"><i className="bi bi-envelope"></i></span>clothingstore@montevistaps.co.za </p>
   
   <p className="t-footer m-0 p-0 py-1"><span className="mx-3"><i className="bi bi-telephone"></i></span>(021) 558 4637 </p>    
   <p className="t-footer m-0 p-0 py-1">
    <span className="mx-3 ">
        <i className="bi bi-watch pt-3"></i></span>
        Trading hours for School Shop <br></br>
        <span className="ms-5 ps-2 pt-2">Tue: 7:30am - 8:30am</span> 
        <br></br>  <span className="ms-5 ps-2 pt-2">Wed: 1:00pm - 2:45pm</span>
        </p>    
         </div>
     

         
         <div className=" col-lg-3 col-md-5 d-flex align-items-start flex-column justify-content-start pb-auto py-2 px-3">
              <h5 className="t-footer fw-bolder m-0 p-0"><span className="me-3"><i className="bi bi-info-circle"></i></span>Additional Information</h5>
                         
     <hr  className="fine mb-3 mt-0 p-0" ></hr>
   
     <Link href="#" className="t-footer lh-1 m-0 p-0 ps-3" >
      
        Prescribed School Uniform
       
      
     </Link>
       
   
        
     <Link href="/catalogue" className="t-footer m-0 p-0 ps-3" >
     Our Full Catalogue
       
   
      
     </Link>
       <a href="#" className="t-footer m-0 p-0 ps-3" >
    Sizing Charts
       
   
      
     </a>
   
           <h5 className="t-footer fw-bolder m-0 p-0 mt-3"><span className="me-3"><i className="bi bi-truck"></i></span>Policies and procedures</h5>
         <hr  className="fine mb-3 mt-0 p-0"></hr>
   
           <Link href="/terms" className="m-0 p-0 t-footer ps-3"  >
      
        Terms and Conditions
       
   
     
      
     </Link>
   
   
   
    <Link href="/delivery"  className="t-footer m-0 p-0 ps-3">
    
         Delivery Proses
       
      
      
     </Link>
       
        
    
         </div>
         <div className=" col-lg-3 col-md-5 d-flex align-items-start flex-column justify-content-start pb-auto pt-2 ps-3">
            <Image src="/Images/Tablet.png" width="300" height="300" className="footerimg d-none d-lg-block" alt="Monte School bags available from Monte vista Primary School"></Image>
            </div>
     </div>
     
     <div className="b-example-divider m-0 p-0 mb-2"></div>
   
       <hr  className="my-1 fine w-100"></hr>
     <div className="container-fluid text-center pt-2" >
       
      
           
           <p className="my-2 mb-md-0 t-footer text-center" >&copy; 2023 Monte Vista Primary School</p>
    
     
        
      
     </div>
   
   </footer>
   </div>
   </div>
   </div>
  )
}
