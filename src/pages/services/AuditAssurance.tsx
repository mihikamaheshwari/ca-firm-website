import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle, ArrowLeft, ArrowRight, Users, Calendar, Target } from 'lucide-react';

const AuditAssurance = () => {
  const offerings = [
    {
      title: 'Statutory Audits',
      description: 'Comprehensive statutory audit services ensuring compliance with legal requirements and providing stakeholder confidence.',
      details: [
        'Annual financial statement audits',
        'Compliance with Companies Act 2013',
        'Independent auditor reports',
        'Risk assessment and internal control evaluation'
      ]
    },
    {
      title: 'Internal Audits',
      description: 'Independent evaluation of internal controls, processes, and risk management systems.',
      details: [
        'Operational efficiency reviews',
        'Internal control assessment',
        'Process improvement recommendations',
        'Fraud detection and prevention'
      ]
    },
    {
      title: 'GST Audit',
      description: 'Specialized GST audit services ensuring complete compliance with GST regulations and optimization of tax positions.',
      details: [
        'GST compliance verification and review',
        'Input tax credit reconciliation',
        'GST return accuracy assessment',
        'GST refund claim verification and support'
      ]
    },
    {
      title: 'Bank Audit',
      description: 'Specialized banking sector audit services covering regulatory compliance and risk management for financial institutions.',
      details: [
        'RBI compliance audit for banks',
        'Credit portfolio risk assessment',
        'Banking operations efficiency review',
        'Regulatory reporting verification'
      ]
    },
    {
      title: 'Tax Audits',
      description: 'Comprehensive tax audit services to ensure compliance with tax regulations and optimize tax positions.',
      details: [
        'Income Tax audit under Section 44AB',
        'Tax provision reviews and assessments',
        'Transfer pricing documentation',
        'Tax planning and compliance verification'
      ]
    },
    {
      title: 'Management Audits',
      description: 'Comprehensive evaluation of management effectiveness and organizational performance.',
      details: [
        'Strategic planning assessment',
        'Operational efficiency analysis',
        'Performance measurement systems',
        'Governance structure evaluation'
      ]
    }
  ];

  const benefits = [
    'Enhanced credibility with stakeholders',
    'Improved internal controls and risk management',
    'Regulatory compliance assurance',
    'Identification of operational inefficiencies',
    'Professional audit opinions and recommendations',
    'Fraud prevention and detection'
  ];

  const process = [
    {
      step: '01',
      title: 'Planning & Risk Assessment',
      description: 'Comprehensive understanding of your business, risk assessment, and audit planning.'
    },
    {
      step: '02',
      title: 'Fieldwork & Testing',
      description: 'Detailed examination of financial records, transactions, and internal controls.'
    },
    {
      step: '03',
      title: 'Analysis & Evaluation',
      description: 'Analysis of findings, evaluation of compliance, and identification of issues.'
    },
    {
      step: '04',
      title: 'Reporting & Recommendations',
      description: 'Detailed audit reports with findings, recommendations, and improvement suggestions.'
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
              <FileCheck className="h-12 w-12 text-[#0B2545]" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
            >
              Audit & <span className="text-warm-cream">Assurance</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive audit services ensuring compliance with regulatory requirements and providing valuable insights for business improvement
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Service Offerings */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our <span className="text-warm-cream">Audit Services</span>
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
      <section className="py-20 bg-gradient-to-b from-warm-cream/5 via-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16 uppercase"
          >
            Our <span className="text-warm-cream">Audit Process</span>
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
                Why Choose Our <span className="text-warm-cream">Audit Services?</span>
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
              className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <Users className="h-12 w-12 text-warm-cream mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
                  <p className="text-warm-cream">Audits Completed</p>
                </div>
                <div>
                  <Calendar className="h-12 w-12 text-warm-cream mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">18+</h3>
                  <p className="text-warm-cream">Years Experience</p>
                </div>
                <div>
                  <Target className="h-12 w-12 text-warm-cream mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                  <p className="text-warm-cream">Compliance Rate</p>
                </div>
                <div>
                  <FileCheck className="h-12 w-12 text-warm-cream mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">Zero</h3>
                  <p className="text-warm-cream">Compliance Issues</p>
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
            Ready to Ensure <span className="text-warm-cream">Compliance & Excellence?</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-warm-cream/80 mb-8 leading-relaxed"
          >
            Contact us today to discuss your audit requirements and discover how our comprehensive audit services can benefit your business.
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
              Get Consultation
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

export default AuditAssurance;
