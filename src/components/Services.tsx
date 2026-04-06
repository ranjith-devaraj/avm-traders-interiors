import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  HiOutlineHome, 
  HiOutlineLightBulb, 
  HiOutlineTruck, 
  HiOutlineWrenchScrewdriver,
  HiOutlineCube,
  HiOutlinePaintBrush
} from 'react-icons/hi2';

const services = [
  {
    title: 'Plumbing Materials',
    desc: 'High-quality pipes, fittings, and fixtures from top brands at wholesale rates.',
    icon: HiOutlineWrenchScrewdriver,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Electrical Materials',
    desc: 'Complete range of wiring, switches, and lighting solutions for your projects.',
    icon: HiOutlineLightBulb,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Interior Design',
    desc: 'Modern, aesthetic, and functional interior planning for homes and offices.',
    icon: HiOutlinePaintBrush,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Custom Furniture',
    desc: 'Bespoke wardrobes, kitchen cabinets, and sofas crafted to perfection.',
    icon: HiOutlineCube,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Wholesale Supply',
    desc: 'Bulk supply of construction materials for contractors and builders.',
    icon: HiOutlineTruck,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Installation Services',
    desc: 'Expert installation of plumbing, electrical, and furniture systems.',
    icon: HiOutlineHome,
    color: 'bg-primary/10 text-primary',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-beige/30 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            From raw materials to finished luxury interiors, we provide everything you need 
            to build your dream space under one roof.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <div id={`service-card-${i}`} className="bg-white p-8 rounded-[32px] card-shadow border border-primary/5 group h-full transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(200,155,94,0.3)] hover:border-primary/30 hover:scale-[1.02] hover:-translate-y-2 flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 ${s.color}`}>
                    <s.icon />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-dark">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                    {s.desc}
                  </p>
                  <a href="#contact" id={`service-link-${i}`} className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <span>→</span>
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
