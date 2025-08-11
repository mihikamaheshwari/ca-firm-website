import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Calendar, 
  Award, 
  Building,
  Shield,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Quote,
  Globe,
  Briefcase,
  Factory,
  ShoppingCart
} from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Calendar, label: 'Years of Experience', value: '18+' },
    { icon: Users, label: 'Clients Served', value: '2000+' },
    { icon: Award, label: 'Professionals', value: '12+' },
    { icon: Building, label: 'Branches', value: '2' },
  ];

  const services = [
    { title: 'Audit & Assurance', description: 'Comprehensive audit services with precision and compliance' },
    { title: 'Taxation & Compliance', description: 'Expert tax planning and regulatory compliance solutions' },
    { title: 'Financial Advisory', description: 'Strategic financial guidance for business growth' },
    { title: 'Company Law Advisory', description: 'Complete corporate law and governance solutions' },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Over 18 years of proven experience in financial services and regulatory compliance'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Tailored solutions designed to meet your specific business needs and objectives'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'Strategic guidance to help your business achieve sustainable growth and success'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Commitment to excellence with timely delivery and accurate financial solutions'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Agarwal',
      company: 'Agarwal Industries',
      message: 'M/s. Lalit Kabra & Co. has been our trusted financial partner for over 8 years. Their expertise in taxation and compliance has saved us significant costs.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Tech Solutions Pvt Ltd',
      message: 'Exceptional service quality and professional approach. They helped us streamline our entire financial operations with their expert guidance.',
      rating: 5
    },
    {
      name: 'Amit Jain',
      company: 'Jain Textiles',
      message: 'Outstanding audit and assurance services. Their attention to detail and comprehensive reporting has improved our business processes significantly.',
      rating: 5
    }
  ];

  const industries = [
    { icon: Factory, name: 'Manufacturing', description: 'Industrial & Manufacturing Sectors' },
    { icon: ShoppingCart, name: 'Retail', description: 'Retail & E-commerce Businesses' },
    { icon: Briefcase, name: 'Services', description: 'Professional Service Companies' },
    { icon: Globe, name: 'Import/Export', description: 'International Trade & Commerce' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B2545] via-[#1D4E89] to-warm-cream/20 overflow-hidden"
      >
        {/* Professional Background Image */}
        <div className="absolute inset-0 opacity-15 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional office building"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            Chartered Accountants<br />
            <span className="text-warm-cream">You Can Rely On</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Over 18 Years of Tax, Audit & Advisory Expertise
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="group bg-warm-cream text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0B2545] hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group border-2 border-warm-cream bg-warm-cream/10 text-warm-cream px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-cream hover:text-[#0B2545] transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/10 via-[#0B2545] to-warm-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group"
              >
                <motion.div 
                  className="bg-warm-cream/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-cream transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-warm-cream group-hover:text-[#0B2545]" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p 
                  className="text-[#F8F8F5]/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-warm-cream/5 via-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Comprehensive financial solutions tailored to your business needs
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ 
                  x: index % 2 === 0 ? -100 : 100, 
                  opacity: 0,
                  rotateY: index % 2 === 0 ? -45 : 45
                }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1,
                  rotateY: 0
                }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-warm-cream/10 backdrop-blur-sm border border-warm-cream/20 rounded-lg p-8 hover:bg-warm-cream/20 hover:border-warm-cream/40 transition-all duration-300"
              >
                <motion.h3 
                  className="text-2xl font-bold text-warm-cream mb-4 group-hover:text-white transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-[#F8F8F5]/80 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/services"
                    className="inline-flex items-center text-warm-cream hover:text-white transition-colors group-hover:translate-x-2 transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B2545] via-[#1D4E89] to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase"
              initial={{ rotateX: -45, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-warm-cream">Us?</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover what makes us the preferred choice for businesses across India
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ 
                  y: 100, 
                  opacity: 0, 
                  scale: 0.8,
                  rotate: -10
                }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  rotate: 0
                }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group"
              >
                <motion.div 
                  className="bg-warm-cream/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-cream transition-all duration-300"
                >
                  <feature.icon className="h-10 w-10 text-warm-cream group-hover:text-[#0B2545]" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-warm-cream transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-[#F8F8F5]/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
              Industries We <span className="text-warm-cream">Serve</span>
            </h2>
            <p className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto">
              Specialized expertise across diverse business sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 text-center hover:bg-warm-cream/20 hover:border-warm-cream/40 transition-all duration-300 group"
              >
                <industry.icon className="h-12 w-12 text-warm-cream mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-[#F8F8F5]/80 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/industries"
              className="inline-flex items-center bg-warm-cream text-[#0B2545] px-8 py-3 rounded-lg font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Explore All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-r from-[#1D4E89] via-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase"
              initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              What Our <span className="text-warm-cream">Clients Say</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Trusted by businesses across India for excellence in financial services
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ 
                  y: 100, 
                  opacity: 0, 
                  scale: 0.8,
                  rotateX: -30
                }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8 hover:bg-warm-cream/20 hover:border-warm-cream/40 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Quote className="h-8 w-8 text-warm-cream mb-4" />
                </motion.div>
                <motion.p 
                  className="text-[#F8F8F5]/90 leading-relaxed mb-6 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.message}"
                </motion.p>
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-warm-cream text-sm">{testimonial.company}</p>
                  </div>
                  <motion.div 
                    className="flex space-x-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.2 + 0.7 + i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-4 w-4 text-warm-cream fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-t from-warm-cream/10 via-[#0B2545] to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase">
                Our <span className="text-warm-cream">Values</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Integrity and transparency in all our dealings',
                  'Client-first approach with personalized solutions',
                  'Continuous learning and professional development',
                  'Timely delivery and exceptional service quality',
                  'Long-term partnerships built on trust'
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="h-6 w-6 text-warm-cream mt-1 flex-shrink-0" />
                    <p className="text-[#F8F8F5]/80 text-lg leading-relaxed">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-warm-cream mb-6">Ready to Get Started?</h3>
              <p className="text-[#F8F8F5]/80 mb-6 leading-relaxed">
                Take the first step towards better financial management. Our team of experts is ready to 
                understand your needs and provide customized solutions that drive your business forward.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/about"
                  className="block w-full border-2 border-warm-cream text-warm-cream px-6 py-3 rounded-lg font-semibold text-center hover:bg-warm-cream hover:text-[#0B2545] transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;