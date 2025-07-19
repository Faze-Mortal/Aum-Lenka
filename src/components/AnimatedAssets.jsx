import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Cpu, Database, Globe, Lightbulb, Rocket, Zap, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedAssets = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating tech icons
    const techIcons = [
      { Icon: Code, color: 'text-blue-400', delay: 0 },
      { Icon: Cpu, color: 'text-purple-400', delay: 0.2 },
      { Icon: Database, color: 'text-green-400', delay: 0.4 },
      { Icon: Globe, color: 'text-cyan-400', delay: 0.6 },
      { Icon: Lightbulb, color: 'text-yellow-400', delay: 0.8 },
      { Icon: Rocket, color: 'text-red-400', delay: 1.0 },
      { Icon: Zap, color: 'text-orange-400', delay: 1.2 },
      { Icon: Star, color: 'text-pink-400', delay: 1.4 },
    ];

    // Animate floating icons
    techIcons.forEach(({ delay }, index) => {
      const icon = container.querySelector(`.tech-icon-${index}`);
      if (icon) {
        gsap.set(icon, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5,
        });

        gsap.to(icon, {
          y: '-=50',
          rotation: '+=180',
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay: delay,
        });

        // Scroll-triggered animation
        ScrollTrigger.create({
          trigger: icon,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(icon, {
              y: self.progress * -100,
              rotation: self.progress * 360,
              duration: 0.3,
            });
          },
        });
      }
    });

    // Create animated code snippets
    const codeElements = container.querySelectorAll('.code-snippet');
    codeElements.forEach((element, index) => {
      gsap.set(element, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        rotation: Math.random() * 20 - 10,
      });

      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(element, {
            opacity: self.progress,
            x: (index % 2 === 0 ? -100 : 100) * (1 - self.progress),
            rotation: (Math.random() * 20 - 10) * (1 - self.progress),
            duration: 0.3,
          });
        },
      });
    });

    // Create floating geometric shapes
    const shapes = container.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
      gsap.set(shape, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: 0.3 + Math.random() * 0.7,
      });

      gsap.to(shape, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: '+=360',
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: shape,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
        onUpdate: (self) => {
          gsap.to(shape, {
            y: self.progress * -200,
            rotation: self.progress * 180,
            scale: 0.3 + (0.7 * self.progress),
            duration: 0.3,
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const techIcons = [
    { Icon: Code, color: 'text-blue-400' },
    { Icon: Cpu, color: 'text-purple-400' },
    { Icon: Database, color: 'text-green-400' },
    { Icon: Globe, color: 'text-cyan-400' },
    { Icon: Lightbulb, color: 'text-yellow-400' },
    { Icon: Rocket, color: 'text-red-400' },
    { Icon: Zap, color: 'text-orange-400' },
    { Icon: Star, color: 'text-pink-400' },
  ];

  const codeSnippets = [
    'const innovation = () => creativity + technology;',
    'function buildFuture() { return passion * skills; }',
    'class Developer { constructor() { this.dreams = ∞; } }',
    'AI.learn(experience).then(success);',
    'while(learning) { skills++; }',
    'export default AumLenka;',
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, color }, index) => (
        <div
          key={index}
          className={`tech-icon-${index} absolute ${color} opacity-20`}
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index * 8)}%`,
          }}
        >
          <Icon size={24 + Math.random() * 16} />
        </div>
      ))}

      {/* Animated Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="code-snippet absolute text-xs font-mono text-gray-500 bg-gray-800/20 px-3 py-2 rounded backdrop-blur-sm border border-gray-700/30"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${30 + (index * 15)}%`,
            maxWidth: '200px',
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Floating Geometric Shapes */}
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="floating-shape absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {index % 3 === 0 && (
            <div className="w-8 h-8 border-2 border-blue-400 rounded-full" />
          )}
          {index % 3 === 1 && (
            <div className="w-6 h-6 bg-purple-400 transform rotate-45" />
          )}
          {index % 3 === 2 && (
            <div className="w-10 h-1 bg-cyan-400" />
          )}
        </div>
      ))}

      {/* Animated Particles */}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedAssets;

