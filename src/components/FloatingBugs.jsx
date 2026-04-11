import React from 'react';
import { motion } from 'framer-motion';
import { Bug } from 'lucide-react';

const FloatingBugs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden opacity-30">
      {/* Top Left Bug */}
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -30, 0],
          x: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 text-red-900/10"
      >
        <Bug size={300} />
      </motion.div>

      {/* Bottom Right Bug */}
      <motion.div
        animate={{ 
          rotate: [45, 60, 30, 45],
          y: [0, 40, 0],
          x: [0, -40, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] -right-20 text-red-900/10"
      >
        <Bug size={400} />
      </motion.div>

      {/* Middle Left Bug (smaller) */}
      <motion.div
        animate={{ 
          rotate: [-45, -20, -60, -45],
          y: [0, 50, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -left-32 text-red-900/10"
      >
        <Bug size={250} />
      </motion.div>
      
       {/* Bottom Left Bug */}
       <motion.div
        animate={{ 
          rotate: [90, 110, 70, 90],
          y: [0, -20, 0],
          x: [0, -40, 0]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 right-[30%] text-red-900/10"
      >
        <Bug size={200} />
      </motion.div>
    </div>
  );
};

export default FloatingBugs;
