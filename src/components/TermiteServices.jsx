import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TermiteServices = () => {
  const specializedServices = [
    {
      title: "Pre Construction Treatment",
      description: "Soil treatment before construction to create an anti-termite barrier, protecting your building from the foundation up.",
      image: "/termite-pre.png"
    },
    {
      title: "Post Construction Treatment",
      description: "Drilling and injection treatment for existing buildings to eliminate active termite colonies and prevent future infestations.",
      image: "/termite-post.png"
    },
    {
      title: "Anti-Termite Piping System",
      description: "Advanced reticulation piping system installed within the building for periodic re-treatment without drilling.",
      image: "/images/hero-bg.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Specialized</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Termite Control Services
          </h2>
          <p className="text-gray-500 text-lg">
            Industry-leading termite management with advanced treatment methods
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specializedServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group"
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors group/link mt-auto">
                  Get Quote
                  <ArrowRight size={18} className="ml-2 transform transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermiteServices;
