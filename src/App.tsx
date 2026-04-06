import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Lenis setup
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar lenis={lenisRef.current} />
          <ScrollProgress lenis={lenisRef.current} />

          <main>
            <section id="home"><Hero /></section>
            <section id="about"><About /></section>
            <section id="services"><Services /></section>
            <section id="gallery"><Gallery /></section>
            <section id="pricing"><Pricing /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="faq"><FAQ /></section>
            <section id="contact"><CTA /><Contact /></section>
          </main>

          <Footer />
          <FloatingActions />
        </>
      )}
    </div>
  );
}