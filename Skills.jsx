import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Server,
  Palette,
  Zap
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', level: 95, description: 'Advanced component architecture & hooks' },
        { name: 'Next.js', level: 90, description: 'SSR, SSG, and full-stack applications' },
        { name: 'TypeScript', level: 85, description: 'Type-safe development practices' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first responsive design' },
        { name: 'Framer Motion', level: 88, description: 'Advanced animations & interactions' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 90, description: 'Scalable server-side applications' },
        { name: 'Python', level: 88, description: 'Django, Flask, and data processing' },
        { name: 'PostgreSQL', level: 85, description: 'Complex queries and optimization' },
        { name: 'MongoDB', level: 82, description: 'NoSQL database design' },
        { name: 'GraphQL', level: 80, description: 'Efficient API development' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'TensorFlow', level: 85, description: 'Deep learning model development' },
        { name: 'PyTorch', level: 82, description: 'Neural network implementation' },
        { name: 'OpenAI API', level: 90, description: 'LLM integration and fine-tuning' },
        { name: 'Computer Vision', level: 78, description: 'Image processing and analysis' },
        { name: 'NLP', level: 80, description: 'Text analysis and generation' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Zap,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Docker', level: 85, description: 'Containerization and deployment' },
        { name: 'AWS', level: 82, description: 'Cloud infrastructure management' },
        { name: 'Git', level: 95, description: 'Version control and collaboration' },
        { name: 'CI/CD', level: 80, description: 'Automated testing and deployment' },
        { name: 'Kubernetes', level: 75, description: 'Container orchestration' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 border border-border hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1 : 0,
                        y: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 0 : 10
                      }}
                      className="absolute -top-12 left-0 right-0 bg-popover border border-border rounded-lg p-2 text-sm text-popover-foreground shadow-lg z-10"
                    >
                      {skill.description}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Technology I Have Worked With</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              'CSS3', 'HTML5', 'JAVASCRIPT', 'PYTHON', 'VERCEL', 'NETLIFY', 'RENDER', 'ANACONDA', 'NODE.JS', 'NPM',
              'PNPM', 'REACT', 'VITE', 'TAILWINDCSS', 'ADOBE AFTER EFFECTS', 'ADOBE LIGHTROOM', 'ADOBE',
              'ADOBE PREMIERE PRO', 'ADOBE PHOTOSHOP', 'CANVA', 'PANDAS', 'GIT', 'GITHUB'
            ].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="px-5 py-2 rounded-xl font-bold border-2 border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-default select-none"
                style={{ letterSpacing: '0.03em', fontSize: '1rem' }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

