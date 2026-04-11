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
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" 
                alt="Pest Control Equipment" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-xl flex items-center gap-4 w-64">
              <Award size={48} />
              <div>
                <p className="font-bold text-xl">ISO 9001:2015</p>
                <p className="text-sm text-red-100">Certified Company</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h4 className="text-red-600 font-bold uppercase tracking-wider mb-2">About The Company</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner for a Pest-Free Environment
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2013, <strong className="text-gray-900">Simhapuri Pest Control</strong> has grown to become the most reliable and effective pest management service provider in Andhra Pradesh. We specialize in eliminating pests from residential, commercial, and industrial properties using scientifically proven methods.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our team consists of highly experienced technicians who utilize government-approved, eco-friendly chemicals to ensure maximum effectiveness with zero harm to your family, pets, and the environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Total Safety</h4>
                  <p className="text-sm text-gray-600">Odorless and human-safe treatment protocols.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Reliability</h4>
                  <p className="text-sm text-gray-600">On-time service with guaranteed results.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Long-term Protection</h4>
                  <p className="text-sm text-gray-600">Addressing the root cause to prevent recurring infestations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
