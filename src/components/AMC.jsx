import React from 'react';
import { CalendarCheck, Shield, IndianRupee, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AMC = () => {
  return (
    <section id="amc" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          
          {/* Overlapping Images Collage (Left Side) */}
          <div className="lg:w-1/2 w-full flex justify-center items-center py-12 lg:py-0">
            <div className="relative w-[95%] md:w-[85%] lg:w-[90%] aspect-[4/5] mx-auto">
              
              {/* Background Graphic Decoration */}
              <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-red-100/50 rounded-[40px] -z-10 transform rotate-3"></div>
              
              {/* Background Image (Top Right) - Pest */}
              <motion.div 
                initial={{ opacity: 0, x: 30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-[75%] h-[75%] splash-hover rounded-[30px] md:rounded-[40px] shadow-xl overflow-hidden group z-10"
              >
                <img 
                  src="/images/amc-pest.png" 
                  alt="Pest Detail" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Foreground Image (Bottom Left) - Technician */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 w-[70%] h-[70%] splash-hover rounded-[30px] md:rounded-[40px] shadow-[-10px_20px_50px_rgba(0,0,0,0.2)] border-[10px] md:border-[16px] border-white overflow-hidden group z-20 bg-white"
              >
                <img 
                  src="/images/amc-tech.png" 
                  alt="Pest Control Technician" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Content (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <h4 className="text-gray-600 font-bold uppercase tracking-wider text-sm">Simhapuri AMC Plans</h4>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Keep Your Space Pest-Free All Year Round
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Pests are a year-round threat. Our comprehensive AMC plans provide reliable preventive treatments and regular professional inspections, ensuring constant protection for your family, employees, or customers safely and affordably.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10 border-t border-gray-100 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                  <CalendarCheck size={24} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Regular Inspections</h4>
                  <p className="text-gray-500 text-sm">Scheduled routine visits.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                  <Shield size={24} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Preventive Care</h4>
                  <p className="text-gray-500 text-sm">Proactive defensive barriers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                  <IndianRupee size={24} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Cost-Effective</h4>
                  <p className="text-gray-500 text-sm">Transparent pricing, no hidden costs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                  <Clock size={24} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Priority Support</h4>
                  <p className="text-gray-500 text-sm">Fast-tracked emergency visits.</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-3 bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Learn More About AMC
              <ArrowRight size={20} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



export default AMC;
