import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-brand-200 selection:text-brand-900 font-sans flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diensten" element={<Services />} />
          <Route path="/diensten/:service" element={<ServiceDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/werken-bij" element={<About />} /> {/* Redirecting to About for now */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
