import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { contact, social } from '../config';

export default function FloatingActions() {
  return (
    <div id="floating-actions" className="fixed bottom-8 right-8 z-[90] flex flex-col gap-4">
      <a
        id="whatsapp-action"
        href={social.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <FaWhatsapp />
      </a>
      <a
        id="phone-action"
        href={`tel:${contact.phoneRaw}`}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
}
