import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, ArrowLeft, ArrowRight, BarChart3, FileText, PieChart, Target } from 'lucide-react';

const FinancialConsulting = () => {
  const offerings = [
    {
      title: 'Business Valuation',
      description: 'Professional business valuation services for mergers, acquisitions, financial reporting, and strategic planning.',
      details: [
        'Asset-based valuation methods',
        'Income approach valuations',
        'Market approach analysis',
        'Discounted cash flow modeling',
        'Comparable company analysis',
        'Fairness opinion reports'
      ]
    },
    {
      title: 'Financial Planning',
      description: 'Comprehensive financial planning and analysis to optimize your business performance and growth strategies.',
      details: [
        'Cash flow forecasting and analysis',
        'Budget preparation and monitoring',
        'Financial ratio analysis',
        'Investment appraisal and planning',
        'Working capital optimization',
        'Risk assessment and management'
      ]
    },
    {
      title: 'Investment Advisory',
      description: 'Expert investment advisory services to help you make informed decisions about your financial portfolio.',
      details: [
        'Portfolio analysis and optimization',
        'Investment strategy development',
        'Risk profiling and assessment',
        'Market research and analysis',
        'Asset allocation recommendations',
        'Performance monitoring and review'
      ]
    },
    {
      title: 'Financial Restructuring',
      description: 'Strategic financial restructuring services to improve your company\'s financial health and operational efficiency.',
      details: [
        'Debt restructuring and refinancing',
        'Capital structure optimization',
        'Turnaround and recovery planning',
        'Operational efficiency improvement',
        'Cost reduction strategies',
        'Stakeholder negotiations'
      ]
    }
  ];

  const benefits = [
    'Data-driven financial insights',
    'Strategic business planning support',
    'Risk mitigation and management',
    'Improved financial performance',
    'Expert investment guidance',
    'Customized solutions for your business'
  ];

  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Sophisticated financial modeling and analysis using cutting-edge tools and methodologies.'
    },
    {
      icon: FileText,
      title: 'Accurate Calculations',
      description: 'Precise financial calculations and projections backed by thorough research and analysis.'
    },
    {
      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Comprehensive portfolio analysis and optimization for maximum returns and minimal risk.'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Strategic planning and execution to help you achieve your financial objectives.'
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
              <TrendingUp className="h-12 w-12 text-[#0B2545]" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
            >
              Financial <span className="text-warm-cream">Consulting</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
            >
              Strategic financial consulting services to optimize your business performance and achieve your financial goals
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
            Why Choose Our <span className="text-warm-cream">Financial Consulting?</span>
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
                Benefits of Professional <span className="text-warm-cream">Financial Consulting</span>
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
                  <div className="text-4xl font-bold text-white mb-2">₹500Cr+</div>
                  <div className="text-warm-cream">Assets Valued</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-warm-cream">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">200+</div>
                  <div className="text-warm-cream">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">20%</div>
                  <div className="text-warm-cream">Avg. ROI Improvement</div>
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
            Ready to Optimize Your <span className="text-warm-cream">Financial Strategy?</span>
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-warm-cream/80 mb-8 leading-relaxed"
          >
            Let our financial experts help you make informed decisions and achieve sustainable growth for your business.
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
              Get Financial Advice
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

export default FinancialConsulting;
