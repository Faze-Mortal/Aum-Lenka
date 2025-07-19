import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Trophy, Users, BookOpen, Lightbulb, Target, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExtraActivities = () => {
  const activitiesRef = useRef();
  const cardsRef = useRef();

  useGSAP(() => {
    if (!activitiesRef.current) return;
    const cards = cardsRef.current.children;
    
    gsap.fromTo(cards, {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: activitiesRef.current });

  const activities = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Programming",
      description: "Active participant in coding competitions and algorithmic challenges",
      highlights: ["Problem-solving expertise", "Algorithm optimization", "Time management"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tech Community",
      description: "Contributing to open-source projects and tech communities",
      highlights: ["Open source contributions", "Knowledge sharing", "Collaborative development"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Constantly exploring new technologies and development practices",
      highlights: ["Latest tech trends", "Online certifications", "Self-directed learning"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Projects",
      description: "Developing creative solutions for real-world problems",
      highlights: ["Creative problem-solving", "Prototype development", "User-centered design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented Approach",
      description: "Setting and achieving ambitious technical and personal goals",
      highlights: ["Strategic planning", "Milestone tracking", "Results delivery"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence Mindset",
      description: "Committed to delivering high-quality work and continuous improvement",
      highlights: ["Quality assurance", "Best practices", "Performance optimization"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const achievements = [
    { metric: "15+", label: "Projects Completed" },
    { metric: "3+", label: "Technologies Mastered" },
    { metric: "100%", label: "Commitment Level" },
    { metric: "24/7", label: "Learning Mode" }
  ];

  return (
    <section ref={activitiesRef} className="py-16 bg-gray-800/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Beyond <span className="text-gradient">Academics</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Exploring diverse interests and building a well-rounded skill set through 
            various activities and continuous learning initiatives.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">
                {achievement.metric}
              </div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${activity.color} group-hover:scale-110 transition-transform`}>
                  {activity.icon}
                </div>
                <h4 className="text-white font-semibold text-lg">{activity.title}</h4>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {activity.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {activity.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${activity.color} opacity-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gray-900/50 px-6 py-3 rounded-lg border border-gray-700/50">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-300">
              Always open to new challenges and learning opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraActivities;

