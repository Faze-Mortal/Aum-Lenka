import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, Zap, Cpu, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const cardsRef = useRef();
  const [hoveredProject, setHoveredProject] = useState(null);

  useGSAP(() => {
    if (!projectsRef.current) return;
    const cards = cardsRef.current.children;
    
    gsap.fromTo(cards, {
      opacity: 0,
      y: 100,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: projectsRef.current });

  const projects = [
    {
      id: 1,
      title: "Pixel Phrase",
      subtitle: "AI-Powered Content Transformation Platform",
      description: "An innovative platform that leverages Gemini's free API to transform, rewrite, translate, summarize, and expand text content. Perfect for students, educators, and content creators who need intelligent text processing capabilities.",
      longDescription: "Pixel Phrase represents the intersection of AI and creative coding, offering users a comprehensive suite of text transformation tools. The platform intelligently adapts content for different audiences while preserving original meaning and context.",
      technologies: ["React", "JavaScript", "Gemini API", "Tailwind CSS", "Vite"],
      features: [
        "Multi-language translation",
        "Content summarization",
        "Audience-specific rewriting",
        "Text expansion & condensation",
        "Creative content generation"
      ],
      category: "AI & Machine Learning",
      status: "Completed",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600",
      demoUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Portfolio Website",
      subtitle: "Interactive Motion-Driven Portfolio",
      description: "A modern, highly interactive portfolio website featuring advanced animations, dynamic skill visualizations, and responsive design. Built with React, Framer Motion, and GSAP for smooth user experiences.",
      longDescription: "This portfolio showcases cutting-edge web development techniques, combining aesthetic design with functional interactivity. Every element is carefully crafted to provide an engaging user experience while maintaining optimal performance.",
      technologies: ["React", "Framer Motion", "GSAP", "Tailwind CSS", "Vite"],
      features: [
        "Scroll-triggered animations",
        "Interactive skill constellation",
        "Responsive design",
        "Modern UI/UX",
        "Performance optimized"
      ],
      category: "Web Development",
      status: "In Progress",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      demoUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "AI Learning Assistant",
      subtitle: "Personalized Education Platform",
      description: "An intelligent learning platform that adapts to individual learning styles and provides personalized content recommendations. Features include progress tracking, interactive quizzes, and AI-powered study plans.",
      longDescription: "Combining educational psychology with modern AI, this platform creates personalized learning experiences that adapt to each user's pace and preferences, making education more accessible and effective.",
      technologies: ["Python", "React", "TensorFlow", "Node.js", "MongoDB"],
      features: [
        "Adaptive learning algorithms",
        "Progress analytics",
        "Interactive content",
        "Personalized recommendations",
        "Multi-modal learning"
      ],
      category: "AI & Education",
      status: "Concept",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      demoUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Creative Studio Dashboard",
      subtitle: "Design Workflow Management",
      description: "A comprehensive dashboard for creative professionals to manage projects, collaborate with teams, and track design workflows. Features include asset management, version control, and client feedback integration.",
      longDescription: "Streamlining the creative process through intelligent workflow management, this dashboard brings together all the tools designers need in one cohesive, beautifully designed interface.",
      technologies: ["React", "Node.js", "PostgreSQL", "Adobe APIs", "WebSocket"],
      features: [
        "Project management",
        "Asset organization",
        "Team collaboration",
        "Version control",
        "Client feedback system"
      ],
      category: "Design & Productivity",
      status: "Planning",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-pink-500 to-violet-600",
      demoUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'In Progress': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Concept': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Planning': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions combining AI, web development, and creative design 
            to solve real-world problems and enhance user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group relative bg-gray-900/50 rounded-2xl border border-gray-800/50 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Project Image/Visual */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${project.gradient}`}>
                    {project.icon}
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    x: [-3, 3, -3],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-4">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Features (shown on hover) */}
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: hoveredProject === project.id ? 'auto' : 0,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <h4 className="text-white font-medium text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.title === "Pixel Phrase" && (
                    <motion.a
                      href="https://pixel-phrase-v5.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors text-sm font-medium border border-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Website
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Faze-Mortal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

