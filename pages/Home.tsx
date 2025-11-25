import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import StrategyGenerator from '../components/StrategyGenerator';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <StrategyGenerator />
      <Contact />
    </>
  );
};

export default Home;
