import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  ShoppingCart, 
  Briefcase, 
  Heart, 
  Building2,
  Truck,
  Laptop,
  GraduationCap
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Comprehensive accounting solutions for manufacturing businesses including inventory management, cost accounting, and compliance.',
      services: ['Cost Accounting', 'Inventory Valuation', 'Excise & Customs', 'Labour Compliance']
    },
    {
      icon: ShoppingCart,
      name: 'Trading & Retail',
      description: 'Specialized services for trading businesses covering GST compliance, inventory tracking, and financial management.',
      services: ['GST Compliance', 'Inventory Management', 'Cash Flow Analysis', 'Vendor Management']
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Tailored accounting and tax solutions for professional service firms including consultancies and agencies.',
      services: ['Service Tax', 'Professional Tax', 'Project Accounting', 'Revenue Recognition']
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Specialized financial services for healthcare providers including hospitals, clinics, and medical practices.',
      services: ['Medical Equipment Depreciation', 'Insurance Claims', 'Regulatory Compliance', 'Patient Billing']
    },
    {
      icon: Building2,
      name: 'Real Estate',
      description: 'Complete financial management for real estate developers and property management companies.',
      services: ['Project Accounting', 'RERA Compliance', 'Capital Gains', 'Property Valuation']
    },
    {
      icon: Truck,
      name: 'Transportation & Logistics',
      description: 'Accounting solutions for transportation companies including fleet management and route optimization.',
      services: ['Fleet Accounting', 'Route Costing', 'Fuel Management', 'Driver Payroll']
    },
    {
      icon: Laptop,
      name: 'Technology & IT',
      description: 'Modern accounting solutions for tech companies including software development and IT services.',
      services: ['Software Capitalization', 'R&D Credits', 'International Taxation', 'Stock Options']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Financial management services for educational institutions including schools, colleges, and training centers.',
      services: ['Fee Management', 'Grant Accounting', 'Endowment Funds', 'Regulatory Reporting']
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
            <span className="text-warm-cream">Industries</span> We Serve
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#F8F8F5]/90 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized expertise across diverse industry sectors with tailored solutions for unique business challenges
          </motion.p>
        </div>
      </motion.section>

      {/* Industries Grid */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#1D4E89]/20 to-[#0B2545]/50 border border-white/10 rounded-lg p-6 h-full hover:bg-gradient-to-br hover:from-[#1D4E89]/30 hover:to-[#0B2545]/70 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#1D4E89] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F8F8F5] transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <p className="text-[#F8F8F5]/80 text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-[#1D4E89] font-semibold text-sm uppercase tracking-wide group-hover:text-white transition-colors">
                      Key Services:
                    </h4>
                    <ul className="space-y-1">
                      {industry.services.map((service) => (
                        <li key={service} className="flex items-center text-[#F8F8F5]/70 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#1D4E89] rounded-full mr-2 group-hover:bg-white transition-colors"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">Our Industry Impact</h2>
            <p className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto">
              Serving diverse industries with specialized expertise and proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '8+', label: 'Industries Served' },
              { number: '500+', label: 'Industry Clients' },
              { number: '18+', label: 'Years of Experience' },
              { number: '95%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center bg-[#0B2545]/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-[#0B2545]/80 hover:border-white/30 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-[#1D4E89] mb-2">{stat.number}</h3>
                <p className="text-[#F8F8F5]/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1D4E89]/20 border border-[#1D4E89]/30 rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-[#F8F8F5]/80 mb-8 leading-relaxed">
              Our adaptable expertise allows us to serve businesses across all sectors. 
              Contact us to discuss how we can tailor our services to your specific industry needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1D4E89] hover:text-white transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;