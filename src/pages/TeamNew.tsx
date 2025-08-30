import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Mail, Phone, X, User, Calendar, BookOpen } from 'lucide-react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

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
      expertise: ['GST & VAT Compliance', 'TDS & TCS Management', 'Legal Documentation', 'Contract Law'],
      bio: 'Chand Mohammad Khan is an experienced Legal Expert with over 8 years of specialized experience in taxation law and compliance.',
      detailedBio: 'Chand Mohammad Khan brings extensive legal expertise to Lalit Kabra & Company with his comprehensive understanding of Indian taxation laws and regulatory frameworks. His career spans over 8 years of dedicated practice in legal compliance, during which he has successfully handled complex GST audits, VAT assessments, and TDS/TCS compliance matters for diverse clientele. He specializes in drafting legal agreements, reviewing contracts, and providing strategic legal advice to businesses operating across various industries.',
      achievements: ['Successfully handled 500+ GST compliance cases', 'Expert in TDS/TCS regulatory changes', 'Specialized in legal documentation and contract review'],
      education: ['LL.B from Rajasthan University', 'Advanced Certification in Taxation Law'],
      email: 'chand@lalitkabra.com',
      phone: '+91-9887610105',
      image: '/images/team/priya-agarwal.jpg'
    },
    {
      name: 'Mr. Saurabh Jain',
      position: 'Client Relations & Business Development Associate',
      qualification: 'MBA Banking & Finance',
      experience: '6+ Years',
      expertise: ['Client Relationship Management', 'Business Development', 'Marketing & Communication', 'Financial Services'],
      bio: 'Mr. Saurabh Jain is our dedicated Client Relations & Business Development Associate with 6+ years of experience in banking and finance.',
      detailedBio: 'Mr. Saurabh Jain is a dynamic professional who serves as the bridge between our firm and our valued clients. With his MBA in Banking & Finance and over 6 years of experience in the financial services sector, he brings a unique perspective to client relationship management. His role encompasses identifying new business opportunities, nurturing existing client relationships, and developing strategic partnerships that drive mutual growth.',
      achievements: ['Increased client retention rate by 35%', 'Developed partnerships with 50+ new clients', 'Led digital marketing initiatives resulting in 40% business growth'],
      education: ['MBA in Banking & Finance from Rajasthan Technical University', 'Bachelor\'s in Commerce'],
      email: 'saurabh@lalitkabra.com',
      phone: '+91-9887610105',
      image: '/images/team/amit-gupta.jpg'
    },
    {
      name: 'Mudit Kabra',
      position: 'Tax Consultant',
      qualification: 'MBA Finance',
      experience: '5+ Years',
      expertise: ['Direct Taxation', 'Tax Planning', 'Compliance', 'Investment Advisory'],
      bio: 'Mudit Kabra is a skilled Tax Consultant with 5+ years of experience in direct taxation and comprehensive tax planning.',
      detailedBio: 'Mudit Kabra is a highly skilled Tax Consultant who brings strategic thinking and analytical expertise to our taxation practice. With his MBA in Finance and over 5 years of specialized experience, he has developed a reputation for creating innovative tax planning strategies that optimize client outcomes while maintaining strict compliance standards.',
      achievements: ['Saved clients over ₹2 crores in tax optimization', 'Expert in latest tax regulation changes', 'Successfully handled 200+ tax planning cases'],
      education: ['MBA in Finance from Manipal University', 'Bachelor\'s in Commerce from Rajasthan University'],
      email: 'mudit@lalitkabra.com',
      phone: '+91-9887610105',
      image: '/images/team/sanjay-mehta.jpg'
    },
    {
      name: 'Mihika Maheshwari',
      position: 'Tech Head',
      qualification: 'B.Tech Computer Science',
      experience: '2+ Years',
      expertise: ['Software Development', 'System Management', 'Digital Solutions', 'Database Management'],
      bio: 'Mihika Maheshwari serves as our Tech Head, bringing innovation and technical excellence to our digital infrastructure.',
      detailedBio: 'Mihika Maheshwari is a talented technology professional who spearheads our firm\'s digital transformation initiatives. With her B.Tech in Computer Science and growing experience in the field, she has quickly established herself as a key driver of technological innovation within our organization.',
      achievements: ['Developed custom accounting software solutions', 'Implemented digital workflow systems', 'Led database optimization projects'],
      education: ['B.Tech in Computer Science from RTU Kota', 'Certified in Advanced Database Management'],
      email: 'mihika@lalitkabra.com',
      phone: '+91-9887610105',
      image: '/images/team/anita-joshi.jpg'
    },
    {
      name: 'Mohammad Yameen Rafiqi',
      position: 'Tech Head',
      qualification: 'B.Tech Computer Science',
      experience: '2+ Years',
      expertise: ['Software Development', 'System Management', 'Digital Solutions', 'Web Development'],
      bio: 'Mohammad Yameen Rafiqi is our co-Tech Head, working alongside our technology team to deliver innovative digital solutions.',
      detailedBio: 'Mohammad Yameen Rafiqi is a dedicated technology professional who works as part of our technology leadership team. With his B.Tech in Computer Science and focused experience in web development and system management, he plays a crucial role in maintaining and advancing our technological capabilities.',
      achievements: ['Developed client portal and web applications', 'Implemented system security protocols', 'Led web development projects'],
      education: ['B.Tech in Computer Science from RTU Kota', 'Certified in Web Development Technologies'],
      email: 'yameen@lalitkabra.com',
      phone: '+91-9887610105',
      image: '/images/team/rahul-verma.jpg'
    },
    {
      name: 'Neha Sharma',
      position: 'Financial Analyst',
      qualification: 'CFA, MBA',
      experience: '5+ Years',
      expertise: ['Financial Modeling', 'Investment Analysis', 'Budgeting', 'Risk Assessment'],
      bio: 'Neha Sharma is our accomplished Financial Analyst with CFA qualification and MBA, bringing 5+ years of expertise in financial modeling and investment analysis.',
      detailedBio: 'Neha Sharma is a highly qualified Financial Analyst who brings sophisticated analytical capabilities to our financial advisory services. With her CFA charter and MBA qualification, combined with over 5 years of experience in financial analysis, she provides expert insights into complex financial scenarios.',
      achievements: ['CFA Charter holder with distinction', 'Led financial modeling for 100+ projects', 'Expert in investment portfolio analysis'],
      education: ['CFA Charter from CFA Institute', 'MBA in Finance from XLRI Jamshedpur', 'Bachelor\'s in Economics'],
      email: 'neha@lalitkabra.com',
      phone: '+91-9887610105',
      image: '/images/team/neha-sharma.jpg'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Professional Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#0B2545] to-[#1D4E89] border border-warm-cream/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-warm-cream/20">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedMember.name}</h2>
                      <p className="text-warm-cream text-lg">{selectedMember.position}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-white hover:text-warm-cream transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                    {/* Professional Details */}
                    <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-4 mb-4">
                      <h3 className="text-warm-cream font-semibold mb-3 flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Professional Details
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#F8F8F5]/70">Qualification:</span>
                          <span className="text-white">{selectedMember.qualification}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#F8F8F5]/70">Experience:</span>
                          <span className="text-white">{selectedMember.experience}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-4 mb-4">
                      <h3 className="text-warm-cream font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center text-[#F8F8F5]/80 hover:text-warm-cream transition-colors text-sm"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {selectedMember.email}
                        </a>
                        <a
                          href={`tel:${selectedMember.phone}`}
                          className="flex items-center text-[#F8F8F5]/80 hover:text-warm-cream transition-colors text-sm"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          {selectedMember.phone}
                        </a>
                      </div>
                    </div>

                    {/* Areas of Expertise */}
                    <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-4">
                      <h3 className="text-warm-cream font-semibold mb-3">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-warm-cream/20 text-warm-cream px-3 py-1 rounded-full text-xs border border-warm-cream/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Professional Bio */}
                    <div>
                      <h3 className="text-warm-cream font-semibold mb-3">Professional Background</h3>
                      <p className="text-[#F8F8F5]/80 leading-relaxed text-sm">
                        {selectedMember.detailedBio || selectedMember.bio}
                      </p>
                    </div>

                    {/* Education */}
                    {selectedMember.education && (
                      <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-4">
                        <h3 className="text-warm-cream font-semibold mb-3 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Education
                        </h3>
                        <ul className="space-y-1">
                          {selectedMember.education.map((edu) => (
                            <li key={edu} className="text-[#F8F8F5]/80 text-sm">
                              • {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Achievements */}
                    {selectedMember.achievements && (
                      <div className="bg-warm-cream/10 border border-warm-cream/20 rounded-lg p-4">
                        <h3 className="text-warm-cream font-semibold mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          Key Achievements
                        </h3>
                        <ul className="space-y-1">
                          {selectedMember.achievements.map((achievement) => (
                            <li key={achievement} className="text-[#F8F8F5]/80 text-sm">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                className="group h-full cursor-pointer"
                onClick={() => setSelectedMember(member)}
                whileHover={{ y: -5 }}
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
                    
                    <p className="text-[#F8F8F5]/80 leading-relaxed mb-4 text-sm flex-grow">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-warm-cream font-medium text-sm mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="bg-warm-cream/20 text-warm-cream px-2 py-0.5 rounded-full text-xs border border-warm-cream/50"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="text-warm-cream text-xs">+{member.expertise.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-warm-cream/10 mt-auto">
                      <p className="text-warm-cream text-center text-xs">Click to view full profile</p>
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