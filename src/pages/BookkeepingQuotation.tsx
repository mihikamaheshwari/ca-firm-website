import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Shield, Users, Clock } from 'lucide-react';

const BookkeepingQuotation = () => {
  const pricingPlans = [
    {
      name: 'Basic Bookkeeping',
      description: 'For small businesses with simple needs',
      price: '2,000',
      currency: 'AED',
      period: 'month',
      features: [
        'Up to 50 transactions/month',
        'Recording daily transactions',
        'Bank reconciliation (monthly)',
        'Basic VAT computation',
        'Profit & Loss Statement',
        'Balance Sheet preparation',
        'Email support'
      ],
      popular: false,
      buttonText: 'Contact Us',
      buttonStyle: 'border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-[#0B2545]'
    },
    {
      name: 'Standard Bookkeeping',
      description: 'For growing businesses & professionals',
      price: '3,500',
      currency: 'AED',
      period: 'month',
      features: [
        '50-150 transactions/month',
        'All Basic features included',
        'Accounts Receivable management',
        'Accounts Payable management',
        'Cash Flow Statement',
        'Monthly financial reports',
        'Tax consultancy support',
        'Phone & email support'
      ],
      popular: true,
      buttonText: 'Contact Us',
      buttonStyle: 'bg-warm-cream text-[#0B2545] hover:bg-white'
    },
    {
      name: 'Comprehensive',
      description: 'For established businesses with complex needs',
      price: '5,000',
      currency: 'AED',
      period: 'month',
      features: [
        '150+ transactions/month',
        'All Standard features included',
        'Payroll management',
        'IFRS compliance reporting',
        'Advanced tax optimization',
        'Dedicated account manager',
        'Priority support',
        'Custom financial reporting'
      ],
      popular: false,
      buttonText: 'Contact Us',
      buttonStyle: 'border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-[#0B2545]'
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: '18+ Years Experience',
      description: 'Proven expertise in bookkeeping and financial services'
    },
    {
      icon: Shield,
      title: 'IFRS Compliance',
      description: 'International standards with UAE local tax law expertise'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Professional accountants committed to your success'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Monthly reports delivered on time, every time'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0B2545]">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 bg-gradient-to-br from-[#0B2545] to-[#1D4E89] relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional accounting background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/services/bookkeeping-services"
              className="inline-flex items-center text-warm-cream hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Bookkeeping Services
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              Bookkeeping Services
              <span className="block text-warm-cream">Quotation</span>
            </h1>
            
            <p className="text-xl text-[#F8F8F5]/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional bookkeeping solutions tailored to your business needs. 
              Choose the perfect plan to streamline your financial operations.
            </p>
            
            <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-warm-cream font-semibold mb-2">Dear Muhammad Ghazaly,</p>
              <p className="text-[#F8F8F5]/90 leading-relaxed">
                We appreciate your interest in our professional bookkeeping services. As an experienced and reliable firm with over 18 years of expertise in accounting, auditing, and consultancy, we are excited to offer our services to your company.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Plans */}
      <section className="py-20 bg-[#0B2545] relative">
        {/* Decorative Financial Elements */}
        <div className="absolute top-10 left-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Financial charts"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Business analytics"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">Pricing Structure</h2>
            <p className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto">
              Flexible pricing based on transaction volume and complexity of your bookkeeping needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative rounded-lg overflow-hidden flex flex-col min-h-[600px] ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-warm-cream/20 to-warm-cream/5 border-2 border-warm-cream' 
                    : 'bg-[#1D4E89]/20 border border-white/10'
                } hover:border-warm-cream/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-warm-cream text-[#0B2545] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8 flex-grow flex flex-col h-full">
                  <div className="text-center mb-8 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-[#F8F8F5]/70 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-warm-cream ml-2">{plan.currency}/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-grow mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                        <span className="text-[#F8F8F5]/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-block text-center ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Package */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Package</h3>
              <p className="text-[#F8F8F5]/90 mb-6">
                For high complexity businesses requiring more frequent reporting and specialized services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-xl font-semibold text-warm-cream">Pricing: On Request</span>
                <Link
                  to="/contact"
                  className="bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Image Section */}
      <section className="py-16 bg-gradient-to-r from-[#1D4E89] to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 uppercase">
                Professional <span className="text-warm-cream">Excellence</span>
              </h3>
              <p className="text-xl text-[#F8F8F5]/90 leading-relaxed mb-6">
                Our experienced team combines traditional accounting expertise with modern technology 
                to deliver accurate, timely, and comprehensive bookkeeping solutions.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream">18+</div>
                  <div className="text-sm text-[#F8F8F5]/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream">500+</div>
                  <div className="text-sm text-[#F8F8F5]/70">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warm-cream">100%</div>
                  <div className="text-sm text-[#F8F8F5]/70">Compliance Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional accountant at work"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-warm-cream/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-20 bg-gradient-to-b from-[#0B2545] to-[#1D4E89] relative">
        {/* Professional Team Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Professional team meeting"
            className="w-96 h-96 object-cover rounded-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">Scope of Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bookkeeping Services */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-warm-cream mb-6">Bookkeeping Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Recording Transactions:</strong>
                    <span className="text-[#F8F8F5]/90"> Categorizing daily financial transactions (sales, purchases, receipts, and payments)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Bank Reconciliation:</strong>
                    <span className="text-[#F8F8F5]/90"> Monthly reconciliation of bank statements to ensure accuracy</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">VAT & Tax Computation:</strong>
                    <span className="text-[#F8F8F5]/90"> Handling VAT returns, ensuring compliance with UAE tax laws</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Financial Statements:</strong>
                    <span className="text-[#F8F8F5]/90"> Preparation of P&L, Balance Sheet, and Cash Flow Statement</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Accounts Management:</strong>
                    <span className="text-[#F8F8F5]/90"> Monitoring outstanding invoices and supplier payments</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Consultancy Services */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-warm-cream mb-6">Consultancy & Advisory</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Financial Reporting:</strong>
                    <span className="text-[#F8F8F5]/90"> Preparation of reports as per local and international accounting standards (IFRS)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Tax Consultancy:</strong>
                    <span className="text-[#F8F8F5]/90"> Advise on optimizing VAT and any other applicable taxes</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Ongoing Support:</strong>
                    <span className="text-[#F8F8F5]/90"> Regular communication and support via email/phone regarding financial queries</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0B2545] relative">
        {/* Success Story Background */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Business success"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">Why Choose Us?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-warm-cream/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-warm-cream" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#F8F8F5]/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-20 bg-gradient-to-b from-[#0B2545] to-[#1D4E89] relative">
        {/* Legal/Professional Background */}
        <div className="absolute top-0 right-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Professional documentation"
            className="w-80 h-80 object-cover rounded-lg"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase">Terms and Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-warm-cream mb-2">Payment Terms</h4>
                  <p className="text-[#F8F8F5]/90">Monthly payments are due in advance before the commencement of each service month.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-warm-cream mb-2">Contract Duration</h4>
                  <p className="text-[#F8F8F5]/90">Minimum contract period is 6 months. Auto-renewal unless 30-day written notice is provided.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-warm-cream mb-2">Data Security</h4>
                  <p className="text-[#F8F8F5]/90">High standards of data security using secure cloud-based platforms and encryption methods.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-warm-cream mb-2">Currency</h4>
                  <p className="text-[#F8F8F5]/90">All payments are to be made in AED (United Arab Emirates Dirham).</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-warm-cream mb-2">Cancellation</h4>
                  <p className="text-[#F8F8F5]/90">If services are canceled before month-end, the full payment for that month is non-refundable.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B2545] relative">
        {/* Handshake/Partnership Background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Professional partnership"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#F8F8F5]/80 mb-8">
              Contact us today to discuss your bookkeeping needs and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-warm-cream text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300"
              >
                Contact Us Now
              </Link>
              <Link
                to="/services/bookkeeping-services"
                className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-cream hover:text-[#0B2545] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookkeepingQuotation;
