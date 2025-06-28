import { motion } from 'framer-motion'

const AboutMe = () => (
  <section id="about" className="py-20 bg-background">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-blue-400"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4"
      >
        <span>Yo! I'm Aum Lenka, a developer from Odisha, building modern, animated web experiences that don't just work — they vibe.</span><br /><br />
        <span>I specialize in crafting responsive, reactive, and clean frontends using React, Tailwind CSS, and a sprinkle of Framer Motion magic. I'm all about modern design meets functional code, and I love making things that feel smooth, fast, and alive.</span><br /><br />
        <span>My coding journey started with curiosity, a love for problem-solving, and probably too many late nights wrestling with bugs. Since then, I've worked on full-stack projects, AI integrations, and helped turn chaotic ideas into working products.</span><br /><br />
        <span>Outside the code editor, you'll probably find me gaming, listening to trap beats, or rewatching YouTube tutorials at 2AM like it's Netflix.</span><br /><br />
        <span>Currently open to collaborations, internships, or any challenge that involves building dope stuff on the web.</span>
      </motion.p>
    </div>
  </section>
)

export default AboutMe 