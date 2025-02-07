import Image from 'next/image';
import React from 'react';

function Navbar() {
  return (
    <div>
      <header className="text-white body-font bg-black shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-indigo-400 transition-all duration-300">
            
            
              
          <Image className='rounded-full h-12 w-12'
          
          src="/image.png"
          alt='LOGO'
          height={1000}
          width={1000}
          
          
          
          
          
          
          />
            
          
            <span className="ml-3 text-xl">Sana G.Qadir</span>
          </a>
          
          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">Home</a>
            <a  href='/About'   className="mr-5 hover:text-yellow-400 transition-all duration-300 transform hover:scale-105" >About</a>
            <a className="mr-5 hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">Service</a>
            <a href='/Contact'      className="mr-5 hover:text-yellow-400 transition-all duration-300 transform hover:scale-105" >Contact</a>
          </nav>
          
          {/* Contact Button */}
          <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0 transition-all duration-300 transform hover:scale-105">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;