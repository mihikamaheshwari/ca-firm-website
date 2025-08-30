import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0B2545] border-t border-warm-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Lalit Kabra & Company Logo" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-white">Lalit Kabra & Company</h3>
                <p className="text-warm-cream/90">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-warm-cream/80 mb-4 leading-relaxed">
              Over 18 years of excellence in taxation, audit, and financial advisory services. 
              Serving clients across India with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-warm-cream hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-warm-cream hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-warm-cream hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-warm-cream mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Team', 'Industries', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block text-[#F8F8F5]/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-warm-cream mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#F8F8F5]/80 text-sm">Head Office: 134, First Floor, "Govindam", Old RTO Road, Bhilwara – 311001, Rajasthan (India)</p>
                  <p className="text-[#F8F8F5]/80 text-sm">Branch Office: Shop No. 10, First Floor, Jayanti Bazaar, M.I. Road, Jaipur – 302001, Rajasthan (India)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#F8F8F5]/80 text-sm">Head Office: +91-9887610105, +911482451727</p>
                  <p className="text-[#F8F8F5]/80 text-sm">Branch Office: +91-98290-66538</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-warm-cream mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#F8F8F5]/80 text-sm">Head Office: calalit18@gmail.com</p>
                  <p className="text-[#F8F8F5]/80 text-sm">Branch Office: kabra_lalit@yahoo.co.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-cream/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F8F8F5]/60 text-sm">
            © 2024 Lalit Kabra & Company. All rights reserved.
          </p>
          <p className="text-[#F8F8F5]/60 text-sm mt-2 md:mt-0">
            ICAI Membership: 123456 | Firm Registration: 12345N
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;