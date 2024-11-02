import React from 'react';
import Link from 'next/link';
import { HiShoppingCart } from "react-icons/hi2";
import { LuMessageSquare } from "react-icons/lu";
import Image from 'next/image';




const TopNav = () => {

  // Calculate total number of items in the cart

  return (
<>
    <nav className="bg-white shadow-md">
      
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left part with logo and name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
          
              <Image
                src="/Badge.png"
                alt="Logo"
                width="40"
                height="50"
                className="h-10 w-10 -my-2"
              />
              <span className="text-xl font-bold text-gray-800">
                Monte Vista
              </span>
        
          </Link>
        </div>

        {/* Right part with cart, login, and user details */}
        <div className="flex items-center space-x-2  md:space-x-4">
        <Link href="/cart"  className="text-blue-800 hover:text-blue-400">
           
           < LuMessageSquare className="w-7 h-7 mx-2 "/>
             
           </Link>
          <Link href="/cart"  className="text-blue-800 hover:text-blue-400 flex-row flex">
           
          
         
          </Link>

      
        </div>
      </div>
    </nav>
     <nav className="bg-blue-900  fixed shadow-md">
     <div className="container mx-auto px-4 py-2 flex justify-center items-center">
     
       <div className="hidden md:flex items-center space-x-8">
         <Link href="/products" className="text-white hover:text-gray-900">
           Products
         </Link>
         <Link href="/terms" className="text-white hover:text-gray-900">
         Terms and Conditions
         </Link>
         <Link href="/delivery" className="text-white hover:text-gray-900">
           Delivery Process
         </Link>
         <Link href="/contact" className="text-white hover:text-gray-900">
        Contact Us
         </Link>
       </div>

       {/* Right part with cart, login, and user details */}
   

       {/* Mobile menu button */}
       <div className="md:hidden">
         <button
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           className="text-gray-700 hover:text-gray-900 focus:outline-none"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6 text-white "
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth="2"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4 6h16M4 12h16m-7 6h7"
             />
           </svg>
         </button>
       </div>
     </div>

     {/* Mobile menu dropdown */}
     {isMenuOpen && (
       <div className="md:hidden bg-white shadow-md">
         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           <Link href="/products" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
          
               Products
           
           </Link>
           <Link href="/terms" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
           
               Terms and Conditions
           
           </Link>
           <Link href="/delivery" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
          
               Delivery Process
         
           </Link>
           <Link href="/contact" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            
               Contact Us
           
           </Link>
         </div>
       </div>
     )}

   </nav>
   
  );
};

export default TopNav;