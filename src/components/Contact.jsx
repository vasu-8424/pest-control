import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    // Format the message for WhatsApp
    const text = `*New Service Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    
    // Target WhatsApp Number
    const whatsappNumber = "918885914421";
    
    // Create WhatsApp API URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setResult("Request Sent!");
    event.target.reset();
  };

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
                <p className="text-gray-600">Adithya Nagar 1st street, Childrens Park Rd, Nellore, Andhra Pradesh 524002</p>
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
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Request a Service</h3>
              
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold">Request Sent!</h4>
                  <p className="text-lg">Thank you for reaching out. We'll contact you shortly for your free inspection.</p>
                  <button 
                    onClick={() => setStatus("idle")} 
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  {status === "error" && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg flex items-center gap-3">
                      <AlertCircle size={20} className="shrink-0" />
                      <p>{result || "Something went wrong. Please try again."}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input 
                        name="name"
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none" 
                        placeholder="Enter Your Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        name="phone"
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none" 
                        placeholder="+91 XXX XXX XXXX" 
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                    <select 
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none bg-white selection:bg-red-50"
                    >
                      <option value="">Select a Service</option>
                      <option value="Termite Control">Termite Control</option>
                      <option value="Cockroach Control">Cockroach Control</option>
                      <option value="Rodent Control">Rodent Control</option>
                      <option value="Bed Bugs Control">Bed Bugs Control</option>
                      <option value="AMC Plan Inquiry">AMC Plan Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message / Address</label>
                    <textarea 
                      name="message"
                      rows="4" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none resize-none" 
                      placeholder="Provide details about the pest issue and your location..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 ${status === "loading" ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
