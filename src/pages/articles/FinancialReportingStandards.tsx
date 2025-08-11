import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const FinancialReportingStandards = () => {
  const article = {
    title: 'Financial Reporting Standards: Updates and Implications',
    author: 'Amit Gupta',
    date: '2023-12-20',
    readTime: '9 min read',
    tags: ['Financial Reporting', 'Standards', 'Compliance'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Recent changes in financial reporting standards and their impact on businesses across different industry sectors.'
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
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction to Financial Reporting Standards</h2>
              <p>
                Financial reporting standards provide the framework for preparing and presenting financial statements. These standards ensure consistency, transparency, and comparability across organizations and industries.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Recent Updates in Indian Accounting Standards (Ind AS)</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Ind AS 116 - Leases</h3>
              <p>
                The implementation of Ind AS 116 has significantly changed how companies account for leases. Most leases are now recognized on the balance sheet, providing better visibility into lease obligations and assets.
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Key Changes:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li>Recognition of right-of-use assets and lease liabilities</li>
                  <li>Elimination of operating lease vs. finance lease distinction for lessees</li>
                  <li>Modified presentation of lease expenses in P&L</li>
                  <li>Enhanced disclosure requirements</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Ind AS 115 - Revenue from Contracts</h3>
              <p>
                This standard provides a comprehensive framework for revenue recognition, focusing on the transfer of control rather than transfer of risks and rewards.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Ind AS 109 - Financial Instruments</h3>
              <p>
                Updated classification and measurement requirements for financial assets and liabilities, along with a new expected credit loss model for impairment.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Industry-Specific Implications</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Banking and Financial Services</h3>
              <p>
                Banks and NBFCs face significant changes in loan loss provisioning under the expected credit loss model. This requires sophisticated modeling and increased provisioning in many cases.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Real Estate</h3>
              <p>
                Revenue recognition for real estate developers has changed substantially, with potential delays in revenue recognition based on control transfer principles.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Technology and Software</h3>
              <p>
                Software companies must carefully evaluate their revenue recognition practices, particularly for multi-element arrangements and subscription-based services.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Challenges</h2>
              <p>
                Organizations face several challenges when implementing new accounting standards:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>System and process changes required for data capture</li>
                <li>Training staff on new requirements and judgments</li>
                <li>Ensuring adequate internal controls over financial reporting</li>
                <li>Managing the transition and comparative period adjustments</li>
                <li>Communicating changes to stakeholders</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Practices for Compliance</h2>
              
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Establish a dedicated project team for standard implementation</li>
                <li>Conduct thorough impact assessments for each new standard</li>
                <li>Develop detailed accounting policy documentation</li>
                <li>Implement robust review and approval processes</li>
                <li>Maintain regular dialogue with auditors and regulators</li>
                <li>Invest in training and development programs</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Future Developments</h2>
              <p>
                The accounting standards landscape continues to evolve. Key areas of focus include:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Sustainability reporting and ESG disclosures</li>
                <li>Digital assets and cryptocurrency accounting</li>
                <li>Climate-related financial disclosures</li>
                <li>Enhanced transparency in supply chain reporting</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
              <p>
                Staying current with financial reporting standards is crucial for maintaining compliance and providing stakeholders with reliable financial information. Organizations must invest in people, processes, and systems to successfully navigate these changes.
              </p>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Need Help with Financial Reporting?</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our team of experts can guide you through the complexities of financial reporting standards and ensure your organization remains compliant.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Get Professional Guidance
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

export default FinancialReportingStandards;
