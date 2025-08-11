import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mail, Phone } from 'lucide-react';

const Team = () => {
  // Main leadership - will be displayed prominently
  const leadership = [
    {
      name: 'CA Lalit Kabra',
      position: 'Founding Partner',
      qualification: 'Chartered Accountant',
      experience: '18+ Years',
      expertise: ['Accounting & Financial Reporting', 'Audit & Assurance Services', 'GST & Indirect Taxation', 'Direct Taxation (Income Tax, TDS, TCS)'],
      bio: 'CA Lalit Kabra is a Chartered Accountant and Partner at Lalit Kabra & Company, a professional firm with offices located in Bhilwara and Jaipur, India. He is primarily responsible for managing and overseeing the operations of the Bhilwara branch, where he leads a team of professionals in delivering a wide range of financial, taxation, and assurance services. With deep-rooted expertise in the field of chartered accountancy, he handles the entire scope of a practicing CA\'s responsibilities, ensuring quality service and compliance with evolving regulatory frameworks.',
      image: '/images/team/lalit-kabra.jpg'
    },
    {
      name: 'CA Ravindra Bansal',
      position: 'Partner',
      qualification: 'Chartered Accountant',
      experience: '12+ Years',
      expertise: ['Audit & Assurance', 'Direct Taxation & TDS/TCS', 'GST & Indirect Taxes', 'Corporate Compliance & MCA Filings'],
      bio: 'CA Ravindra Bansal is a dynamic and result-oriented Chartered Accountant and Partner at Lalit Kabra & Company, a multi-location CA firm with a presence in Jaipur and Bhilwara, India. He leads the Jaipur office, overseeing a diverse clientele ranging from startups and SMEs to large corporations and NGOs. With a forward-thinking approach and a strong command over Indian tax laws, audit standards, and corporate regulations, he is known for delivering high-value solutions tailored to today\'s evolving business environment.',
      image: '/images/team/rajesh-sharma.jpg'
    },
  ];

  // Team members - will be displayed in a 3x3 grid (2 rows with 3 persons each)
  const teamMembers = [
    {
      name: 'Chand Mohammad Khan',
      position: 'Legal Expert',
      qualification: 'LL.B',
      experience: '8+ Years',
      expertise: ['GST & VAT Compliance', 'TDS & TCS Management', 'Legal Documentation'],
      image: '/images/team/priya-agarwal.jpg'
    },
    {
      name: 'Mr. Saurabh Jain',
      position: 'Client Relations & Business Development Associate',
      qualification: 'MBA Banking & Finance',
      experience: '6+ Years',
      expertise: ['Client Relationship Management', 'Business Development', 'Marketing & Communication'],
      image: '/images/team/amit-gupta.jpg'
    },
    {
      name: 'Mudit Kabra',
      position: 'Tax Consultant',
      qualification: 'MBA Finance',
      experience: '5+ Years',
      expertise: ['Direct Taxation', 'Tax Planning', 'Compliance'],
      image: '/images/team/sanjay-mehta.jpg'
    },
    {
      name: 'Mihika Maheshwari',
      position: 'Tech Head',
      qualification: 'B.Tech Computer Science',
      experience: '2+ Years',
      expertise: ['Software Development', 'System Management', 'Digital Solutions'],
      image: '/images/team/anita-joshi.jpg'
    },
    {
      name: 'Mohammad Yameen Rafiqi',
      position: 'Tech Head',
      qualification: 'B.Tech Computer Science',
      experience: '2+ Years',
      expertise: ['Software Development', 'System Management', 'Digital Solutions'],
      image: '/images/team/rahul-verma.jpg'
    },
    {
      name: 'Neha Sharma',
      position: 'Financial Analyst',
      qualification: 'CFA, MBA',
      experience: '5+ Years',
      expertise: ['Financial Modeling', 'Investment Analysis', 'Budgeting'],
      image: '/images/team/neha-sharma.jpg'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-br from-warm-cream/10 via-[#0B2545] to-[#1D4E89] relative overflow-hidden"
      >
        {/* Professional Team Background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional accounting team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            Our <span className="text-warm-cream">Team</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-warm-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the professionals who bring expertise, dedication, and excellence to every client engagement
          </motion.p>
        </div>
      </motion.section>

      {/* Leadership Team Grid */}
      <section className="py-20 bg-gradient-to-r from-warm-cream/5 via-[#0B2545] to-warm-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            <span className="text-warm-cream">Leadership</span> Team
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-gradient-to-br from-[#1D4E89]/20 to-[#0B2545]/50 border border-warm-cream/10 rounded-lg overflow-hidden hover:bg-gradient-to-br hover:from-[#1D4E89]/30 hover:to-[#0B2545]/70 hover:border-warm-cream/30 transition-all duration-300 h-full flex flex-col">
                  {/* Fixed size image container */}
                  <div className="w-full h-96 overflow-hidden relative bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 to-transparent"></div>
                  </div>
                  
                  {/* Card content with flex-grow to fill remaining space */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-warm-cream font-semibold">{member.position}</p>
                      </div>
                      <Award className="h-6 w-6 text-warm-cream flex-shrink-0" />
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-[#F8F8F5]/80">
                        <span className="font-medium">Qualification:</span>
                        <span className="ml-2">{member.qualification}</span>
                      </div>
                      <div className="flex items-center text-[#F8F8F5]/80">
                        <span className="font-medium">Experience:</span>
                        <span className="ml-2">{member.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-[#F8F8F5]/80 leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-warm-cream font-semibold mb-3">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-warm-cream/20 text-warm-cream px-3 py-1 rounded-full text-sm border border-warm-cream/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 pt-4 border-t border-warm-cream/10 mt-auto">
                      <button className="flex items-center text-warm-cream hover:text-white transition-colors">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </button>
                      <button className="flex items-center text-warm-cream hover:text-white transition-colors">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid - Smaller Cards, 3x2 Layout */}
      <section className="py-20 bg-gradient-to-r from-[#0B2545] via-warm-cream/5 to-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our <span className="text-warm-cream">Professional</span> Team
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-gradient-to-br from-[#1D4E89]/20 to-[#0B2545]/50 border border-warm-cream/10 rounded-lg overflow-hidden hover:bg-gradient-to-br hover:from-[#1D4E89]/30 hover:to-[#0B2545]/70 hover:border-warm-cream/30 transition-all duration-300 h-full flex flex-col">
                  {/* Smaller image container - 16:9 aspect ratio */}
                  <div className="w-full aspect-video overflow-hidden relative bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-center transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 to-transparent"></div>
                  </div>
                  
                  {/* Compact card content */}
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-warm-cream font-medium text-sm">{member.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-[#F8F8F5]/80">
                        <span className="font-medium">Qualification:</span>
                        <span className="ml-2">{member.qualification}</span>
                      </div>
                      <div className="flex items-center text-[#F8F8F5]/80">
                        <span className="font-medium">Experience:</span>
                        <span className="ml-2">{member.experience}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-warm-cream font-medium text-sm mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-warm-cream/20 text-warm-cream px-2 py-0.5 rounded-full text-xs border border-warm-cream/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 pt-3 border-t border-warm-cream/10 mt-auto text-sm">
                      <button className="flex items-center text-warm-cream hover:text-white transition-colors">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </button>
                      <button className="flex items-center text-warm-cream hover:text-white transition-colors">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#0B2545] to-[#1D4E89]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0B2545]/50 backdrop-blur-sm border border-white/10 rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 uppercase">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-[#F8F8F5]/80 mb-8 leading-relaxed">
              Our experienced team is ready to help you achieve your financial goals. 
              Contact us today to discuss how we can support your business.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-cream hover:text-[#0B2545] transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;