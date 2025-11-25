import React from 'react';
import { Target, Users, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Leadgeneratie',
      description: 'Wij benaderen proactief potentiële opdrachtgevers in jouw niche. Geen koude acquisitie meer voor jou, maar warme leads en afspraken in je agenda.',
      icon: Target,
      iconBg: 'bg-brand-yellow',
      iconColor: 'text-slate-900',
      features: ['Markt mapping', 'Outbound campagnes', 'Afspraken planning']
    },
    {
      id: 2,
      title: 'Sourcing',
      description: 'Bereik talent nog vóór ze "Open to Work" staan. Wij identificeren kandidaten die hun profiel optimaliseren en bereiken ze via slimme cross-channel campagnes.',
      icon: Users,
      iconBg: 'bg-slate-900',
      iconColor: 'text-brand-yellow',
      features: ['Pre-Open to Work signalen', 'Meta & LinkedIn outreach', 'Directe ATS onboarding']
    },
    {
      id: 3,
      title: 'Automation & AI',
      description: 'Automatiseer je recruitment tech stack. Van het syncen van "Open to Work" profielen naar je ATS tot AI-matching en het spotten van sales kansen.',
      icon: Bot,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-900',
      features: ['LinkedIn & ATS Sync', 'Open vacature detectie', 'AI Kandidaat Matching']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Onze diensten</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Wij zijn het verlengstuk van jouw recruitmentbureau. Of je nu meer opdrachtgevers nodig hebt, of worstelt om de juiste kandidaten te vinden: wij leveren de resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-brand-gray p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent size={32} strokeWidth={2.5} className={service.iconColor} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm font-medium text-slate-500">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link to="/diensten" className="text-slate-900 font-bold text-lg flex items-center gap-2 hover:translate-x-1 transition-transform border-b-2 border-brand-yellow pb-1">
            Bekijk alle diensten <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
