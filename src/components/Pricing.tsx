import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { HiCheck } from 'react-icons/hi';

const plans = [
  {
    name: 'Basic',
    price: 'Custom',
    desc: 'Perfect for small renovations and material supply.',
    features: [
      'Plumbing Materials Supply',
      'Electrical Materials Supply',
      'Basic Furniture Repair',
      'Standard Installation',
      'Wholesale Pricing',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    price: 'Premium',
    desc: 'Ideal for complete home interiors and material supply.',
    features: [
      'Everything in Basic',
      'Full Interior Planning',
      'Custom Wardrobes & Cabinets',
      'Professional Guidance',
      'Project Management',
      '2-Year Service Warranty',
    ],
    cta: 'Choose Standard',
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Luxury',
    desc: 'Ultimate luxury interior design and custom furniture.',
    features: [
      'Everything in Standard',
      'Bespoke Luxury Furniture',
      'Smart Home Integration',
      'Premium Material Selection',
      'Post-Project Maintenance',
      '5-Year Service Warranty',
    ],
    cta: 'Go Premium',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-beige/30 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Pricing Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Affordable Luxury
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer flexible pricing models whether you need bulk materials or a 
            complete luxury interior makeover.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={plan.popular ? 1.08 : 1.05}
                transitionSpeed={2500}
                className="h-full"
              >
                <div id={`pricing-plan-${i}`} className={`relative bg-white p-10 rounded-[40px] shadow-xl border-2 transition-all h-full flex flex-col ${
                  plan.popular ? 'border-primary z-10' : 'border-transparent'
                }`}>
                  {plan.popular && (
                    <div id={`popular-badge-${i}`} className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2 text-dark">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-8">{plan.desc}</p>
                  
                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">
                          <HiCheck />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    id={`pricing-cta-${i}`}
                    className={`block text-center py-4 rounded-2xl font-bold transition-all ${
                      plan.popular 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-dark' 
                        : 'bg-beige text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
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
