import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    if (!contactRef.current) return;
    const formElements = formRef.current.children;
    
    gsap.fromTo(formElements, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: contactRef.current });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'aumlenka51@gmail.com',
      href: 'mailto:aumlenka51@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9667642033',
      href: 'tel:+919667642033',
      color: 'text-green-400'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Greater Noida, Uttar Pradesh',
      href: '#',
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/Faze-Mortal',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aum-lenka/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
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
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm always excited to discuss 
            new opportunities and innovative ideas. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently open to new opportunities and exciting challenges.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-3 rounded-lg bg-gray-700/50 ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:border-blue-500/30`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 font-medium">Available for new projects</span>
              </div>
              <p className="text-green-400/80 text-sm mt-2">
                Currently accepting freelance work and collaboration opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed glow-effect"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © Made by Aum Lenka while being high on coffee
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

