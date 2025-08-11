import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const TaxPlanningSME = () => {
  const article = {
    title: 'Tax Planning Strategies for Small and Medium Enterprises',
    author: 'CA Priya Agarwal',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Tax Planning', 'SME', 'Business'],
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Effective tax planning strategies that can help SMEs optimize their tax liability while ensuring full compliance with regulations.'
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
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Tax Planning Matters for SMEs</h2>
              <p>
                Small and Medium Enterprises form the backbone of India's economy, yet many struggle with tax planning. Effective tax strategies can significantly impact cash flow, profitability, and long-term growth prospects.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Core Tax Planning Strategies</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">1. Business Structure Optimization</h3>
              <p>
                Choosing the right business structure is fundamental to tax planning. Whether operating as a sole proprietorship, partnership, LLP, or private limited company, each structure has different tax implications.
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Structure Comparison:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li><strong>Sole Proprietorship:</strong> Simple but limited tax benefits</li>
                  <li><strong>Partnership/LLP:</strong> Pass-through taxation with flexibility</li>
                  <li><strong>Private Limited:</strong> Corporate tax rates and additional deductions</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">2. Section 80C and Other Deductions</h3>
              <p>
                Maximize deductions under various sections of the Income Tax Act. Beyond the popular Section 80C, explore deductions under 80D (health insurance), 80G (donations), and business-specific deductions.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">3. Depreciation Planning</h3>
              <p>
                Strategic depreciation planning can help manage tax liability across multiple years. Consider the timing of asset purchases and the choice between normal and additional depreciation.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Advanced Strategies</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Income Splitting</h3>
              <p>
                Distribute income among family members to take advantage of lower tax brackets and additional exemptions. This must be done carefully to ensure compliance with income tax provisions.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Timing of Income and Expenses</h3>
              <p>
                Strategic timing of income recognition and expense payments can help optimize tax liability. Consider deferring income to the next financial year or prepaying expenses for immediate deductions.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Compliance Considerations</h2>
              <p>
                While optimizing tax liability, SMEs must ensure full compliance with all regulations:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Maintain proper books of accounts and documentation</li>
                <li>File returns within prescribed deadlines</li>
                <li>Comply with advance tax payment requirements</li>
                <li>Ensure proper TDS compliance</li>
                <li>Regular reconciliation of tax liabilities</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Technology in Tax Planning</h2>
              <p>
                Modern tax planning leverages technology for better accuracy and efficiency. Cloud-based accounting software, automated compliance tools, and AI-powered tax optimization platforms are becoming essential for SMEs.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Year-End Tax Planning Checklist</h2>
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Review annual income and expense projections</li>
                <li>Optimize asset purchases for depreciation benefits</li>
                <li>Plan investment in tax-saving instruments</li>
                <li>Consider bonus payments to employees</li>
                <li>Evaluate business restructuring opportunities</li>
                <li>Ensure compliance with all regulatory requirements</li>
              </ol>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Expert Tax Planning Support</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our experienced team can help you develop and implement comprehensive tax planning strategies tailored to your business needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Schedule Consultation
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

export default TaxPlanningSME;
