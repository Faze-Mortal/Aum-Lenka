import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple parallax layers
    const layers = [
      { speed: 0.2, opacity: 0.05, size: 'large' },
      { speed: 0.4, opacity: 0.08, size: 'medium' },
      { speed: 0.6, opacity: 0.1, size: 'small' },
      { speed: 0.8, opacity: 0.05, size: 'tiny' }
    ];

    layers.forEach((layer, index) => {
      const layerElement = document.createElement('div');
      layerElement.className = `parallax-layer layer-${index}`;
      layerElement.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        pointer-events: none;
        z-index: ${index + 1};
      `;

      // Add floating shapes to each layer
      const shapeCount = layer.size === 'large' ? 3 : layer.size === 'medium' ? 5 : layer.size === 'small' ? 8 : 12;
      
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeSize = layer.size === 'large' ? 100 : layer.size === 'medium' ? 60 : layer.size === 'small' ? 30 : 15;
        
        shape.style.cssText = `
          position: absolute;
          width: ${shapeSize}px;
          height: ${shapeSize}px;
          background: linear-gradient(45deg, rgba(59, 130, 246, ${layer.opacity * 0.3}), rgba(147, 51, 234, ${layer.opacity * 0.2}));
          border-radius: ${Math.random() > 0.5 ? '50%' : '20%'};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          filter: blur(${Math.random() * 3 + 1}px);
        `;

        layerElement.appendChild(shape);

        // Floating animation
        gsap.to(shape, {
          y: `+=${Math.random() * 100 - 50}`,
          x: `+=${Math.random() * 50 - 25}`,
          rotation: Math.random() * 360,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      container.appendChild(layerElement);
      layersRef.current.push(layerElement);

      // Parallax scroll effect
      gsap.to(layerElement, {
        yPercent: -50 * layer.speed,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => {
      layersRef.current.forEach(layer => {
        if (layer.parentNode) {
          layer.parentNode.removeChild(layer);
        }
      });
      layersRef.current = [];
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParallaxBackground;

