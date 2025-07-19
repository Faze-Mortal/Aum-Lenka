import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import LandingPage from './components/LandingPage';
import CustomCursor from './components/CustomCursor';
import AnimatedAssets from './components/AnimatedAssets';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleEnterPortfolio = () => {
    setShowLanding(false);
  };

  return (
    <div className="App">
      <CustomCursor />
      
      {showLanding ? (
        <LandingPage onEnter={handleEnterPortfolio} />
      ) : (
        <>
          <ParallaxBackground />
          <AnimatedAssets />
          <Navigation />
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

