import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const DigitalTransformation = () => {
  const article = {
    title: 'Digital Transformation in Accounting: Tools and Technologies',
    author: 'CA Rajesh Sharma',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Technology', 'Digital', 'Accounting'],
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Explore how modern accounting firms are leveraging technology to improve efficiency, accuracy, and client service delivery.'
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
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Digital Revolution in Accounting</h2>
              <p>
                The accounting profession is experiencing a dramatic transformation driven by technological advances. From cloud-based software to artificial intelligence, these innovations are reshaping how accounting firms operate and serve their clients.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Technologies Driving Change</h2>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">1. Cloud Computing Solutions</h3>
              <p>
                Cloud-based accounting platforms have revolutionized data accessibility and collaboration. These solutions enable real-time data sharing, automatic backups, and seamless integration across multiple devices and locations.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">2. Artificial Intelligence and Machine Learning</h3>
              <p>
                AI-powered tools are automating routine tasks such as data entry, transaction categorization, and anomaly detection. Machine learning algorithms can identify patterns and predict financial trends with unprecedented accuracy.
              </p>
              
              <h3 className="text-xl font-semibold text-warm-cream mt-6 mb-3">3. Robotic Process Automation (RPA)</h3>
              <p>
                RPA technology handles repetitive, rule-based tasks, freeing up professionals to focus on strategic advisory services and complex problem-solving activities.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Benefits of Digital Transformation</h2>
              
              <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Key Advantages:</h4>
                <ul className="space-y-2 text-[#F8F8F5]/90">
                  <li><strong>Enhanced Accuracy:</strong> Reduced human error through automated processes</li>
                  <li><strong>Improved Efficiency:</strong> Faster processing and reporting capabilities</li>
                  <li><strong>Better Client Service:</strong> Real-time insights and proactive advisory</li>
                  <li><strong>Cost Optimization:</strong> Reduced operational costs and improved margins</li>
                  <li><strong>Scalability:</strong> Easy expansion without proportional resource increase</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Strategy</h2>
              <p>
                Successfully adopting digital technologies requires a well-planned approach:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-[#F8F8F5]/90">
                <li>Assess current technology infrastructure and identify gaps</li>
                <li>Define clear objectives and success metrics</li>
                <li>Choose appropriate technology solutions based on firm size and needs</li>
                <li>Develop a phased implementation plan</li>
                <li>Invest in staff training and change management</li>
                <li>Monitor progress and adjust strategies as needed</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Future Outlook</h2>
              <p>
                The digital transformation of accounting is still in its early stages. Emerging technologies like blockchain, Internet of Things (IoT), and advanced analytics will continue to reshape the profession.
              </p>
              
              <p>
                Firms that embrace these changes early will gain a competitive advantage and be better positioned to meet evolving client expectations in an increasingly digital world.
              </p>
              
              <div className="bg-[#1D4E89]/20 border border-warm-cream/20 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-warm-cream mb-3">Ready to Digitize Your Accounting?</h4>
                <p className="text-[#F8F8F5]/90 mb-4">
                  Our team can help you navigate the digital transformation journey and implement the right technology solutions for your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-warm-cream text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                >
                  Learn More
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

export default DigitalTransformation;
