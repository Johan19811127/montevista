import React from 'react';
import Link from 'next/link';
import { HiShoppingCart } from "react-icons/hi2";
import { LuMessageSquare } from "react-icons/lu";
import Image from 'next/image';




const TopNav = () => {

  // Calculate total number of items in the cart

  return (

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
    
  );
};

export default TopNav;