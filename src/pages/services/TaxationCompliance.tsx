import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, ArrowLeft, ArrowRight, TrendingUp, Shield, FileText } from 'lucide-react';

const TaxationCompliance = () => {
  const offerings = [
    {
      title: 'Income Tax Services',
      description: 'Comprehensive income tax planning, compliance, and advisory services for individuals and businesses.',
      details: [
        'Income tax return filing',
        'Tax planning and optimization',
        'Assessment proceedings representation',
        'Advance tax calculations and payments'
      ]
    },
    {
      title: 'GST Compliance',
      description: 'Complete GST registration, compliance, and advisory services to ensure seamless tax operations.',
      details: [
        'GST registration and amendments',
        'Monthly/Quarterly return filing',
        'Input tax credit optimization',
        'GST audit and litigation support'
      ]
    },
    {
      title: 'Corporate Tax Advisory',
      description: 'Strategic corporate tax planning and compliance services for companies and LLPs.',
      details: [
        'Corporate tax return preparation',
        'Tax efficient structuring',
        'Merger & acquisition tax planning',
        'International taxation advisory'
      ]
    },
    {
      title: 'Tax Planning & Strategy',
      description: 'Proactive tax planning strategies to minimize tax liability while ensuring full compliance.',
      details: [
        'Annual tax planning sessions',
        'Investment tax planning',
        'Succession planning',
        'Tax efficient business structures'
      ]
    }
  ];

  const benefits = [
    'Minimize tax liability through strategic planning',
    'Ensure 100% compliance with tax regulations',
    'Avoid penalties and interest charges',
    'Professional representation before tax authorities',
    'Timely filing of all tax returns',
    'Optimize cash flow through tax planning'
  ];

  const taxTypes = [
    {
      icon: Calculator,
      title: 'Income Tax',
      services: ['Individual ITR Filing', 'Corporate Tax Returns', 'TDS Compliance', 'Tax Planning']
    },
    {
      icon: FileText,
      title: 'GST Services',
      services: ['GST Registration', 'Return Filing', 'Refund Processing', 'Compliance Audit']
    },
    {
      icon: TrendingUp,
      title: 'Business Tax',
      services: ['Partnership Firm Returns', 'LLP Compliance', 'Trust Returns', 'HUF Returns']
    },
    {
      icon: Shield,
      title: 'Tax Advisory',
      services: ['Tax Planning', 'Litigation Support', 'Appeal Filing', 'Assessment Defense']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Document Collection',
      description: 'Systematic collection and review of all relevant financial documents and records.'
    },
    {
      step: '02',
      title: 'Tax Analysis',
      description: 'Comprehensive analysis of tax liability and identification of optimization opportunities.'
    },
    {
      step: '03',
      title: 'Compliance & Filing',
      description: 'Accurate preparation and timely filing of all required tax returns and forms.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, updates, and support for all tax-related matters.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0B2545]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-br from-warm-cream/10 via-[#0B2545] to-[#1D4E89]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-warm-cream hover:text-white transition-colors mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-warm-cream rounded-full mb-8"
            >
              <Calculator className="h-12 w-12 text-[#0B2545]" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
            >
              Taxation & <span className="text-warm-cream">Compliance</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
            >
              Expert tax planning and compliance services to optimize your tax liability while ensuring full regulatory compliance
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Tax Services Grid */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our <span className="text-warm-cream">Tax Services</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taxTypes.map((tax, index) => (
              <motion.div
                key={tax.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 text-center hover:bg-warm-cream/20 hover:border-warm-cream/40 transition-all duration-300"
              >
                <tax.icon className="h-12 w-12 text-warm-cream mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{tax.title}</h3>
                <ul className="space-y-2">
                  {tax.services.map((service, idx) => (
                    <li key={idx} className="text-[#F8F8F5]/80 text-sm">{service}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Offerings */}
      <section className="py-20 bg-gradient-to-b from-warm-cream/5 via-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Comprehensive <span className="text-warm-cream">Tax Solutions</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8 hover:bg-warm-cream/20 hover:border-warm-cream/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-warm-cream mb-4">{offering.title}</h3>
                <p className="text-[#F8F8F5]/80 mb-6 leading-relaxed">{offering.description}</p>
                <ul className="space-y-2">
                  {offering.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                      <span className="text-[#F8F8F5]/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our <span className="text-warm-cream">Process</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-warm-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#0B2545]">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#F8F8F5]/80 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-t from-warm-cream/10 to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 uppercase">
                Tax Planning <span className="text-warm-cream">Benefits</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-warm-cream mt-1 flex-shrink-0" />
                    <span className="text-[#F8F8F5]/80 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-warm-cream mb-6">Tax Savings Achieved</h3>
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">₹2.5Cr+</div>
                <p className="text-warm-cream text-lg mb-6">Total tax savings for our clients in the last financial year</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-warm-cream/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-warm-cream/80">On-time Filing</div>
                  </div>
                  <div className="bg-warm-cream/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-warm-cream/80">Late Penalties</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1D4E89] to-warm-cream/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Optimize Your <span className="text-warm-cream">Tax Strategy</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-warm-cream/80 mb-8 leading-relaxed"
          >
            Let our tax experts help you minimize your tax liability while ensuring complete compliance. Schedule a consultation today.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-warm-cream text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Schedule Tax Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-cream hover:text-[#0B2545] transition-all duration-300 flex items-center justify-center"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TaxationCompliance;
