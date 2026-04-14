import React from 'react';
import { ArrowRight, Bug, Home, Droplet, Rat, Activity, Wind, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Termite Control',
    icon: <Home size={28} className="text-white" />,
    description: 'Comprehensive termite elimination including pre-construction, post-construction, and anti-termite piping solutions.',
    benefits: 'Prevents structural damage, preserves wooden furniture.',
    process: 'Drill-Fill-Seal technique or piping network injection.',
    image: '/images/termite.png'
  },
  {
    title: 'Cockroach Control',
    icon: <Bug size={28} className="text-white" />,
    description: 'Thorough eradication of cockroach infestations in kitchens, bathrooms, and commercial food spaces.',
    benefits: 'Prevents food contamination and hygiene-related diseases.',
    process: 'Advanced gel baiting and targeted spray treatment.',
    image: '/images/roach.png'
  },
  {
    title: 'Rodent Control',
    icon: <Rat size={28} className="text-white" />,
    description: 'Effective management and removal of rats and mice using safe trapping and baiting techniques.',
    benefits: 'Protects wires, documents, and prevents severe diseases.',
    process: 'Inspection, bait station installation, and entry sealing.',
    image: '/images/rodent.png'
  },
  {
    title: 'Bed Bugs Control',
    icon: <Activity size={28} className="text-white" />,
    description: 'Intensive treatment to completely eliminate bed bugs from mattresses, furniture, and crevices.',
    benefits: 'Ensures peaceful sleep and prevents allergic reactions.',
    process: 'Detailed inspection followed by chemical spray in phases.',
    image: '/images/bedbug.png'
  },
  {
    title: 'Mosquito Control',
    icon: <Wind size={28} className="text-white" />,
    description: 'Indoor and outdoor mosquito management to protect against vector-borne diseases.',
    benefits: 'Reduces risk of Dengue, Malaria, and Chikungunya.',
    process: 'Thermal fogging and stationary water treatment.',
    image: '/images/mosquito.png'
  },
  {
    title: 'Lizard & Spider',
    icon: <Zap size={28} className="text-white" />,
    description: 'Specialized chemical treatments focusing on walls, ceilings, and hidden corners to repel lizards and spiders.',
    benefits: 'Clean aesthetics, fear-free environment.',
    process: 'Targeted repellent spray on specific surfaces.',
    image: '/images/lizard.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-gray-900 overflow-hidden">
      {/* Background Graphic to make Glassmorphism pop */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-700/40 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-900/50 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-red-400 font-bold uppercase tracking-wider mb-2">Our Services</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
            Professional Pest Management
          </h2>
          <p className="text-gray-300 text-lg font-light">
            We offer specialized, government-approved treatments designed to tackle every kind of pest problem at its root, delivered with unmatched precision.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index} 
                id={service.title === 'Termite Control' ? 'termite-control' : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[450px]"
              >
              
              {/* Background Image of the Card */}
              <div className="absolute inset-0 z-0 splash-hover group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#1a1a1a';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              {/* Glassmorphic Inner Container */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-10 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transform transition-colors duration-500 group-hover:bg-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-600 p-3 rounded-lg shadow-lg border border-red-500/50">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-200 mb-4 font-light leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  
                  {/* Super Smooth Grid Expansion */}
                  <div className="grid transition-[grid-template-rows] duration-500 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="space-y-3 mb-4 pt-2 border-t border-white/20">
                        <div className="flex items-start gap-2 text-sm mt-3">
                          <span className="font-bold text-red-300 min-w-[70px]">Benefits:</span>
                          <span className="text-gray-200">{service.benefits}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="font-bold text-red-300 min-w-[70px]">Process:</span>
                          <span className="text-gray-200">{service.process}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="#contact" className="inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md group/btn w-full mt-2">
                    Book Service 
                    <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Services;
