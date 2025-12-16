import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cases } from '../data/cases';

const Features: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">Track record</h2>
             <p className="text-xl text-slate-600 max-w-xl">
               We laten onze success voor zichzelf spreken. Bekijk hoe we agencies helpen aan opdrachten én kandidaten.
             </p>
          </div>
          <Link to="/cases" className="text-slate-900 font-bold text-lg flex items-center gap-2 hover:translate-x-1 transition-transform border-b-2 border-brand-yellow pb-1">
            Bekijk alle cases <ArrowRight size={24} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="h-64 bg-brand-yellow overflow-hidden relative flex items-center justify-center p-8">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-auto h-auto max-w-full max-h-40 object-contain"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{item.category}</p>
                <h3 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">{item.stat}</h3>
                <h4 className="text-xl font-bold text-slate-900 mb-4 leading-tight min-h-[3.5rem]">{item.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed flex-1 line-clamp-3">
                  "{item.desc}"
                </p>
                
                <Link to={`/cases/${item.id}`} className="w-full bg-brand-yellow text-slate-900 font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                  Bekijk case
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
