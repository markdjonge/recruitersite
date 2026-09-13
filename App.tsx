import React, { useEffect } from 'react';
import { Outlet, useLocation, useMatches } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { initGA4, trackPageView } from './services/ga4Service';

/**
 * Layout voor alle "normale" pagina's (met header en footer).
 * De landingspagina /start gebruikt deze layout bewust niet.
 */
const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = (window as any).GA4_MEASUREMENT_ID;
    if (measurementId) {
      initGA4(measurementId);
    }
  }, []);

  const matches = useMatches();
  const isNotFound = matches.some((m) => (m as any).route?.path === '*');

  useEffect(() => {
    // Op de NotFound-route (spam/bots op willekeurige paden) meten we geen pageview
    if (isNotFound) return;
    trackPageView(location.pathname);
  }, [location.pathname, isNotFound]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-brand-200 selection:text-brand-900 font-sans flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
