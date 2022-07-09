import React from 'react';

function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Yahmin 👋</h2>
        <p className="text-xl mb-8">A passionate Web Developer building awesome websites.</p>
        <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100">
          View My Work
        </a>
      </section>
    );
}

export default Hero;
