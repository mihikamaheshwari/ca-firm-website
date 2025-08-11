import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Quote } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2007', event: 'Established as Proprietorship', description: 'Started our journey with a vision to provide quality financial services' },
    { year: '2016', event: 'Converted to Partnership', description: 'Expanded our team and service offerings to better serve our clients' },
    { year: '2024', event: 'Multi-branch Operations', description: 'Operating from Bhilwara and Jaipur with a team of 12+ professionals' },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-br from-warm-cream/10 via-[#0B2545] to-[#1D4E89] relative overflow-hidden"
      >
        {/* Professional Team Background */}
        <div className="absolute inset-0 opacity-15 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional business team"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            Building trust through expertise, delivering excellence through experience
          </motion.p>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our Journey
          </motion.h2>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <div className={`bg-[#1D4E89]/20 border border-warm-cream/30 rounded-lg p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <h3 className="text-2xl font-bold text-warm-cream mb-2">{item.event}</h3>
                    <p className="text-[#F8F8F5]/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-warm-cream text-[#0B2545] rounded-full flex items-center justify-center text-xl font-bold">
                  {item.year}
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Excellence Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D4E89] to-[#0B2545]">
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
                18+ Years of <span className="text-warm-cream">Professional Excellence</span>
              </h3>
              <p className="text-xl text-[#F8F8F5]/90 leading-relaxed mb-8">
                From our humble beginnings as a proprietorship in 2007 to becoming a trusted 
                partnership firm with multi-branch operations, we have consistently delivered 
                exceptional financial services across India.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cream mb-2">2000+</div>
                  <div className="text-[#F8F8F5]/70">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cream mb-2">12+</div>
                  <div className="text-[#F8F8F5]/70">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cream mb-2">2</div>
                  <div className="text-[#F8F8F5]/70">Office Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-cream mb-2">100%</div>
                  <div className="text-[#F8F8F5]/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dark financial charts and analytics dashboard"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-warm-cream/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-cream/10 backdrop-blur-sm border border-warm-cream/20 rounded-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-warm-cream mr-4" />
                <h3 className="text-3xl font-bold text-white uppercase">Vision</h3>
              </div>
              <p className="text-[#F8F8F5]/80 leading-relaxed text-lg">
                To be the most trusted and preferred chartered accountancy firm in India, 
                known for our integrity, expertise, and commitment to delivering exceptional 
                financial solutions that drive business success and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-cream/10 backdrop-blur-sm border border-warm-cream/20 rounded-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-warm-cream mr-4" />
                <h3 className="text-3xl font-bold text-white uppercase">Mission</h3>
              </div>
              <p className="text-[#F8F8F5]/80 leading-relaxed text-lg">
                To provide comprehensive, reliable, and innovative accounting and financial 
                advisory services while maintaining the highest standards of professional 
                ethics and ensuring complete client satisfaction through personalized attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-12"
          >
            <Quote className="h-16 w-16 text-warm-cream mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
              "Excellence is not just our goal; it's our commitment to every client. 
              We believe in building lasting relationships through trust, transparency, and expertise."
            </blockquote>
            <div className="border-t border-warm-cream/30 pt-6">
              <p className="text-xl font-semibold text-warm-cream">CA Lalit Kabra</p>
              <p className="text-[#F8F8F5]/80">Founding Partner</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-t from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our Values
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', description: 'We maintain the highest ethical standards in all our professional dealings' },
              { title: 'Excellence', description: 'We strive for perfection in every service we provide to our clients' },
              { title: 'Innovation', description: 'We embrace modern technology and methodologies to serve you better' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-[#0B2545]/50 backdrop-blur-sm border border-warm-cream/10 rounded-lg p-8 hover:bg-[#0B2545]/80 hover:border-warm-cream/30 transition-all duration-300">
                  <CheckCircle className="h-12 w-12 text-warm-cream mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-[#F8F8F5]/80 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;