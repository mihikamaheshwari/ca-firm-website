import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gavel, CheckCircle, ArrowLeft, ArrowRight, Scale, FileText, Shield, AlertTriangle } from 'lucide-react';

const LegalCompliance = () => {
  const offerings = [
    {
      title: 'Legal Documentation',
      description: 'Comprehensive legal documentation services including contracts, agreements, and compliance documents.',
      details: [
        'Contract drafting and review',
        'Partnership and shareholder agreements',
        'Employment contracts and policies',
        'Non-disclosure agreements (NDAs)',
        'Terms of service and privacy policies',
        'Legal notices and correspondence'
      ]
    },
    {
      title: 'Regulatory Compliance',
      description: 'Complete regulatory compliance services to ensure your business adheres to all applicable laws and regulations.',
      details: [
        'Industry-specific compliance audits',
        'Regulatory filing and submissions',
        'Compliance policy development',
        'Risk assessment and mitigation',
        'Training and awareness programs',
        'Ongoing compliance monitoring'
      ]
    },
    {
      title: 'Legal Advisory',
      description: 'Expert legal advisory services to guide your business through complex legal matters and decisions.',
      details: [
        'Business law consultation',
        'Mergers and acquisitions support',
        'Intellectual property guidance',
        'Employment law advisory',
        'Commercial litigation support',
        'Dispute resolution strategies'
      ]
    },
    {
      title: 'Due Diligence',
      description: 'Thorough due diligence services for business transactions, investments, and strategic partnerships.',
      details: [
        'Legal due diligence for M&A',
        'Compliance verification audits',
        'Contract and agreement review',
        'Regulatory compliance assessment',
        'Risk identification and analysis',
        'Due diligence report preparation'
      ]
    }
  ];

  const benefits = [
    'Complete legal protection and compliance',
    'Risk mitigation and management',
    'Expert guidance on complex legal matters',
    'Timely resolution of legal issues',
    'Cost-effective legal solutions',
    'Peace of mind for business operations'
  ];

  const features = [
    {
      icon: Scale,
      title: 'Legal Expertise',
      description: 'Experienced legal professionals with deep knowledge across multiple practice areas.'
    },
    {
      icon: Shield,
      title: 'Risk Protection',
      description: 'Comprehensive risk assessment and protection strategies for your business.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Professional legal documentation services with attention to detail and compliance.'
    },
    {
      icon: AlertTriangle,
      title: 'Proactive Approach',
      description: 'Proactive legal strategies to prevent issues before they become problems.'
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
              <Gavel className="h-12 w-12 text-[#0B2545]" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
            >
              Legal <span className="text-warm-cream">Compliance</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive legal compliance services to protect your business and ensure adherence to all regulatory requirements
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Why Choose Our <span className="text-warm-cream">Legal Services?</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 text-center hover:bg-warm-cream/20 hover:border-warm-cream/40 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-warm-cream mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#F8F8F5]/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gradient-to-b from-warm-cream/5 via-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our <span className="text-warm-cream">Services</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 uppercase">
                Benefits of Professional <span className="text-warm-cream">Legal Compliance</span>
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
              <h3 className="text-2xl font-bold text-warm-cream mb-6">Service Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">1000+</div>
                  <div className="text-warm-cream">Legal Documents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-warm-cream">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-warm-cream">Legal Matters Resolved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-warm-cream">Legal Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-warm-cream/10 to-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Ready to Ensure Legal <span className="text-warm-cream">Compliance?</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-warm-cream/80 mb-8 leading-relaxed"
          >
            Protect your business with our comprehensive legal compliance services and expert advisory support.
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
              Get Legal Support
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

export default LegalCompliance;
