import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
  };

  const offices = [
    {
      city: 'Bhilwara (Head Office)',
      address: '134, First Floor, "Govindam", Old RTO Road, Bhilwara – 311001, Rajasthan (India)',
      phone: '+91-9887610105',
      phone2: '+9101482451727',
      email: 'calalit18@gmail.com',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM'
    },
    {
      city: 'Jaipur (Branch Office)',
      address: 'Shop No. 10, First Floor, Jayanti Bazaar, M.I. Road, Jaipur – 302001, Rajasthan (India)',
      phone: '+91-98290-66538',
      email: 'kabra_lalit@yahoo.co.in',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-br from-warm-cream/10 via-[#0B2545] to-[#1D4E89]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            Contact <span className="text-warm-cream">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            Get in touch with our expert team for personalized financial solutions and professional consultation
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-8 uppercase">Send us a <span className="text-warm-cream">Message</span></h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-warm-cream font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B2545]/50 border border-warm-cream/50 rounded-lg text-white placeholder-[#F8F8F5]/50 focus:border-warm-cream focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-warm-cream font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B2545]/50 border border-warm-cream/50 rounded-lg text-white placeholder-[#F8F8F5]/50 focus:border-warm-cream focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-[#F8F8F5] font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B2545]/50 border border-[#1D4E89]/50 rounded-lg text-white placeholder-[#F8F8F5]/50 focus:border-white focus:outline-none transition-colors"
                        placeholder="+91-9887610105"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-[#F8F8F5] font-medium mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B2545]/50 border border-[#1D4E89]/50 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="audit">Audit & Assurance</option>
                        <option value="taxation">Taxation & Compliance</option>
                        <option value="advisory">Financial Advisory</option>
                        <option value="company-law">Company Law</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#F8F8F5] font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B2545]/50 border border-[#1D4E89]/50 rounded-lg text-white placeholder-[#F8F8F5]/50 focus:border-white focus:outline-none transition-colors resize-none"
                      placeholder="Please describe your requirements or questions..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-warm-cream text-[#0B2545] py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#1D4E89] hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 uppercase">Office Locations</h2>
                
                <div className="space-y-8">
                  {offices.map((office, index) => (
                    <div
                      key={office.city}
                      className="bg-[#1D4E89]/20 border border-warm-cream/10 rounded-lg p-6 hover:bg-[#1D4E89]/30 hover:border-warm-cream/30 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-warm-cream mb-4">{office.city}</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                          <p className="text-[#F8F8F5]/80">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-warm-cream" />
                          <div className="text-[#F8F8F5]/80">
                            <a href={`tel:${office.phone}`} className="hover:text-warm-cream transition-colors block">
                              {office.phone}
                            </a>
                            {office.phone2 && (
                              <a href={`tel:${office.phone2}`} className="hover:text-warm-cream transition-colors block">
                                {office.phone2}
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-warm-cream" />
                          <a href={`mailto:${office.email}`} className="text-[#F8F8F5]/80 hover:text-warm-cream transition-colors">
                            {office.email}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-warm-cream" />
                          <p className="text-[#F8F8F5]/80">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#1D4E89]/30 to-[#0B2545]/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">Quick Contact</h3>
                <p className="text-[#F8F8F5]/80 mb-6 leading-relaxed">
                  Need immediate assistance? Our team is available during business hours to address your urgent requirements.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919887610105"
                    className="flex items-center text-[#1D4E89] hover:text-white transition-colors font-semibold"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    Call Now: +91-9887610105
                  </a>
                  <a
                    href="mailto:calalit18@gmail.com"
                    className="flex items-center text-[#1D4E89] hover:text-white transition-colors font-semibold"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    Email: calalit18@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Consultation Section */}
      <section className="py-16 bg-gradient-to-r from-[#1D4E89] to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-4xl font-bold text-white mb-6 uppercase">
                Professional <span className="text-warm-cream">Support</span>
              </h3>
              <p className="text-xl text-[#F8F8F5]/90 leading-relaxed mb-8">
                Our offices in Bhilwara and Jaipur are equipped with modern facilities and staffed 
                by experienced professionals ready to serve your accounting and financial needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream mb-2">24hr</div>
                  <div className="text-[#F8F8F5]/70">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream mb-2">FREE</div>
                  <div className="text-[#F8F8F5]/70">Initial Consultation</div>
                </div>
              </div>
            </div>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional accounting workspace with financial documents"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-warm-cream/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;