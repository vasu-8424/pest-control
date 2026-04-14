import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AMCIndustries = () => {
  const sectors = [
    {
      title: "Restaurants",
      description: "General maintenance service and rodent control for food establishments",
      image: "/sector-restaurants.png"
    },
    {
      title: "Hotels & Banquet Halls",
      description: "Complete pest management for lodge rooms and event spaces",
      image: "/sector-hotels.png"
    },
    {
      title: "Banks",
      description: "General maintenance service and rodent control for financial institutions",
      image: "/sector-banks.png"
    },
    {
      title: "Function & Convention Halls",
      description: "Specialized general maintenance service for event venues",
      image: "/sector-convention.png"
    },
    {
      title: "Warehouses",
      description: "Comprehensive pest control for storage facilities",
      image: "/sector-warehouses.png"
    },
    {
      title: "Hospitals",
      description: "General maintenance service and rodent control for healthcare facilities",
      image: "/sector-hospitals.png"
    },
    {
      title: "Schools & Colleges",
      description: "Safe general maintenance service for educational institutions",
      image: "/sector-schools.png"
    },
    {
      title: "Offices",
      description: "All types of offices - general maintenance service solutions",
      image: "/sector-offices.png"
    },
    {
      title: "Retail & Shopping Malls",
      description: "Maintenance services for shops and large retail spaces to maintain a safe shopping experience",
      image: "/sector-retail.png"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Industries We Serve</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AMC Services for All Sectors
          </h2>
          <p className="text-gray-500 text-lg">
            Professional pest management solutions customized for your industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                  {sector.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-red-600 font-bold hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2 transform transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMCIndustries;
