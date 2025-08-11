import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BusinessAdvisoryServices = () => {
  const article = {
    title: 'Comprehensive Business Advisory Services for Modern Enterprises',
    author: 'CA Lalit Kabra',
    date: '2023-12-10',
    readTime: '8 min read',
    tags: ['Business Advisory', 'Strategic Planning', 'Growth'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'How comprehensive business advisory services can help enterprises navigate challenges and unlock sustainable growth opportunities.'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-[#0B2545]">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 bg-gradient-to-br from-[#0B2545] to-[#1D4E89]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-warm-cream hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-warm-cream/20 text-warm-cream px-3 py-1 rounded-full text-sm border border-warm-cream/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6 text-[#F8F8F5]/80">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-warm-cream hover:text-white transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <section className="bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="text-[#F8F8F5] leading-relaxed space-y-6">
              <p className="text-xl text-warm-cream/90 font-medium">
                {article.excerpt}
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Role of Business Advisory Services</h2>
              <p>
                In today's rapidly evolving business landscape, organizations face complex challenges that require specialized expertise. Business advisory services provide strategic guidance and practical solutions to help enterprises navigate these challenges and achieve their objectives.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Core Areas of Business Advisory</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">1. Strategic Planning and Implementation</h3>
              <p>
                Effective strategic planning goes beyond setting goals—it involves developing actionable roadmaps that align resources, capabilities, and market opportunities to drive sustainable growth.
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Strategic Planning Components:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li>Market analysis and competitive positioning</li>
                  <li>Business model optimization and innovation</li>
                  <li>Performance measurement and KPI development</li>
                  <li>Resource allocation and investment prioritization</li>
                  <li>Change management and implementation support</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">2. Financial Management and Optimization</h3>
              <p>
                Comprehensive financial advisory services help organizations optimize their financial performance through better cash flow management, cost optimization, and strategic financial planning.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">3. Operational Excellence</h3>
              <p>
                Streamlining operations through process improvement, technology integration, and performance optimization to enhance efficiency and reduce costs.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Industry-Specific Advisory Services</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Manufacturing and Industrial</h3>
              <p>
                Advisory services for manufacturers focus on supply chain optimization, quality management, lean manufacturing principles, and digital transformation initiatives.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Service Sector</h3>
              <p>
                Service organizations benefit from advisory support in customer experience optimization, service delivery improvement, and digital service innovation.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Technology and Startups</h3>
              <p>
                Specialized guidance for technology companies including product development strategies, market entry plans, funding strategies, and scaling operations.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Growth and Expansion Strategies</h2>
              <p>
                Business advisory services help organizations identify and capitalize on growth opportunities:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Market expansion and penetration strategies</li>
                <li>Merger and acquisition advisory</li>
                <li>Joint venture and partnership development</li>
                <li>New product and service development</li>
                <li>International expansion planning</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Risk Management and Mitigation</h2>
              <p>
                Comprehensive risk assessment and management strategies help organizations identify, evaluate, and mitigate various business risks:
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Risk Management Areas:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li><strong>Operational Risk:</strong> Process failures, system breakdowns, human errors</li>
                  <li><strong>Financial Risk:</strong> Credit risk, liquidity risk, market volatility</li>
                  <li><strong>Strategic Risk:</strong> Competitive threats, technology disruption</li>
                  <li><strong>Compliance Risk:</strong> Regulatory changes, legal requirements</li>
                  <li><strong>Reputational Risk:</strong> Brand protection, crisis management</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Digital Transformation Advisory</h2>
              <p>
                Modern business advisory includes guidance on digital transformation initiatives to help organizations leverage technology for competitive advantage.
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Digital strategy development and roadmap creation</li>
                <li>Technology assessment and selection</li>
                <li>Process digitization and automation</li>
                <li>Data analytics and business intelligence implementation</li>
                <li>Cybersecurity and data protection strategies</li>
                <li>Change management for digital adoption</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Performance Measurement and Improvement</h2>
              <p>
                Effective advisory services include establishing robust performance measurement systems and continuous improvement processes to ensure sustained success.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Advisory Partnership Approach</h2>
              <p>
                Successful business advisory relationships are built on partnership principles that ensure alignment between advisor expertise and client objectives. This includes regular communication, transparent reporting, and collaborative problem-solving.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
              <p>
                Comprehensive business advisory services provide organizations with the strategic insights, operational expertise, and implementation support needed to navigate complex business challenges and achieve sustainable growth.
              </p>
              
              <p>
                By partnering with experienced advisors, businesses can access specialized knowledge, accelerate decision-making, and improve their competitive position in the marketplace.
              </p>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Partner with Our Advisory Team</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our experienced business advisors can help you develop and implement strategies that drive growth, improve performance, and create lasting value.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Explore Advisory Services
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAdvisoryServices;
