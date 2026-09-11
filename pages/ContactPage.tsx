import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Contact - Vraag een gratis strategiesessie aan | LinkedUp"
        description="Neem contact op met LinkedUp voor leadgeneratie voor jouw recruitment agency. Bel 085-0045749, mail info@linkedup.online of vraag direct een gratis strategiesessie aan."
        path="/contact"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
