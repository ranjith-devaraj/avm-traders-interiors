import React from 'react';
import logo from '../assets/logo.png';
import { config } from '../config';

export default function Footer() {
  const { company, social, footer, navigation } = config;
  return (
    <footer className="bg-dark pt-20 pb-10 text-white overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt={company.name}
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading wholesale supplier of plumbing, electrical materials and premium interior design services in Madurai.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-primary transition-colors">Plumbing Materials</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Electrical Materials</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Interior Design</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Furniture</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Wholesale Supply</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {navigation.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div id="footer-newsletter">
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get latest updates and offers.</p>
            <div className="flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary w-full"
              />
              <button id="newsletter-btn" className="bg-primary text-white p-3 rounded-xl hover:bg-white hover:text-primary transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href={footer.privacyPolicy} className="hover:text-white">Privacy Policy</a>
            <a href={footer.termsConditions} className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
