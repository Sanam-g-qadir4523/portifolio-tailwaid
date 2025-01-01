import Image from 'next/image'
import React from 'react'

function Home1() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fadeIn">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text transform transition-all duration-500 hover:scale-105">
              Hello! I am Sana
              <br className="hidden lg:inline-block" />
              I am a Web Developer
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              I create responsive and user-friendly websites using modern technologies.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transform transition-transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Hire Me
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg transform transition-transform hover:scale-105 shadow-lg hover:shadow-2xl">
                View CV
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-slideInRight">
            <Image
              className="object-cover object-center rounded-full shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              alt="hero"
              src="/image.jpg"
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home1
