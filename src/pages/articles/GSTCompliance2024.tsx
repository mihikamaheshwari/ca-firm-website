import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';

const GSTCompliance2024 = () => {
  const article = {
    title: 'Understanding the New GST Compliance Requirements for 2024',
    author: 'CA Lalit Kabra',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['GST', 'Compliance', 'Taxation'],
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'A comprehensive guide to the latest GST changes and how they impact your business operations and compliance requirements.'
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
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
              <p>
                The Goods and Services Tax (GST) framework continues to evolve, and 2024 brings significant changes that businesses must understand and implement. These updates are designed to streamline compliance processes, reduce ambiguities, and enhance the overall efficiency of the tax system.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Changes in GST Compliance for 2024</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">1. Enhanced E-invoicing Requirements</h3>
              <p>
                The mandatory e-invoicing threshold has been further lowered, now covering businesses with an annual turnover of ₹20 crores and above. This expansion aims to bring more transactions under the digital umbrella and improve tax compliance.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">2. Revised Return Filing Procedures</h3>
              <p>
                New return formats have been introduced with additional fields for better data capture. Businesses must now provide more detailed information about their transactions, including sector-wise breakdowns and compliance with environmental regulations.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">3. Input Tax Credit (ITC) Rules</h3>
              <p>
                The rules governing Input Tax Credit have been refined to prevent misuse while ensuring legitimate businesses can claim their rightful credits. New verification mechanisms have been put in place to validate ITC claims automatically.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Impact on Business Operations</h2>
              <p>
                These changes will have far-reaching implications for businesses across sectors. Companies will need to:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Upgrade their accounting and invoicing systems to comply with new e-invoicing requirements</li>
                <li>Train their finance teams on the revised return filing procedures</li>
                <li>Implement robust internal controls to ensure accurate ITC claims</li>
                <li>Establish regular compliance monitoring processes</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Compliance Timeline</h2>
              <p>
                The implementation of these changes follows a phased approach:
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Important Dates:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li><strong>April 1, 2024:</strong> Enhanced e-invoicing requirements take effect</li>
                  <li><strong>July 1, 2024:</strong> New return formats become mandatory</li>
                  <li><strong>October 1, 2024:</strong> Revised ITC rules fully implemented</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Preparing Your Business</h2>
              <p>
                To ensure smooth compliance with these new requirements, businesses should:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Conduct a comprehensive review of current GST compliance processes</li>
                <li>Identify gaps between current practices and new requirements</li>
                <li>Develop an implementation roadmap with clear timelines</li>
                <li>Invest in training and system upgrades as necessary</li>
                <li>Engage with qualified tax professionals for guidance</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
              <p>
                The 2024 GST compliance changes represent a significant step forward in India's tax digitization journey. While these changes may require initial investment in systems and training, they will ultimately lead to a more efficient and transparent tax environment.
              </p>
              
              <p>
                Businesses that proactively adapt to these changes will be better positioned to take advantage of the streamlined processes and reduced compliance burden in the long term.
              </p>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Need Help with GST Compliance?</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our team of experienced chartered accountants can help you navigate these new requirements and ensure your business remains fully compliant.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Get Expert Assistance
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gradient-to-b from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/articles/tax-planning-sme" className="block group">
              <div className="bg-[#0B2545]/50 border border-white/10 rounded-lg p-6 hover:bg-[#0B2545]/80 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-warm-cream transition-colors">
                  Tax Planning Strategies for SMEs
                </h3>
                <p className="text-[#F8F8F5]/80 text-sm">
                  Effective tax planning strategies that can help SMEs optimize their tax liability...
                </p>
              </div>
            </Link>
            <Link to="/articles/financial-reporting-standards" className="block group">
              <div className="bg-[#0B2545]/50 border border-white/10 rounded-lg p-6 hover:bg-[#0B2545]/80 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-warm-cream transition-colors">
                  Financial Reporting Standards: Updates
                </h3>
                <p className="text-[#F8F8F5]/80 text-sm">
                  Recent changes in financial reporting standards and their impact on businesses...
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTCompliance2024;
