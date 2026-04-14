import React from 'react';
import { Award, ShieldAlert, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image/Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="bg-red-50 rounded-2xl p-4 absolute -top-8 -left-8 w-64 h-64 -z-10 hidden md:block"></div>
            <div className="relative splash-hover rounded-xl shadow-2xl overflow-hidden group w-full h-[500px]">
              <img 
                src="/about-main.png" 
                alt="Pest Control Equipment" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 z-20 hover:scale-105 transition-transform duration-500 bg-white rounded-full p-2 shadow-2xl overflow-hidden flex items-center justify-center">
              <img 
                src="/iso-badge.jpg" 
                alt="ISO 9001:2015 Certified Company" 
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h4 className="text-red-600 font-bold uppercase tracking-wider mb-2">About The Company</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner for a Pest-Free Environment
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Simhapuri Pest Control was founded by an experienced pest control professional with hands-on expertise since 2013, with a clear vision—to deliver safe, effective, and long-lasting pest control solutions with complete customer satisfaction.
            </p>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Based in Nellore, we proudly serve the entire Nellore district and extend our services across Andhra Pradesh. With a strong commitment to quality and reliability, we use advanced pest control methods, modern equipment, and government-approved chemicals to ensure the highest safety standards for your home and business.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              As an ISO-certified company, we follow strict quality protocols and employ fully trained and certified technicians who are dedicated to delivering the best results in the market.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our services are designed not just to eliminate pests but to provide long-term protection, backed by trusted warranties for your peace of mind.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Whether it’s residential or commercial pest control, Simhapuri Pest Control is your trusted partner for a pest-free environment.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-semibold">
              We also provide Annual Maintenance Contracts (AMC) for continuous protection and prevention.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
