import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (speed = 0.5, direction = 'vertical') => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let tl;

    if (direction === 'vertical') {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const yPos = progress * speed * 100;
            gsap.set(element, { y: yPos });
          }
        }
      });
    } else if (direction === 'horizontal') {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const xPos = progress * speed * 100;
            gsap.set(element, { x: xPos });
          }
        }
      });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [speed, direction]);

  return elementRef;
};

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      ...options
    };

    gsap.fromTo(element, 
      { 
        y: defaultOptions.y, 
        opacity: defaultOptions.opacity 
      },
      {
        y: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return elementRef;
};

export const useFloatingElements = (count = 5) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const elements = [];
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.cssText = `
        position: absolute;
        width: ${Math.random() * 20 + 10}px;
        height: ${Math.random() * 20 + 10}px;
        background: rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
      `;
      
      // Random positioning
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(element);
      elements.push(element);

      // Animate floating motion
      gsap.to(element, {
        y: `+=${Math.random() * 100 - 50}`,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Parallax effect on scroll
      gsap.to(element, {
        y: `+=${Math.random() * 200 - 100}`,
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: Math.random() * 2 + 1
        }
      });
    }

    return () => {
      elements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [count]);

  return containerRef;
};

