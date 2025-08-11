import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'gst-compliance-2024',
      title: 'Understanding the New GST Compliance Requirements for 2024',
      excerpt: 'A comprehensive guide to the latest GST changes and how they impact your business operations and compliance requirements.',
      author: 'CA Lalit Kabra',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['GST', 'Compliance', 'Taxation'],
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation in Accounting: Tools and Technologies',
      excerpt: 'Explore how modern accounting firms are leveraging technology to improve efficiency, accuracy, and client service delivery.',
      author: 'CA Rajesh Sharma',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Technology', 'Digital', 'Accounting'],
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'tax-planning-sme',
      title: 'Tax Planning Strategies for Small and Medium Enterprises',
      excerpt: 'Effective tax planning strategies that can help SMEs optimize their tax liability while ensuring full compliance with regulations.',
      author: 'CA Priya Agarwal',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Tax Planning', 'SME', 'Business'],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'internal-audit-best-practices',
      title: 'Internal Audit Best Practices for Growing Businesses',
      excerpt: 'Key principles and methodologies for implementing effective internal audit systems that drive business growth and risk mitigation.',
      author: 'CA Lalit Kabra',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Internal Audit', 'Risk Management', 'Business Growth'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'financial-reporting-standards',
      title: 'Financial Reporting Standards: Updates and Implications',
      excerpt: 'Recent changes in financial reporting standards and their impact on businesses across different industry sectors.',
      author: 'Amit Gupta',
      date: '2023-12-20',
      readTime: '9 min read',
      tags: ['Financial Reporting', 'Standards', 'Compliance'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'corporate-governance',
      title: 'Corporate Governance and Compliance in the Modern Era',
      excerpt: 'Understanding the evolving landscape of corporate governance and the critical role of compliance in sustainable business practices.',
      author: 'CA Rajesh Sharma',
      date: '2023-12-15',
      readTime: '11 min read',
      tags: ['Corporate Governance', 'Compliance', 'Sustainability'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'business-advisory-services',
      title: 'Comprehensive Business Advisory Services for Modern Enterprises',
      excerpt: 'How comprehensive business advisory services can help enterprises navigate challenges and unlock sustainable growth opportunities.',
      author: 'CA Lalit Kabra',
      date: '2023-12-10',
      readTime: '8 min read',
      tags: ['Business Advisory', 'Strategic Planning', 'Growth'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const availableArticles = ['gst-compliance-2024', 'digital-transformation', 'tax-planning-sme', 'financial-reporting-standards', 'internal-audit-best-practices', 'corporate-governance', 'business-advisory-services'];

  const getArticleLink = (postId: string) => {
    return availableArticles.includes(postId) ? `/articles/${postId}` : '#';
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
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-br from-[#0B2545] to-[#1D4E89]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            Insights & Updates
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#F8F8F5]/90 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed with the latest developments in accounting, taxation, and business advisory
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Post */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase">Featured Article</h2>
            
            <div className="bg-gradient-to-r from-[#1D4E89]/20 to-[#0B2545]/50 border border-white/10 rounded-lg overflow-hidden hover:bg-gradient-to-r hover:from-[#1D4E89]/30 hover:to-[#0B2545]/70 hover:border-white/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-none bg-black">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1D4E89]/30 text-[#F8F8F5] px-3 py-1 rounded-full text-sm border border-[#1D4E89]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-[#F8F8F5]/80 text-lg leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-[#F8F8F5]/60">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{formatDate(blogPosts[0].date)}</span>
                      </div>
                      <span className="text-sm">{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={getArticleLink(blogPosts[0].id)}
                    className="self-start bg-white text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-[#1D4E89] hover:text-white transition-all duration-300 flex items-center"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">Recent Articles</h2>
            <p className="text-xl text-[#F8F8F5]/80 max-w-3xl mx-auto">
              Explore our latest insights on accounting, taxation, and business advisory
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#0B2545]/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-[#0B2545]/80 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#1D4E89]/30 text-[#F8F8F5] px-2 py-1 rounded-full text-xs border border-[#1D4E89]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#F8F8F5] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#F8F8F5]/80 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-[#F8F8F5]/60 text-xs mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link 
                      to={getArticleLink(post.id)}
                      className="inline-flex items-center text-[#1D4E89] hover:text-white transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1D4E89]/20 border border-[#1D4E89]/30 rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">
              Stay Updated
            </h2>
            <p className="text-xl text-[#F8F8F5]/80 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest insights on accounting, 
              taxation, and business advisory delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0B2545]/50 border border-[#1D4E89]/50 rounded-lg text-white placeholder-[#F8F8F5]/50 focus:border-white focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-[#1D4E89] hover:text-white transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;