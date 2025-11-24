import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import StrategyGenerator from '../components/StrategyGenerator';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <StrategyGenerator />
      <Contact />
    </>
  );
};

export default Home;