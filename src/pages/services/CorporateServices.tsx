import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, CheckCircle, ArrowLeft, ArrowRight, Users, Shield, FileText, Target } from 'lucide-react';

const CorporateServices = () => {
  const offerings = [
    {
      title: 'Company Formation',
      description: 'Complete assistance for incorporating your business with proper legal structure and compliance.',
      details: [
        'Private Limited Company incorporation',
        'Partnership and LLP formation',
        'Board resolution drafting',
        'MOA and AOA preparation',
        'Digital signature procurement',
        'Name approval and reservation'
      ]
    },
    {
      title: 'Annual Compliance',
      description: 'Comprehensive annual compliance services to ensure your company meets all regulatory requirements.',
      details: [
        'Annual return filing (Form AOC-4)',
        'Board meeting compliance',
        'Annual General Meeting conduct',
        'Director KYC compliance',
        'Statutory registers maintenance',
        'Form filing and documentation'
      ]
    },
    {
      title: 'Board Meetings & AGM',
      description: 'Professional assistance in conducting board meetings and annual general meetings as per statutory requirements.',
      details: [
        'Board meeting agenda preparation',
        'Resolution drafting and recording',
        'Meeting minute preparation',
        'AGM notice and proceedings',
        'Compliance with statutory timelines',
        'Digital meeting facilitation'
      ]
    },
    {
      title: 'ROC Compliance',
      description: 'Complete Registrar of Companies compliance services including form filings and statutory requirements.',
      details: [
        'DIR-3 KYC form filing',
        'Change in director details',
        'Registered office changes',
        'Share capital alterations',
        'Charge creation and modification',
        'Company status updates'
      ]
    }
  ];

  const benefits = [
    'Complete legal compliance assurance',
    'Timely filing of statutory documents',
    'Professional board meeting conduct',
    'Expert guidance on corporate matters',
    'Penalty avoidance and risk mitigation',
    'Streamlined corporate governance'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Ensure complete legal protection with proper corporate structure and compliance.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated team of corporate law experts and chartered accountants.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive documentation and record-keeping for all corporate matters.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused approach to achieve your business objectives within legal framework.'
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
              <Building className="h-12 w-12 text-[#0B2545]" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
            >
              Corporate <span className="text-warm-cream">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive corporate services from company formation to ongoing compliance and governance
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
            Why Choose Our <span className="text-warm-cream">Corporate Services?</span>
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
                Benefits of Professional <span className="text-warm-cream">Corporate Services</span>
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
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-warm-cream">Companies Incorporated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-warm-cream">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-warm-cream">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-warm-cream">Support Available</div>
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
            Ready to Establish Your <span className="text-warm-cream">Corporate Foundation?</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-warm-cream/80 mb-8 leading-relaxed"
          >
            Let our experts handle all your corporate needs from formation to ongoing compliance and governance.
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
              Start Your Company
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

export default CorporateServices;
