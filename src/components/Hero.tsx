import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import owner from '../assets/owner.jpeg';
import { contact, company, stats } from '../config';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Mouse parallax (throttled to ~60fps)
  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX - innerWidth / 2);
      const yPos = (clientY - innerHeight / 2);

      gsap.to('.parallax-slow', {
        x: xPos / 50,
        y: yPos / 50,
        duration: 1.5,
        ease: 'power2.out'
      });

      gsap.to('.parallax-fast', {
        x: xPos / 20,
        y: yPos / 20,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to('.parallax-medium', {
        x: xPos / 35,
        y: yPos / 35,
        duration: 1.2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-x-hidden bg-beige"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 rounded-l-[100px] hidden md:block" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      {/* Floating Decorative Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="parallax-fast absolute top-[15%] left-[10%] w-12 h-12 border-4 border-primary/20 rounded-xl -z-10"
      />
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="parallax-medium absolute bottom-[20%] left-[5%] w-16 h-16 bg-primary/5 rounded-full -z-10"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="parallax-slow absolute top-[40%] right-[15%] w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="parallax-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-20" 
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Premium Interior Solutions</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Modern Interior & <br />
            <span className="text-primary italic">
              <Typewriter
                words={['Material Solutions', 'Custom Furniture', 'Expert Design']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
            <br /> for Homes.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            We provide plumbing, electrical materials and interior design at wholesale prices. 
            Design your dream interior with AVM Traders.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              id="hero-get-started-btn"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-dark transition-all shadow-xl shadow-primary/30 group"
            >
              Get Started
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                <HiArrowRight />
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${contact.phoneRaw}`}
              id="hero-call-now-btn"
              className="bg-white text-dark border border-primary/20 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:border-primary transition-all"
            >
              <span className="text-primary">
                <HiPhone />
              </span>
              Call Now
            </motion.a>
          </motion.div>

          {/* Stats Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Client"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border-4 border-beige object-cover"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-beige bg-primary flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">{stats.happyClients.toLocaleString()}+</p>
              <p className="text-sm text-gray-500">Happy Clients Served</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image + Owner Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000}>
            <div id="hero-owner-image-container" className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl group">
              <img
                src={owner}
                alt="Mr. Anand Sekar - Founder & Owner"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
            </div>
          </Tilt>

          {/* Owner Details below image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-center md:text-left pl-4 border-l-4 border-primary"
          >
            <h3 className="text-2xl font-bold text-dark flex items-center justify-center md:justify-start gap-2">
              <span className="text-primary text-xl">👤</span> {company.founder}
            </h3>
            <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mt-1">
              Founder & Owner
            </p>
            <div className="w-12 h-1 bg-primary/30 mt-3 rounded-full hidden md:block" />
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-primary/10 max-w-[200px] hidden lg:block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                ★
              </div>
              <span className="font-bold text-lg text-dark">4.9/5</span>
            </div>
            <p className="text-xs text-gray-500 font-medium">Average rating from our premium clients</p>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-primary/20 rounded-full -z-10" />
          <div className="absolute bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

