import React, { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import LandingPage from './components/LandingPage';
import CustomCursor from './components/CustomCursor';
import AnimatedAssets from './components/AnimatedAssets';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const musicRef = useRef(null);

  const handleEnterPortfolio = () => {
    setShowLanding(false);
    if (musicRef.current) {
      musicRef.current.play();
    }
  };

  const handleHomeClick = () => {
    setShowLanding(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="App">
      <CustomCursor />
      <BackgroundMusic ref={musicRef} />
      
      {showLanding ? (
        <LandingPage onEnter={handleEnterPortfolio} />
      ) : (
        <>
          <ParallaxBackground />
          <AnimatedAssets />
          <Navigation onHomeClick={handleHomeClick} />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;

