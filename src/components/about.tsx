import React from 'react';

function About() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-10 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-center text-white text-5xl font-serif font-extrabold mb-4 transition-all duration-500 transform hover:text-yellow-300">
              About Me
            </h1>
            <p className="leading-relaxed text-lg text-white mb-6 opacity-90 transition-all duration-500 hover:opacity-100">
              Hello! I am a passionate web developer with a strong focus on creating dynamic and responsive websites. 
              I specialize in front-end technologies like React, HTML, CSS, and JavaScript, building beautiful, 
              user-friendly experiences. My goal is to solve real-world problems through clean, efficient code. 
              I am constantly learning new technologies to stay ahead in the fast-evolving world of web development.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-8 mb-6 transition-all duration-500 transform hover:w-20" />
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              Sana G.Qadir
            </h2>
            <p className="text-yellow-100">Web Developer & UI/UX Enthusiast</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
