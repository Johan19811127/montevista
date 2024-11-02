import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the submenu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle submenu visibility
  };
  
  
  return (
  
    <aside className="w-full min-h-screen flex flex-col px-5 print:hidden">
        
      {/* Sidebar Header */}
      <div className="p-4 text-center ">
      <Image src="/badge.png" width='100' height='100' alt="School badge" className='mx-auto'/>
      </div>
<h3 className="text-xl font-semibold text-center mb-5">MENU</h3>
      {/* Navigation Links */}
      <div className="flex flex-col p-4">
        {/* Main menu item */}
        <button
          className="flex justify-between items-center p-2 hover:bg-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <span>Home</span>
          <svg
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Submenu that expands/collapses */}
        {isOpen && (
          <div className="flex flex-col pl-4 space-y-2 mt-2">
            <a href="#" className="p-2 hover:bg-gray-700">
             Introduction
            </a>
            <a href="#" className="p-2 hover:bg-gray-700">
              Section 2
            </a>
            <a href="#" className="p-2 hover:bg-gray-700">
              Section 3
            </a>
          </div>
        )}
      </div>

      {/* Other Menu Items (you can add more) */}
      <div className="flex flex-col p-4">
        <a href="#" className="p-2 hover:bg-gray-700">
          Contact
        </a>
        <a href="#" className="p-2 hover:bg-gray-700">
          About
        </a>
      </div>
    
    </aside>
  );
}
