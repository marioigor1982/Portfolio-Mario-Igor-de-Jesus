import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const backgroundImages = [
  'https://i.postimg.cc/13pzY7SG/IGOR.jpg',
  'https://i.postimg.cc/pTQ7w8Tg/IGOR2.jpg',
  'https://i.postimg.cc/sgZnFSHG/IGOR3.jpg',
  'https://i.postimg.cc/mkw8sfZz/Gemini-Generated-Image-njkyrrnjkyrrnjky.png',
];

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // 4 seconds

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="font-sans leading-relaxed text-gray-300">
       <div className="fixed inset-0 -z-10">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(to top, rgba(14, 165, 233, 0.25), transparent 50%)' }}
        ></div>
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
