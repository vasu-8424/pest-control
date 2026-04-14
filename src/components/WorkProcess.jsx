import React, { useState } from 'react';
import { Search, Bug, FileText, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkProcess = () => {
  const [isHovered, setIsHovered] = useState(false);

  const steps = [
    {
      title: "Inspection",
      description: "Thorough site examination to assess the level of infestation and vulnerable areas.",
      icon: <Search size={32} className="text-red-600" />
    },
    {
      title: "Identification",
      description: "Accurately identifying the species to formulate the most targeted treatment.",
      icon: <Bug size={32} className="text-red-600" />
    },
    {
      title: "Treatment Plan",
      description: "Designing a customized, safe, and effective plan tailored to your specific needs.",
      icon: <FileText size={32} className="text-red-600" />
    },
    {
      title: "Execution",
      description: "Applying government-approved chemicals safely to eliminate pests from the source.",
      icon: <Zap size={32} className="text-red-600" />
    },
    {
      title: "Follow-up",
      description: "Post-treatment monitoring and hygiene suggestions to ensure long-term protection.",
      icon: <ShieldCheck size={32} className="text-red-600" />
    }
  ];

  return (
    <section 
      id="howitworks"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-24 relative bg-gray-50 overflow-hidden"
    >
      {/* Animated Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-red-200/50 blur-[100px] rounded-full mix-blend-multiply opacity-50"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-100/60 blur-[120px] rounded-full mix-blend-multiply opacity-60"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#c1121f 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 border-b border-gray-200 pb-10"
        >
          <h4 className="text-red-600 font-extrabold uppercase tracking-widest mb-2">How We Work</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            The 5-Step Eradication Protocol
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            We follow a systematic and scientific approach to ensure total elimination of pests while prioritizing your safety and peace of mind.
          </p>
        </motion.div>

        <div className="relative mt-8 max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-red-100 via-red-500 to-red-100 -translate-x-1/2 z-0 opacity-40 overflow-hidden"></div>
          
          {/* Flying White Bug Animation via Framer Motion - Only active on hover */}
          <motion.div 
            animate={isHovered ? { 
              top: ['0%', '100%'], 
              x: ['-50%', '-20%', '-80%', '-50%'], // "Flying" jitter
              opacity: [0, 1, 1, 0] 
            } : { top: '0%', opacity: 0 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-30"
          >
            <div className="bg-red-600 p-2 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)] border-2 border-white flex items-center justify-center">
              <Bug size={24} className="text-white transform rotate-180" />
            </div>
          </motion.div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  
                  {/* Content Card */}
                  <div className={`w-full lg:w-[45%] flex pl-20 lg:pl-0 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="w-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(220,38,38,0.12)] hover:bg-white/90 group text-left relative overflow-hidden">
                      {/* Interactive Hover Glow */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.3)] z-20 flex items-center justify-center font-bold text-red-600 text-xl transform transition-transform duration-500 hover:scale-110">
                    {index + 1}
                  </div>

                  {/* Icon Card */}
                  <div className={`hidden lg:flex w-[45%] ${isEven ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-24 h-24 bg-white/60 backdrop-blur-md rounded-2xl border border-white flex items-center justify-center shadow-xl shadow-red-100"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
