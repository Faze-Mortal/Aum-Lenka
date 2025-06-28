import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const useGSAPAnimations = () => {
  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline({ delay: 0.5 })
    
    heroTl
      .from('.hero-title', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
      })
      .from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-description', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.hero-buttons', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.2')
      .from('.hero-social', {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.2')

    // Skills section animations
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 80%',
      onEnter: () => {
        gsap.from('.skill-category', {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: 'power2.out'
        })
        
        gsap.from('.skill-bar-fill', {
          duration: 1.5,
          width: 0,
          delay: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        })
      }
    })

    // Projects section animations
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 80%',
      onEnter: () => {
        gsap.from('.project-card', {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.15,
          ease: 'power2.out'
        })
      }
    })

    // Contact section animations
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 80%',
      onEnter: () => {
        gsap.from('.contact-info', {
          duration: 0.8,
          x: -50,
          opacity: 0,
          ease: 'power2.out'
        })
        
        gsap.from('.contact-form', {
          duration: 0.8,
          x: 50,
          opacity: 0,
          delay: 0.2,
          ease: 'power2.out'
        })
      }
    })

    // Floating elements animation
    gsap.to('.floating-element', {
      duration: 3,
      y: -20,
      rotation: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.5,
        from: 'random'
      }
    })

    // Parallax effect for background elements
    gsap.to('.parallax-slow', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.to('.parallax-fast', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic-btn')
    
    magneticButtons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        gsap.to(button, {
          duration: 0.3,
          scale: 1.05,
          ease: 'power2.out'
        })
      })
      
      button.addEventListener('mouseleave', (e) => {
        gsap.to(button, {
          duration: 0.3,
          scale: 1,
          x: 0,
          y: 0,
          ease: 'power2.out'
        })
      })
      
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(button, {
          duration: 0.3,
          x: x * 0.1,
          y: y * 0.1,
          ease: 'power2.out'
        })
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      heroTl.kill()
    }
  }, [])
}

export default useGSAPAnimations

