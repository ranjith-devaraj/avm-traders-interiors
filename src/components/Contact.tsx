import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { contact, social } from '../config';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsLoading(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          id="contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-beige rounded-[60px] overflow-hidden shadow-2xl border border-primary/10"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Info */}
            <div id="contact-info" className="p-12 lg:p-20 bg-primary text-white relative overflow-hidden">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Let's Build Your <br /> Dream Space.</h2>
                <p className="text-white/80 mb-12 text-lg relative z-10">
                  Have a project in mind? Or need bulk materials for your construction? 
                  Reach out to us and get a free consultation today.
                </p>
              </motion.div>

              <div className="space-y-8 relative z-10">
               {[
                   { id: 'contact-loc', icon: HiLocationMarker, title: 'Our Location', content: contact.address, href: contact.googleMapsUrl },
                   { id: 'contact-phone', icon: HiPhone, title: 'Phone Number', content: contact.phone, href: `tel:${contact.phoneRaw}` },
                   { id: 'contact-email', icon: HiMail, title: 'Email Address', content: contact.email, href: `mailto:${contact.email}` },
                 ].map((item, i) => (
                  <motion.a
                    key={i}
                    id={item.id}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-primary transition-all duration-300">
                      <item.icon />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-white/70 group-hover:text-white transition-colors">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Socials */}
              <div id="contact-socials" className="mt-16 flex gap-4 relative z-10">
                  {[
                    { icon: FaFacebookF, href: social.facebook, id: 'social-fb' },
                    { icon: FaInstagram, href: social.instagram, id: 'social-ig' },
                    { icon: FaTwitter, href: social.twitter, id: 'social-tw' },
                    { icon: FaLinkedinIn, href: social.linkedin, id: 'social-li' },
                  ].map(({ icon: Icon, href, id }, i) => (
                   <motion.a
                     key={i}
                     id={id}
                     href={href}
                     whileHover={{ scale: 1.1, y: -5 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all cursor-pointer"
                   >
                     <Icon />
                   </motion.a>
                 ))}
              </div>
            </div>

            {/* Right: Form */}
            <div id="contact-form-container" className="p-12 lg:p-20 bg-beige/50">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2000}>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-5xl mb-6">
                      <HiCheckCircle />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="full-name" className="text-sm font-bold text-dark/70 ml-1">Full Name</label>
                        <input
                          id="full-name"
                          name="full-name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full bg-white text-dark border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email-address" className="text-sm font-bold text-dark/70 ml-1">Email Address</label>
                        <input
                          id="email-address"
                          name="email-address"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-white text-dark border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone-number" className="text-sm font-bold text-dark/70 ml-1">Phone Number</label>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-white text-dark border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-dark/70 ml-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us about your project..."
                        className="w-full bg-white text-dark border border-primary/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all resize-none shadow-sm"
                      />
                    </div>

                    <motion.button 
    id="submit-btn"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-dark transition-all"
  >
    {isLoading ? 'Sending...' : 'Send Message'}  {/* ✅ UPDATED */}
  </motion.button>
                  </form>
                )}
              </Tilt>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

