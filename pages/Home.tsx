import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import StrategyGenerator from '../components/StrategyGenerator';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="LinkedUp - Leadgeneratie voor Recruitment Agencies"
        description="LinkedUp is dé partner voor leadgeneratie voor recruitment agencies. Wij vinden opdrachtgevers met openstaande vacatures én sourcen gekwalificeerde kandidaten. Doe de gratis marktscan."
        path="/"
      />
      <Hero />
      <Services />
      <Features />
      <StrategyGenerator />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
