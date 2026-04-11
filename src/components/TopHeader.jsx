import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-red-700 text-white py-2 hidden md:block">
      <div className="container mx-auto px-6 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <a href="tel:8885914421" className="flex items-center hover:text-red-200 transition-colors">
            <Phone size={16} className="mr-2" />
            +91 8885914421
          </a>
          <a href="mailto:simhapuripestcontrol@gmail.com" className="flex items-center hover:text-red-200 transition-colors">
            <Mail size={16} className="mr-2" />
            simhapuripestcontrol@gmail.com
          </a>
        </div>
        <div className="font-medium tracking-wide">
          24/7 Pest Control Services in Nellore
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
