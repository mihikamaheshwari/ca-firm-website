import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AuditAssurance from './pages/services/AuditAssurance';
import TaxationCompliance from './pages/services/TaxationCompliance';
import BookkeepingServices from './pages/services/BookkeepingServices';
import CorporateServices from './pages/services/CorporateServices';
import FinancialConsulting from './pages/services/FinancialConsulting';
import LegalCompliance from './pages/services/LegalCompliance';
import GSTCompliance2024 from './pages/articles/GSTCompliance2024';
import DigitalTransformation from './pages/articles/DigitalTransformation';
import TaxPlanningSME from './pages/articles/TaxPlanningSME';
import FinancialReportingStandards from './pages/articles/FinancialReportingStandards';
import InternalAuditBestPractices from './pages/articles/InternalAuditBestPractices';
import CorporateGovernance from './pages/articles/CorporateGovernance';
import BusinessAdvisoryServices from './pages/articles/BusinessAdvisoryServices';
import BookkeepingQuotation from './pages/BookkeepingQuotation';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B2545] text-white font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/audit-assurance" element={<AuditAssurance />} />
            <Route path="/services/taxation-compliance" element={<TaxationCompliance />} />
            <Route path="/services/bookkeeping-services" element={<BookkeepingServices />} />
            <Route path="/services/corporate-services" element={<CorporateServices />} />
            <Route path="/services/financial-consulting" element={<FinancialConsulting />} />
            <Route path="/services/legal-compliance" element={<LegalCompliance />} />
            <Route path="/team" element={<Team />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/articles/gst-compliance-2024" element={<GSTCompliance2024 />} />
            <Route path="/articles/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/articles/tax-planning-sme" element={<TaxPlanningSME />} />
            <Route path="/articles/financial-reporting-standards" element={<FinancialReportingStandards />} />
            <Route path="/articles/internal-audit-best-practices" element={<InternalAuditBestPractices />} />
            <Route path="/articles/corporate-governance" element={<CorporateGovernance />} />
            <Route path="/articles/business-advisory-services" element={<BusinessAdvisoryServices />} />
            <Route path="/bookkeeping-quotation" element={<BookkeepingQuotation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;