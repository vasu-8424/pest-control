import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-wider mb-2">Contact Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Your Free Inspection Today
          </h2>
          <p className="text-gray-600 text-lg">
            Reach out to our experts for a quick response. We are ready to assist you 24/7 with any pest emergencies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 card-hover">
              <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Call Us 24/7</h4>
                <p className="text-gray-600">+91 8885914421</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 card-hover">
              <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Email Us</h4>
                <p className="text-gray-600">simhapuripestcontrol<br/>@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 card-hover">
              <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Location</h4>
                <p className="text-gray-600">Nellore, Andhra Pradesh<br/>Serving All Major Areas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 card-hover">
              <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                <p className="text-gray-600">24/7 Support Available</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Request a Service</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none" placeholder="+91 XXX XXX XXXX" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none bg-white">
                  <option>Select a Service</option>
                  <option>Termite Control</option>
                  <option>Cockroach Control</option>
                  <option>Rodent Control</option>
                  <option>Bed Bugs Control</option>
                  <option>AMC Plan Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message / Address</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none resize-none" placeholder="Provide details about the pest issue and your location..."></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-lg transition-colors shadow-lg">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
