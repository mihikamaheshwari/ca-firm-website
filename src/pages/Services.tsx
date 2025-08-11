import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileCheck, 
  Calculator, 
  BookOpen, 
  Building, 
  TrendingUp, 
  Gavel, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring compliance with regulatory requirements and providing valuable insights for business improvement.',
      features: ['Statutory Audits', 'Internal Audits', 'Tax Audits', 'Management Audits'],
      link: '/services/audit-assurance'
    },
    {
      icon: Calculator,
      title: 'Taxation & Compliance',
      description: 'Expert tax planning and compliance services to optimize your tax liability while ensuring full regulatory compliance.',
      features: ['Income Tax', 'GST Compliance', 'Corporate Tax', 'Tax Planning'],
      link: '/services/taxation-compliance'
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping and accounting services to maintain accurate financial records and streamline your operations.',
      features: ['Financial Statements', 'Account Maintenance', 'MIS Reports', 'Cash Flow Management'],
      link: '/services/bookkeeping-services'
    },
    {
      icon: Building,
      title: 'Corporate Services',
      description: 'Complete corporate law services including company formation, compliance, and ongoing legal advisory support.',
      features: ['Company Formation', 'ROC Compliance', 'Board Meetings', 'Legal Documentation'],
      link: '/services/corporate-services'
    },
    {
      icon: TrendingUp,
      title: 'Financial Consulting',
      description: 'Strategic financial guidance to help businesses make informed decisions and achieve sustainable growth.',
      features: ['Business Valuations', 'Financial Planning', 'Investment Advisory', 'Risk Assessment'],
      link: '/services/financial-consulting'
    },
    {
      icon: Gavel,
      title: 'Legal Compliance',
      description: 'Comprehensive legal compliance services to ensure your business adheres to all regulatory requirements.',
      features: ['Legal Documentation', 'Regulatory Compliance', 'Legal Advisory', 'Due Diligence'],
      link: '/services/legal-compliance'
    }
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
        {/* Professional Services Background */}
        <div className="absolute inset-0 opacity-10 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Financial charts and analytics"
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
            Our <span className="text-warm-cream">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive financial solutions tailored to meet your business needs and drive growth
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-warm-cream/10 to-[#0B2545]/50 border border-warm-cream/20 rounded-lg p-6 h-full hover:bg-gradient-to-br hover:from-warm-cream/20 hover:to-[#0B2545]/70 hover:border-warm-cream/40 transition-all duration-300 flex flex-col">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-warm-cream rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-[#0B2545]" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-warm-cream mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#F8F8F5]/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-warm-cream rounded-full group-hover:bg-white transition-colors flex-shrink-0"></div>
                          <span className="text-[#F8F8F5]/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-warm-cream hover:text-white transition-colors group-hover:translate-x-2 transform duration-300"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Showcase */}
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
                Comprehensive <span className="text-warm-cream">Financial Solutions</span>
              </h3>
              <p className="text-xl text-[#F8F8F5]/90 leading-relaxed mb-8">
                From audit and assurance to taxation compliance, our expert team provides 
                end-to-end financial services designed to support your business growth and 
                ensure regulatory compliance across all sectors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream mb-2">6</div>
                  <div className="text-[#F8F8F5]/70">Core Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream mb-2">18+</div>
                  <div className="text-[#F8F8F5]/70">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Financial analytics and business reporting dashboard"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-warm-cream/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bookkeeping Quotation Highlight */}
      <section className="py-16 bg-gradient-to-r from-warm-cream/20 via-[#1D4E89] to-warm-cream/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-warm-cream/10 border-2 border-warm-cream/30 rounded-lg p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookOpen className="h-16 w-16 text-warm-cream mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4 uppercase">
                Get Your Bookkeeping Quotation
              </h3>
              <p className="text-xl text-[#F8F8F5]/90 mb-6 max-w-3xl mx-auto">
                Ready to streamline your financial records? Get a detailed quotation for our professional bookkeeping services with transparent pricing and comprehensive service breakdown.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/bookkeeping-quotation"
                  className="bg-warm-cream text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  View Quotation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services/bookkeeping-services"
                  className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-cream hover:text-[#0B2545] transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0B2545]/50 backdrop-blur-sm border border-white/10 rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">
              Need a Customized Solution?
            </h2>
            <p className="text-xl text-[#F8F8F5]/80 mb-8 leading-relaxed">
              Our team of experts is ready to discuss your specific requirements and 
              create a tailored solution that fits your business needs perfectly.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1D4E89] hover:text-white transition-all duration-300 inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;