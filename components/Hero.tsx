import React from 'react';
import { ChevronRight, Users, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-32 pb-10 lg:pb-20 overflow-hidden">
      
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

          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white">
                 <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5eb3e8a359f44db3a3a5b677dd5748f4%2Fff53698eb8ff4c169cfd3f54a564a66f?format=webp&width=800"
                    alt="Team collaboration"
                    className="object-cover w-full h-full"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 md:bottom-8 lg:bottom-10 left-4 md:left-8 lg:left-10 text-white">
                    <p className="text-brand-yellow font-bold uppercase tracking-wider mb-2 md:mb-3 text-sm md:text-base lg:text-lg">Full-Service Partner</p>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">Jouw externe sales- <br/>en sourcingsafdeling.</h3>
                 </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs hidden">
                 <p className="text-5xl font-black text-slate-900 mb-2">2-zijdig</p>
                 <p className="text-slate-600 font-medium">Groei in opdrachtgevers én kandidaten.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
