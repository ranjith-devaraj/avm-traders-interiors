import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Home Owner',
    text: 'AVM Traders transformed our living room into a masterpiece. Their attention to detail and wholesale material pricing saved us a lot of money.',
    rating: 5,
  },
  {
    name: 'Suresh Raina',
    role: 'Contractor',
    text: 'I always source my plumbing and electrical materials from AVM. Their quality is consistent and the wholesale rates are unbeatable in Madurai.',
    rating: 5,
  },
  {
    name: 'Meera Jasmine',
    role: 'Shop Owner',
    text: 'The custom furniture they built for my boutique is stunning. Highly professional team and timely delivery.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              id={`testimonial-card-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-beige/20 p-10 rounded-[40px] border border-primary/5 relative"
            >
              <div className="text-primary text-4xl mb-6 opacity-30">"</div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-1">
                {[...Array(t.rating)].map((_, idx) => (
                  <span key={idx} className="text-primary text-lg">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
