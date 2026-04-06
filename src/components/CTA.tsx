import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../config';

export default function CTA() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          id="cta-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-beige rounded-[60px] p-12 lg:p-24 overflow-hidden text-center"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-dark mb-8 leading-tight">
              Start Your Interior <br />
              <span className="text-primary italic">Project Today</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Ready to transform your space? Get in touch with our experts for a free 
              consultation and wholesale material quote.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#contact"
                id="cta-contact-btn"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-dark transition-all shadow-2xl shadow-primary/20"
              >
                Contact Now
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                id="cta-call-btn"
                className="bg-white text-dark border border-primary/20 px-10 py-5 rounded-2xl font-bold text-lg hover:border-primary transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
