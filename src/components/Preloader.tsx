import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { company } from '../config';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f0e6]"
    >
      <div className="relative flex flex-col items-center">
        {/* Rotating Loader Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-8 rounded-full border-2 border-primary/20 border-t-primary"
        />

        <motion.div
          id="preloader-logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <img
            id="preloader-logo"
            src={logo}
            alt="AVM Traders & Interiors"
            referrerPolicy="no-referrer"
            className="h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Tagline Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 text-center"
        >
          <h2 className="font-sans text-lg font-medium tracking-widest text-dark/80 uppercase">
            {company.name}
          </h2>
          <p className="mt-2 font-sans text-sm italic text-dark/60">
            "{company.tagline}"
          </p>
        </motion.div>
      </div>

      {/* Progress Bar (Optional Visual) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-20 h-[1px] bg-primary/30"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-primary"
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
