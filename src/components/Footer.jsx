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
              <img src="/spc-logo.jpg" alt="Simhapuri Pest Control" className="h-[50px] object-contain bg-white/90 px-3 py-1 rounded-lg" onError={(e) => { e.target.src = '/logo.jpg'; }} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium pest management services in Nellore and surrounding areas. ISO 9001:2015 Certified for quality and reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors font-bold text-sm">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors font-bold text-sm">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors font-bold text-sm">
                YT
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
                  <a href="#services" className="flex items-center hover:text-red-500 transition-colors">
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
                <span className="break-all">simhapuripestcontrol@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-red-600 shrink-0 mt-1" />
                <span>Nellore, Andhra Pradesh, India</span>
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
