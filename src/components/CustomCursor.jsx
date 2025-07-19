import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth cursor animation
    const animateCursor = () => {
      const speed = 0.15;
      
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      gsap.set(cursor, {
        x: cursorX - 20,
        y: cursorY - 20,
      });

      gsap.set(cursorDot, {
        x: mouseX - 2,
        y: mouseY - 2,
      });

      requestAnimationFrame(animateCursor);
    };

    // Handle hover states
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target instanceof Element && target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true);
        setCursorText(target.dataset.cursorText || '');
        
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target instanceof Element && target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(false);
        setCursorText('');
        
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Start animation
    animateCursor();

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-80'
        }`}
        style={{ mixBlendMode: 'difference' }}
      >
        <div className="relative w-full h-full">
          {/* Outer Ring */}
          <div 
            className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
              isHovering 
                ? 'border-white bg-white/10 backdrop-blur-sm' 
                : 'border-blue-400 bg-blue-400/10'
            }`}
          />
          
          {/* Inner Glow */}
          <div 
            className={`absolute inset-2 rounded-full transition-all duration-300 ${
              isHovering 
                ? 'bg-white/20' 
                : 'bg-blue-400/20'
            }`}
          />

          {/* Cursor Text */}
          {cursorText && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                {cursorText}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ mixBlendMode: 'difference' }}
      />

      {/* Cursor Trail Effect */}
      <div className="fixed inset-0 pointer-events-none z-[9998]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="cursor-trail absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              animationDelay: `${i * 50}ms`,
              animationDuration: '1s',
              animationIterationCount: 'infinite',
              animationName: 'cursorTrail'
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes cursorTrail {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

