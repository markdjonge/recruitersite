import React from 'react';
import Features from '../components/Features';

const Cases: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-slate-900 text-white py-20">
         <div className="container mx-auto px-6 text-center">
             <h1 className="text-5xl md:text-7xl font-black mb-6">Succesverhalen.</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                 Ontdek hoe wij andere recruitment agencies hebben geholpen met het vinden van nieuwe business en toptalent.
             </p>
         </div>
      </div>
      <Features />
    </div>
  );
};

export default Cases;