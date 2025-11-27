import React from 'react';
import { Target, Users, Bot, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Onze Diensten.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Wij zijn het verlengstuk van jouw recruitmentbureau. Of je nu meer opdrachtgevers nodig hebt, of worstelt om de juiste kandidaten te vinden: wij leveren de resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 text-slate-900">
              <Target size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Leadgeneratie</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Wij benaderen proactief potentiële opdrachtgevers in jouw niche. Geen koude acquisitie meer voor jou, maar warme leads en afspraken in je agenda.
            </p>
            <ul className="space-y-2 mb-8 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>Markt mapping</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>Outbound campagnes</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>Afspraken planning</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-brand-yellow">
              <Users size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Sourcing</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Bereik talent nog vóór ze 'Open to Work' staan. Wij identificeren kandidaten die hun profiel optimaliseren en bereiken ze via slimme cross-channel campagnes, direct geleverd in jouw ATS.
            </p>
            <ul className="space-y-2 mb-8 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>Pre-Open to Work signalen</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>Meta & LinkedIn outreach</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>Directe ATS onboarding</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-900">
              <Bot size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Automation & AI</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Automatiseer je recruitment tech stack. Van het syncen van 'Open to Work' profielen naar je ATS tot AI-matching en het spotten van sales kansen bij klanten.
            </p>
            <ul className="space-y-2 mb-8 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>LinkedIn & ATS Sync</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>Open vacature detectie</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>AI Kandidaat Matching</li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-gray rounded-[3rem] p-12 text-center relative overflow-hidden">
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl font-black text-slate-900 mb-6">Klaar om op te schalen?</h2>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                    Plan een strategiesessie <ArrowRight />
                </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
