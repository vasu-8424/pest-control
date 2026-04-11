import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'AMC Plans', href: '#amc' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-500 ${isScrolled ? 'fixed top-0 bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10 py-3' : 'absolute top-0 md:top-[40px] bg-transparent backdrop-blur-md border-b border-white/20 py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          {/* White box so the logo is completely visible over the dark glass background */}
          <div className="bg-white px-2 py-1.5 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform group-hover:scale-105">
            <img src="/spc-logo.jpg" alt="Simhapuri Pest Control" className="h-[35px] md:h-[45px] object-contain" onError={(e) => { e.target.src = '/logo.jpg'; }} />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-gray-100 font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a href={link.href} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer py-2 tracking-wide text-sm">
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover:opacity-100" />}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-lg hover:shadow-red-600/50 hover:-translate-y-0.5 border border-red-500/50">
            Book Service
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-3xl border-t border-white/10 absolute top-full w-full left-0 shadow-2xl pb-6 px-6 flex flex-col space-y-4 pt-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-200 font-medium hover:text-white py-3 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-red-600 text-center text-white px-6 py-3 rounded-md font-bold mt-4 shadow-lg hover:bg-red-700">
            Book Service
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
