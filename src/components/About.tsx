import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { HiCheckCircle, HiOutlineLightBulb, HiOutlineCurrencyRupee, HiOutlineShieldCheck } from 'react-icons/hi';
import { stats } from '../config';

const features = [
  {
    title: 'Premium Materials',
    desc: 'We source only the highest quality plumbing and electrical materials.',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Wholesale Pricing',
    desc: 'Get the best market rates for all your construction and interior needs.',
    icon: HiOutlineCurrencyRupee,
  },
  {
    title: 'Trusted Service',
    desc: 'Over a decade of excellence serving Madurai and surrounding areas.',
    icon: HiCheckCircle,
  },
  {
    title: 'Expert Guidance',
    desc: 'Professional interior design advice tailored to your space and budget.',
    icon: HiOutlineLightBulb,
  },
];

export default function About() {

  return (
    <section id="about" className="py-24 bg-white overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              About Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Why Customers Trust <br />
              <span className="text-primary italic">AVM Traders & Interiors</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-10 text-lg leading-relaxed"
            >
              At AVM Traders, we believe that every home deserves a touch of luxury without the premium price tag. 
              As a leading wholesale supplier and interior design firm in Madurai, we bridge the gap between 
              quality materials and professional craftsmanship.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-beige/50 transition-colors group">
                      <div className="flex-shrink-0 w-12 h-12 bg-beige rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <f.icon />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-dark">{f.title}</h4>
                        <p className="text-sm text-gray-500 leading-snug">{f.desc}</p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div id="about-image-grid" className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600"
                  alt="Interior 1"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl shadow-xl w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400"
                  alt="Interior 2"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl shadow-xl w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400"
                  alt="Interior 3"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl shadow-xl w-full aspect-[3/4] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400"
                  alt="Interior 4"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl shadow-xl w-full aspect-square object-cover"
                />
              </div>
            </div>
            
             {/* Experience Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-8 rounded-full shadow-2xl border-8 border-white text-center z-10"
            >
              <p className="text-3xl font-bold">{stats.yearsExperience}+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest">Years of Exp</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}