import React, { useState, useEffect } from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  '/images/hero_bg1.png',
  '/images/hero_bg2.png',
  '/hero-spray.png',
  '/hero-technician.png' // 4 = 8k images array
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500); // Crossfades safely after 4.5 seconds allowing for overlap
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-40 pb-20 overflow-hidden">
      
      {/* Cinematic Background Slider (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 15, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Deep red gradient overlay to match brand and ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-black/80 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-red-500"
          >
            <ShieldCheck size={18} />
            <span>PEST CONTROL IN NELLORE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl"
          >
            Professional Pest Control Services in Nellore
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md"
          >
            Safe, effective & long-lasting pest control solutions for residential and commercial spaces. Protect your property today with our certified technicians.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.6)] hover:-translate-y-1">
              Get Free Inspection
              <ArrowRight size={20} className="ml-2" />
            </a>
            
            <a href="tel:8885914421" className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <PhoneCall size={20} className="mr-2 text-red-600" />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-10"
        >
          <div>
            <h3 className="text-4xl font-black text-white mb-1 drop-shadow-lg">10+</h3>
            <p className="text-red-200 font-medium">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white mb-1 drop-shadow-lg">100%</h3>
            <p className="text-red-200 font-medium">Safe Chemicals</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white mb-1 drop-shadow-lg">24/7</h3>
            <p className="text-red-200 font-medium">Support</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white mb-1 drop-shadow-lg">3000+</h3>
            <p className="text-red-200 font-medium">Happy Customers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
