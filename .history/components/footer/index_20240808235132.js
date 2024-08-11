
// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-semibold">Monte Vista Primary School</h5>
              <p className="text-sm">Cape Town, South Africa</p>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
            <div>
              <p className="text-sm text-gray-400">&copy; 2024 Monte Vista Primary School. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

