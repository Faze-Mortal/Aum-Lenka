import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';

const SkillConstellation = () => {
  const constellationRef = useRef();
  const canvasRef = useRef();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: 'react',
      name: 'React',
      category: 'frontend',
      level: 90,
      description: 'Building dynamic user interfaces with modern React patterns',
      connections: ['javascript', 'tailwind', 'vite'],
      position: { x: 300, y: 200 },
      color: '#61DAFB'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'programming',
      level: 85,
      description: 'Core language for web development and interactive experiences',
      connections: ['react', 'python', 'git'],
      position: { x: 200, y: 150 },
      color: '#F7DF1E'
    },
    {
      id: 'python',
      name: 'Python',
      category: 'programming',
      level: 80,
      description: 'Versatile language for AI, data science, and backend development',
      connections: ['ai', 'javascript', 'git'],
      position: { x: 400, y: 100 },
      color: '#3776AB'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 85,
      description: 'Utility-first CSS framework for rapid UI development',
      connections: ['react', 'vite', 'design'],
      position: { x: 350, y: 300 },
      color: '#06B6D4'
    },
    {
      id: 'git',
      name: 'Git',
      category: 'tools',
      level: 75,
      description: 'Version control and collaborative development workflows',
      connections: ['javascript', 'python', 'vscode'],
      position: { x: 150, y: 250 },
      color: '#F05032'
    },
    {
      id: 'vite',
      name: 'Vite',
      category: 'tools',
      level: 80,
      description: 'Fast build tool and development server for modern web projects',
      connections: ['react', 'tailwind'],
      position: { x: 450, y: 200 },
      color: '#646CFF'
    },
    {
      id: 'ai',
      name: 'AI/ML',
      category: 'technology',
      level: 70,
      description: 'Artificial Intelligence and Machine Learning applications',
      connections: ['python', 'creativity'],
      position: { x: 500, y: 150 },
      color: '#FF6B6B'
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      category: 'creative',
      level: 75,
      description: 'User interface and experience design principles',
      connections: ['tailwind', 'photoshop', 'creativity'],
      position: { x: 250, y: 350 },
      color: '#9C88FF'
    },
    {
      id: 'photoshop',
      name: 'Photoshop',
      category: 'creative',
      level: 70,
      description: 'Digital image editing and graphic design',
      connections: ['design', 'creativity'],
      position: { x: 100, y: 300 },
      color: '#31A8FF'
    },
    {
      id: 'vscode',
      name: 'VS Code',
      category: 'tools',
      level: 90,
      description: 'Primary development environment and code editor',
      connections: ['git', 'javascript', 'python'],
      position: { x: 100, y: 150 },
      color: '#007ACC'
    },
    {
      id: 'creativity',
      name: 'Creative Coding',
      category: 'mindset',
      level: 85,
      description: 'Combining artistic vision with technical implementation',
      connections: ['ai', 'design', 'photoshop'],
      position: { x: 400, y: 350 },
      color: '#FF9500'
    }
  ];

  useGSAP(() => {
    // Initial animation for skill nodes
    const nodes = constellationRef.current.querySelectorAll('.skill-node');
    
    gsap.fromTo(nodes, {
      scale: 0,
      opacity: 0,
      rotation: 180
    }, {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    // Floating animation for nodes
    nodes.forEach((node, index) => {
      gsap.to(node, {
        y: `+=${Math.sin(index) * 10}`,
        duration: 3 + Math.random() * 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      });
    });

  }, { scope: constellationRef });

  // Draw connections between skills
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      skills.forEach(skill => {
        skill.connections.forEach(connectionId => {
          const connectedSkill = skills.find(s => s.id === connectionId);
          if (!connectedSkill) return;

          const isHighlighted = hoveredSkill === skill.id || hoveredSkill === connectionId;
          const opacity = isHighlighted ? 0.8 : 0.2;
          
          ctx.beginPath();
          ctx.moveTo(skill.position.x, skill.position.y);
          ctx.lineTo(connectedSkill.position.x, connectedSkill.position.y);
          ctx.strokeStyle = isHighlighted ? skill.color : '#00d4ff';
          ctx.globalAlpha = opacity;
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.stroke();
        });
      });
    };

    drawConnections();
  }, [hoveredSkill]);

  const handleSkillHover = (skillId) => {
    setHoveredSkill(skillId);
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'from-blue-500 to-cyan-500',
      programming: 'from-yellow-500 to-orange-500',
      tools: 'from-green-500 to-emerald-500',
      creative: 'from-purple-500 to-pink-500',
      technology: 'from-red-500 to-rose-500',
      mindset: 'from-orange-500 to-amber-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="relative w-full h-96 bg-gray-900/30 rounded-2xl border border-gray-700/50 overflow-hidden">
      {/* Canvas for connections */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Skill nodes */}
      <div ref={constellationRef} className="relative w-full h-full">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill-node absolute cursor-pointer"
            style={{
              left: `${(skill.position.x / 600) * 100}%`,
              top: `${(skill.position.y / 400) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => handleSkillHover(skill.id)}
            onMouseLeave={() => handleSkillHover(null)}
            onClick={() => handleSkillClick(skill)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Skill node */}
            <div
              className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor(skill.category)} 
                         flex items-center justify-center text-white font-bold text-sm shadow-lg
                         ${hoveredSkill === skill.id ? 'ring-4 ring-blue-400/50' : ''}
                         ${selectedSkill?.id === skill.id ? 'ring-4 ring-green-400/50' : ''}`}
              style={{
                boxShadow: hoveredSkill === skill.id 
                  ? `0 0 20px ${skill.color}40` 
                  : '0 4px 15px rgba(0,0,0,0.3)'
              }}
            >
              {skill.name.charAt(0)}
              
              {/* Skill level indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>

            {/* Hover tooltip */}
            <motion.div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: hoveredSkill === skill.id ? 1 : 0,
                y: hoveredSkill === skill.id ? 0 : 10
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-medium">{skill.name}</div>
              <div className="text-xs text-gray-400">Level: {skill.level}%</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Skill details panel */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: selectedSkill ? 1 : 0,
          y: selectedSkill ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: selectedSkill ? 'auto' : 'none' }}
      >
        {selectedSkill && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div 
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${getCategoryColor(selectedSkill.category)} flex items-center justify-center text-white font-bold text-sm`}
              >
                {selectedSkill.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-semibold">{selectedSkill.name}</h4>
                <p className="text-gray-400 text-sm capitalize">{selectedSkill.category}</p>
              </div>
              <div className="ml-auto">
                <div className="text-right">
                  <div className="text-white font-medium">{selectedSkill.level}%</div>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{selectedSkill.description}</p>
            
            {/* Connected skills */}
            <div className="mt-3">
              <p className="text-gray-400 text-xs mb-2">Connected to:</p>
              <div className="flex flex-wrap gap-1">
                {selectedSkill.connections.map(connectionId => {
                  const connectedSkill = skills.find(s => s.id === connectionId);
                  return connectedSkill ? (
                    <span
                      key={connectionId}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                    >
                      {connectedSkill.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 text-gray-400 text-sm">
        <p>Hover to explore • Click for details</p>
      </div>
    </div>
  );
};

export default SkillConstellation;

