import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const InternalAuditBestPractices = () => {
  const article = {
    title: 'Internal Audit Best Practices for Growing Businesses',
    author: 'CA Lalit Kabra',
    date: '2023-12-28',
    readTime: '7 min read',
    tags: ['Internal Audit', 'Risk Management', 'Business Growth'],
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Key principles and methodologies for implementing effective internal audit systems that drive business growth and risk mitigation.'
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
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Importance of Internal Audit</h2>
              <p>
                Internal audit serves as an independent and objective assurance function that helps organizations achieve their objectives by bringing a systematic approach to evaluate and improve the effectiveness of risk management, control, and governance processes.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Components of Effective Internal Audit</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">1. Risk-Based Audit Planning</h3>
              <p>
                Modern internal audit functions focus on risk-based approaches that prioritize audit activities based on the organization's risk profile. This ensures that audit resources are allocated to areas of highest risk and strategic importance.
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Risk Assessment Framework:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li>Identify and categorize business risks</li>
                  <li>Assess likelihood and impact of potential risks</li>
                  <li>Evaluate existing control measures</li>
                  <li>Prioritize audit activities based on risk levels</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">2. Independence and Objectivity</h3>
              <p>
                Internal auditors must maintain independence from the activities they audit and provide objective assessments. This requires appropriate organizational structure, reporting lines, and freedom from conflicts of interest.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">3. Comprehensive Coverage</h3>
              <p>
                Effective internal audit covers all significant business processes, including financial reporting, operational efficiency, compliance with laws and regulations, and strategic initiatives.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Practices for Implementation</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Establishing Clear Audit Charter</h3>
              <p>
                An audit charter defines the internal audit function's purpose, authority, and responsibility. It should be approved by the audit committee and communicated throughout the organization.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Developing Audit Universe</h3>
              <p>
                Create a comprehensive inventory of all auditable entities and processes within the organization. This forms the foundation for risk assessment and audit planning activities.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Continuous Monitoring</h3>
              <p>
                Implement continuous monitoring processes to provide real-time insights into control effectiveness and emerging risks. This can supplement traditional periodic audits.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Technology in Internal Audit</h2>
              <p>
                Modern internal audit leverages technology to enhance efficiency and effectiveness:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Data analytics for comprehensive testing and anomaly detection</li>
                <li>Automated audit procedures and continuous monitoring</li>
                <li>Digital audit workpapers and workflow management</li>
                <li>Risk assessment and reporting tools</li>
                <li>Artificial intelligence for predictive risk analysis</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Building Audit Team Capabilities</h2>
              <p>
                Successful internal audit functions require skilled professionals with diverse competencies:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Technical expertise in relevant business areas</li>
                <li>Strong analytical and problem-solving skills</li>
                <li>Knowledge of risk management and control frameworks</li>
                <li>Communication and stakeholder management abilities</li>
                <li>Understanding of emerging technologies and their implications</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Measuring Audit Effectiveness</h2>
              <p>
                Key performance indicators for internal audit include:
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Performance Metrics:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li><strong>Coverage:</strong> Percentage of high-risk areas audited annually</li>
                  <li><strong>Quality:</strong> Stakeholder satisfaction and audit report quality</li>
                  <li><strong>Impact:</strong> Management action on audit recommendations</li>
                  <li><strong>Efficiency:</strong> Cost per audit hour and cycle time</li>
                  <li><strong>Value-add:</strong> Identification of process improvements and cost savings</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Future of Internal Audit</h2>
              <p>
                The internal audit profession continues to evolve with changing business environments. Key trends include greater focus on strategic risks, enhanced use of technology, and expanded assurance over non-financial information.
              </p>
              
              <p>
                Organizations that invest in robust internal audit capabilities will be better positioned to navigate uncertainties and achieve their strategic objectives.
              </p>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Strengthen Your Internal Audit Function</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our experienced team can help you design and implement effective internal audit processes tailored to your organization's needs and risk profile.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Discuss Your Requirements
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

export default InternalAuditBestPractices;
