import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cases } from '../data/cases';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const CaseDetail: React.FC = () => {
  const { id } = useParams();
  const caseItem = cases.find((c) => c.id === id);

  if (!caseItem) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-24">
            <h2 className="text-3xl font-bold mb-4">Case niet gevonden</h2>
            <Link to="/cases" className="text-brand-yellow font-bold underline">Terug naar overzicht</Link>
        </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/cases" className="inline-flex items-center gap-2 text-slate-500 font-bold mb-8 hover:text-brand-yellow transition-colors">
            <ArrowLeft size={20} /> Alle cases
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
                 <span className="inline-block px-4 py-2 bg-brand-yellow text-slate-900 font-bold rounded-full text-sm mb-6">
                    {caseItem.category}
                 </span>
                 <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    {caseItem.title}
                 </h1>
                 <p className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-brand-yellow pl-6">
                    Resultaat: {caseItem.stat}
                 </p>
                 <div className="prose prose-lg text-slate-600">
                    <p className="mb-6">{caseItem.desc}</p>
                    {caseItem.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={index < caseItem.fullContent.split('\n\n').length - 1 ? 'mb-6' : ''}>{paragraph}</p>
                    ))}
                 </div>
                 
                 <div className="mt-12 flex gap-4">
                     <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        Ook dit resultaat behalen? <ArrowRight size={18} />
                     </Link>
                 </div>
            </div>
            
            <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-brand-yellow flex items-center justify-center p-12">
                    <img src={caseItem.logo} alt={caseItem.title} className="h-64 object-contain" />
                </div>
                {/* Float Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-lg">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={24} />
                        <div>
                            <p className="font-bold text-slate-900 text-lg">Doelstelling behaald</p>
                            <p className="text-slate-500 text-sm">Binnen 3 maanden na start samenwerking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
