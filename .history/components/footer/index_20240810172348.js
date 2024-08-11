import Image from "next/image";

Image

const Footer = () => {
    return (
      <footer className="bg-slate-300 text-white py-12">
        <div className="container mx-auto px-4 flrx">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div className="col-span-1">
              <Image width="200" height="250" src="/Badge.png" alt="Logo" className="w-24 mb-4" />
              <p className="text-sm">
                Monte Vista Primary School <br />
                Cape Town, South Africa
              </p>
            </div>
            
            {/* Shortcut Columns */}
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Column 1</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Link 1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 2</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 4</a></li>
              </ul>
            </div>
  
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Column 2</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Link 1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 2</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 4</a></li>
              </ul>
            </div>
  
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Column 3</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Link 1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 2</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 4</a></li>
              </ul>
            </div>
  
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Column 4</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Link 1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 2</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 4</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; 2024 Monte Vista Primary School. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  

