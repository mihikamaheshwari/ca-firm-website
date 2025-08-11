import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const CorporateGovernance = () => {
  const article = {
    title: 'Corporate Governance and Compliance in the Modern Era',
    author: 'CA Rajesh Sharma',
    date: '2023-12-15',
    readTime: '11 min read',
    tags: ['Corporate Governance', 'Compliance', 'Sustainability'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Understanding the evolving landscape of corporate governance and the critical role of compliance in sustainable business practices.'
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
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Evolution of Corporate Governance</h2>
              <p>
                Corporate governance has transformed significantly over the past decades, moving from a shareholder-centric model to a stakeholder-inclusive approach that considers the interests of all parties affected by corporate actions.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Pillars of Modern Corporate Governance</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">1. Board Effectiveness</h3>
              <p>
                Effective boards provide strategic oversight, ensure accountability, and maintain independence from management. This includes having diverse, qualified directors who actively contribute to strategic decision-making.
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Board Best Practices:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li>Regular evaluation of board and director performance</li>
                  <li>Clear roles and responsibilities for board committees</li>
                  <li>Diverse composition with relevant expertise</li>
                  <li>Regular executive sessions without management</li>
                  <li>Continuous education on industry and governance trends</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">2. Transparency and Disclosure</h3>
              <p>
                Stakeholders expect comprehensive, timely, and accurate disclosure of material information. This includes financial performance, strategic initiatives, risks, and sustainability efforts.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">3. Risk Management</h3>
              <p>
                Robust risk management frameworks help organizations identify, assess, and mitigate various risks including operational, financial, strategic, and reputational risks.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">ESG and Sustainability Integration</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Environmental Responsibility</h3>
              <p>
                Companies are increasingly expected to address their environmental impact through sustainable practices, carbon footprint reduction, and climate risk management.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Social Impact</h3>
              <p>
                Social governance involves considering the impact on employees, customers, communities, and society at large. This includes diversity and inclusion, human rights, and community engagement.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">Governance Standards</h3>
              <p>
                Strong governance practices include ethical leadership, anti-corruption measures, and fair business practices that build trust with stakeholders.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Regulatory Compliance Framework</h2>
              <p>
                Organizations must navigate an increasingly complex regulatory environment with requirements from multiple jurisdictions and regulatory bodies.
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Securities regulations and listing requirements</li>
                <li>Industry-specific compliance obligations</li>
                <li>Data protection and privacy laws</li>
                <li>Anti-money laundering and sanctions compliance</li>
                <li>Environmental and safety regulations</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Technology and Governance</h2>
              <p>
                Digital transformation brings both opportunities and challenges for corporate governance:
              </p>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Technology Considerations:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li><strong>Cybersecurity:</strong> Protecting against data breaches and cyber threats</li>
                  <li><strong>Digital Ethics:</strong> Responsible use of AI and data analytics</li>
                  <li><strong>Governance Tools:</strong> Board portals and collaboration platforms</li>
                  <li><strong>Compliance Tech:</strong> Automated monitoring and reporting systems</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Building a Culture of Compliance</h2>
              <p>
                Effective compliance goes beyond policies and procedures to create a culture where ethical behavior is valued and reinforced:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Leadership commitment and tone at the top</li>
                <li>Clear communication of expectations and values</li>
                <li>Regular training and awareness programs</li>
                <li>Robust reporting and whistleblower protection</li>
                <li>Consistent enforcement and accountability</li>
                <li>Recognition of ethical behavior and compliance excellence</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Future Trends in Corporate Governance</h2>
              <p>
                Several trends are shaping the future of corporate governance:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Increased focus on stakeholder capitalism</li>
                <li>Enhanced sustainability reporting and targets</li>
                <li>Greater emphasis on diversity and inclusion</li>
                <li>Integration of ESG factors in executive compensation</li>
                <li>Expanded use of technology for governance processes</li>
                <li>Growing importance of human capital management</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
              <p>
                Modern corporate governance requires a holistic approach that balances the interests of all stakeholders while ensuring long-term value creation. Organizations that embrace these principles will be better positioned for sustainable success.
              </p>
              
              <p>
                Effective governance is not just about compliance—it's about building trust, managing risks, and creating value for all stakeholders in an increasingly interconnected world.
              </p>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Enhance Your Governance Framework</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our governance and compliance experts can help you develop and implement robust frameworks that meet modern standards and stakeholder expectations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Start the Conversation
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

export default CorporateGovernance;
