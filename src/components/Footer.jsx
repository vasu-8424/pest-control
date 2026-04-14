import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-red-600">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About */}
          <div>
            <div className="mb-6">
              <img src="/spc-logo.jpg" alt="Simhapuri Pest Control" className="h-[80px] object-contain bg-white/90 px-3 py-1 rounded-lg" onError={(e) => { e.target.src = '/logo.jpg'; }} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional pest management services in Nellore and surrounding areas. ISO 9001:2015 Certified for quality and reliability.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17E8BELuSw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/simhapuri_pest_control_nellore?igsh=MWcydXcxNGJwY3pvcg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@simhapuripestcontrol?si=rYGYpCy99HK6A9lD" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2 9 2 12c0 3 .5 4.9.5 4.9.3 1.1 1.2 2 2.3 2.1C7.3 19.5 12 19.5 12 19.5s4.7 0 7.2-.5c1.1-.1 2-1 2.3-2.1.5-1.9.5-4.9.5-4.9s-.5-3-.5-4.9c-.3-1.1-1.2-2-2.3-2.1C16.7 4.5 12 4.5 12 4.5s-4.7 0-7.2.5C3.7 5.1 2.8 6 2.5 7.1z"/><path d="M9.8 15.5L15.3 12 9.8 8.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              {['Home', 'About Us', 'AMC Plans', 'Why Choose Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="flex items-center hover:text-red-500 transition-colors">
                    <ChevronRight size={16} className="text-red-600 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              {['Termite Control', 'Cockroach Control', 'Rodent Control', 'Bed Bugs Control', 'Mosquito Control'].map((service) => (
                <li key={service}>
                  <a href={service === 'Termite Control' ? '#termite-control' : '#services'} className="flex items-center hover:text-red-500 transition-colors">
                    <ChevronRight size={16} className="text-red-600 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></span>
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-red-600 shrink-0 mt-1" />
                <span>+91 8885914421</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-red-600 shrink-0 mt-1" />
                <span className="whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal w-full block">simhapuripestcontrol@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-red-600 shrink-0 mt-1" />
                <span>Adithya Nagar 1st street, Childrens Park Rd, Nellore, Andhra Pradesh 524002</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Simhapuri Pest Control. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
