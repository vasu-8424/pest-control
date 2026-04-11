import React from 'react';
import { Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section id="whyus" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[55%]"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <h4 className="text-gray-900 font-bold text-sm">Why Choose Us</h4>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose Simhapuri <br className="hidden md:block"/> Pest Control
            </h2>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Simhapuri Pest Control provides professional pest management services for homes, offices, and commercial spaces. Our experienced technicians use advanced pest control techniques and eco-friendly treatments to eliminate termites, cockroaches, rats, mosquitoes, and other harmful pests. We focus on safe, reliable, and long-lasting solutions to keep your property clean, healthy, and pest-free.
            </p>
            
            {/* 2 Column Badges */}
            <div className="grid md:grid-cols-2 gap-8 mb-4 border-t border-gray-100 pt-10">
              {/* Badge 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-4 rounded-full flex-shrink-0">
                  <Leaf size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight">Safe & Eco-Friendly<br/>Treatments</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We use eco-friendly, government-approved treatments that are safe for children, pets, and the environment.
                  </p>
                </div>
              </div>
              
              {/* Badge 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-4 rounded-full flex-shrink-0">
                  <Award size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight">Certified & Experienced<br/>Technicians</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our skilled technicians use advanced tools and proven methods to deliver fast, effective pest control solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="w-2 h-2 rounded-full bg-red-600 inline-block mr-2"></div>
            </div>
          </motion.div>

          {/* Overlapping Images Collage (Right Side) */}
          <div className="lg:w-[45%] w-full flex justify-center items-center py-12 lg:py-0 relative">
            
            {/* The 95% floating box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 right-0 md:-right-8 bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-30 w-[240px] border border-gray-100"
            >
              <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">95%</h3>
              <p className="text-gray-600 text-sm">Pest Control Success<br/>Rate</p>
            </motion.div>

            <div className="relative w-[95%] md:w-[90%] aspect-square mx-auto">
              
              {/* Background Image (Top Right) - Pest */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-[80%] h-[80%] splash-hover rounded-[30px] shadow-xl overflow-hidden group z-10"
              >
                <img 
                  src="/images/why-pest.png" 
                  alt="Pest View" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Foreground Image (Bottom Left) - Technician */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-6 left-0 w-[60%] h-[75%] splash-hover rounded-[30px] shadow-[-10px_20px_40px_rgba(0,0,0,0.15)] border-[12px] border-white overflow-hidden group z-20 bg-white"
              >
                <img 
                  src="/images/why-tech.png" 
                  alt="Technician Overlay" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
