import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '../hooks/useParallax';
import { MapPin, Calendar, GraduationCap, Code, Palette, Brain, Award, Target, Users, Lightbulb, TrendingUp, Star } from 'lucide-react';
import SkillConstellation from './SkillConstellation';
import ExtraActivities from './ExtraActivities';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const timelineRef = useScrollReveal({ y: 100, duration: 1.2 });
  const skillsRef = useScrollReveal({ y: 80, duration: 1, delay: 0.3 });

  useEffect(() => {
    const aboutSection = aboutRef.current;
    if (!aboutSection) return;

    // Parallax effect for the entire section
    gsap.to(aboutSection, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Staggered animation for timeline items
    const timelineItems = aboutSection.querySelectorAll('.timeline-item');
    gsap.fromTo(timelineItems, 
      { 
        opacity: 0, 
        x: -50,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Skill cards animation
    const skillCards = aboutSection.querySelectorAll('.skill-card');
    gsap.fromTo(skillCards,
      {
        opacity: 0,
        y: 30,
        rotationY: 15
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillCards[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, []);

  const timelineData = [
    {
      year: '2025',
      status: 'Ongoing',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Manipal University, Jaipur (MUJ)',
      description: 'Currently pursuing degree with focus on AI, web development, and software engineering.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      year: '2025',
      status: 'Ongoing',
      title: 'Minor in Artificial Intelligence and Data Science',
      institution: 'IIT-Mandi',
      description: 'Currently pursuing specialized certification in AI/ML technologies and data science methodologies.',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      year: '2025',
      status: 'Completed',
      title: 'Pixel Phrase Project',
      institution: 'Personal Project',
      description: 'AI-powered content transformation platform using Gemini API for text processing and creative content generation.',
      icon: <Code className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      year: '2025',
      status: 'Completed',
      title: 'Higher Secondary Education (Class 12th)',
      institution: 'The Vivekanand School',
      description: 'Completed senior secondary education with focus on Science stream, building foundation for engineering studies.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      year: '2023',
      status: 'Completed',
      title: 'Secondary Education (Class 10th)',
      institution: 'GD Goenka International School',
      description: 'Completed secondary education with excellent academic performance and developed interest in technology.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      year: '2021',
      status: 'Completed',
      title: 'Primary & Middle School Education (Till Class 8th)',
      institution: 'Tagore International School',
      description: 'Foundation years of education where curiosity for learning and problem-solving skills were nurtured.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'text-blue-400'
    }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend & Tools',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Git', 'VS Code', 'Cursor', 'API Development'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Design & Creative',
      icon: <Palette className="w-6 h-6" />,
      skills: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Canva', 'UI/UX Design'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const professionalQualities = [
    'Growth Mindset', 'Business Acumen', 'Problem-Solving', 'Detail-Oriented',
    'Efficiency', 'Results-Driven', 'Adaptability', 'Collaboration',
    'Teamwork', 'Prioritization', 'Strong Work Ethic'
  ];

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate computer science student from Greater Noida, Uttar Pradesh, dedicated to creating 
            innovative solutions through technology and creativity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Journey & Timeline */}
          <div ref={timelineRef}>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                Journey & Milestones
              </h3>
            </motion.div>

            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item flex gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color === 'text-blue-400' ? 'from-blue-500 to-blue-600' : item.color === 'text-purple-400' ? 'from-purple-500 to-purple-600' : 'from-green-500 to-green-600'} flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-blue-300 font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div ref={skillsRef}>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-green-400" />
                Skills & Expertise
              </h3>
            </motion.div>

            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="skill-card p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Professional Qualities */}
              <motion.div
                className="skill-card p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Professional Qualities</h4>
                <div className="flex flex-wrap gap-2">
                  {professionalQualities.map((quality, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                    >
                      {quality}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Interactive Skill Network */}
              <motion.div
                className="skill-card p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  Interactive Skill Network
                </h4>
                <SkillConstellation />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Extra Activities Section */}
        <ExtraActivities />
      </div>
    </section>
  );
};

export default About;

