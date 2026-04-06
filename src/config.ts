/**
 * Application Configuration
 * Centralized constants for contact info, social links, and other hardcoded values
 */

export const config = {
  // Company Info
  company: {
    name: 'AVM Traders & Interiors',
    tagline: 'Design your dream interior with us',
    established: '2016', // 10+ years as of 2026
    founder: 'Mr. Anand Sekar',
  },

  // Contact Information
  contact: {
    phone: '+91 72006 94727',
    phoneRaw: '7200694727',
    email: 'avmtraders369@gmail.com',
    address: 'Samayanallur Main Road, Madurai – 625402',
    googleMapsUrl: 'https://maps.google.com/?q=Samayanallur+Main+Road,+Madurai+–+625402',
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/avmtraders',
    instagram: 'https://instagram.com/avmtraders',
    twitter: 'https://twitter.com/avmtraders',
    linkedin: 'https://linkedin.com/company/avmtraders',
    whatsapp: 'https://wa.me/917200694727',
  },

  // Navigation Links
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],

  // Footer Links
  footer: {
    privacyPolicy: '#privacy',
    termsConditions: '#terms',
  },

  // Stats
  stats: {
    happyClients: 1000,
    yearsExperience: 10,
    rating: 4.9,
  },
};

// Export individual constants for convenience
export const {
  company,
  contact,
  social,
  navigation,
  footer,
  stats,
} = config;
