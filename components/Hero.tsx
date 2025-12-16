import React from 'react';
import { ChevronRight, Users, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-32 pb-20 overflow-hidden">
      
      {/* Decorative Elements - Yellow Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray -skew-x-12 translate-x-32 hidden lg:block z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">

          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
              Wij de match,<br />
              <span className="relative inline-block">
                jij de business.
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              LinkedUp helpt recruitment agencies groeien aan twee kanten. Wij vinden nieuwe <strong>opdrachtgevers</strong> met vacatures én sourcen de beste <strong>kandidaten</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-10 py-5 bg-brand-yellow text-slate-900 font-bold text-lg rounded-full hover:bg-yellow-400 transition-transform hover:-translate-y-1 shadow-xl shadow-yellow-400/20 inline-flex items-center gap-2">
                Start met groeien
              </a>
              <a href="#market-scan" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full border-2 border-slate-200 hover:border-slate-900 transition-colors inline-flex items-center gap-2">
                Doe de marktscan
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8 text-sm font-semibold text-slate-500 uppercase tracking-wider">
               <div className="flex items-center gap-2">
                 <Briefcase size={18} className="text-brand-yellow" />
                 Meer vacatures
               </div>
               <div className="flex items-center gap-2">
                 <Users size={18} className="text-brand-yellow" />
                 Betere kandidaten
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
