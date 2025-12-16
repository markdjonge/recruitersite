import React from 'react';
import Features from '../components/Features';

const Cases: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-slate-900 text-white py-12 md:py-20">
         <div className="container mx-auto px-6 text-center">
             <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 break-words">Succesverhalen.</h1>
             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                 Ontdek hoe wij andere recruitment agencies hebben geholpen met het vinden van nieuwe business en toptalent.
             </p>
         </div>
      </div>
      <Features />
    </div>
  );
};

export default Cases;
