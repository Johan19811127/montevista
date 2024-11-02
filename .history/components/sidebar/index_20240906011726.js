// components/Sidebar.js

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-full min-h-screen flex flex-col px-5 print:hidden">
        
      {/* Sidebar Header */}
      <div className="p-4 text-center ">
      <Image src="/badge.png" width='100' height='100' alt="School badge" className='mx-auto'/>
      </div>
<h3 className="text-xl font-semibold "
      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <Link href="/" className="flex items-center p-2 text-md font-medium  hover:bg-gray-700 hover:text-white rounded-md">
              
              
                <span className="text-md ">Home</span>
             
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex items-center p-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
             
                <span>📁</span>
                <span className="ml-3">Projects</span>
           
            </Link>
          </li>
          <li>
            <Link href="/reports"className="flex items-center p-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
            
                <span>📊</span>
                <span className="ml-3">Reports</span>
            
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center p-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
           
                <span>⚙️</span>
                <span className="ml-3">Settings</span>
         
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 bg-gray-900">
        <Link href="/logout" className="flex items-center p-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
    
            <span>🔒</span>
            <span className="ml-3">Logout</span>
  
        </Link>
      </div>
    </aside>
  );
}
