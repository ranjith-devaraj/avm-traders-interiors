import React from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    q: 'What is your pricing model?',
    a: 'We offer wholesale pricing for materials and competitive project-based pricing for interior design and furniture works. Contact us for a detailed quote.',
  },
  {
    q: 'How long does a typical interior project take?',
    a: 'Small projects take 1-2 weeks, while full home interiors usually take 4-8 weeks depending on the complexity and custom requirements.',
  },
  {
    q: 'Do you provide custom furniture designs?',
    a: 'Yes, we specialize in bespoke furniture including wardrobes, modular kitchens, and office workstations tailored to your specific space.',
  },
  {
    q: 'What is the quality of your materials?',
    a: 'We source materials from top-tier brands and provide quality assurance for all plumbing, electrical, and woodwork materials we supply.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} id={`faq-item-${i}`} className="border border-primary/10 rounded-[32px] overflow-hidden bg-beige/10">
              <button
                id={`faq-btn-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-beige/20 transition-colors"
              >
                <span className="text-xl font-bold text-dark">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-primary text-2xl"
                >
                  <HiChevronDown />
                </motion.span>
              </button>
              <motion.div
                id={`faq-content-${i}`}
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
