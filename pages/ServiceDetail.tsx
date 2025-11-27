import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Target, Users, Bot, ArrowRight, Check } from 'lucide-react';
import { cases } from '../data/cases';

const ServiceDetail: React.FC = () => {
  const { service } = useParams<{ service: string }>();

  const serviceData: { [key: string]: any } = {
    leadgeneratie: {
      title: 'Leadgeneratie',
      subtitle: 'Warme leads van potentiële opdrachtgevers in jouw niche',
      icon: Target,
      description: 'Wij benaderen proactief potentiële opdrachtgevers in jouw niche. Geen koude acquisitie meer voor jou, maar warme leads en afspraken in je agenda.',
      hero_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      process: [
        { title: 'Markt mapping', description: 'Wij analyseren jouw doelmarkt en identificeren de beste prospects.' },
        { title: 'Outbound campagnes', description: 'Gepersonaliseerde benadering via LinkedIn, email en telefoon.' },
        { title: 'Afspraken planning', description: 'Wij zorgen dat de leads rechtstreeks in je agenda komen.' }
      ],
      benefits: [
        'Bespaar 10+ uren per week aan acquisitie',
        'Warme leads met hogere conversion rate',
        'Consistente pijplijn van opdrachtgevers',
        'Focus op je core business'
      ],
      caseStudy: {
        id: 'leadgeneratie-techniek',
        title: 'CareerScout',
        result: '15 Nieuwe Klanten',
        description: 'Wij namen de outreach in Nederland volledig uit handen. Resultaat: 15 nieuwe opdrachtgevers die actief op zoek zijn naar monteurs en engineers.'
      }
    },
    sourcing: {
      title: 'Sourcing',
      subtitle: 'Toptalent bereiken vóór ze "Open to Work" staan',
      icon: Users,
      description: 'Bereik talent nog vóór ze "Open to Work" staan. Wij identificeren kandidaten die hun profiel optimaliseren en bereiken ze via slimme cross-channel campagnes.',
      hero_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      process: [
        { title: 'Pre-Open to Work signalen', description: 'Wij detecteren kandidaten die binnenkort gaan switchen.' },
        { title: 'Meta & LinkedIn outreach', description: 'Multi-channel benadering voor maximale reach en response rate.' },
        { title: 'Directe ATS onboarding', description: 'Kandidaten worden direct in jouw systeem geplaatst.' }
      ],
      benefits: [
        'Toegang tot passieve kandidaten',
        'Lagere time-to-hire',
        'Betere kandidaat kwaliteit',
        'Direct in je ATS systeem'
      ],
      caseStudy: {
        title: 'Fuse',
        result: '200+ kandidaten',
        description: 'We sourced and delivered 200+ qualified candidates directly into their ATS within the first quarter.'
      }
    },
    'automation-ai': {
      title: 'Automation & AI',
      subtitle: 'Automatiseer je recruitment tech stack',
      icon: Bot,
      description: 'Automatiseer je recruitment tech stack. Van het syncen van "Open to Work" profielen naar je ATS tot AI-matching en het spotten van sales kansen bij klanten.',
      hero_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      process: [
        { title: 'LinkedIn & ATS Sync', description: 'Automatische synchronisatie tussen LinkedIn en je recruitment platform.' },
        { title: 'Open vacature detectie', description: 'AI-systeem dat open vacatures detecteert bij je klanten.' },
        { title: 'AI Kandidaat Matching', description: 'Intelligente matching op basis van skills en ervaring.' }
      ],
      benefits: [
        'Bespaar tot 15+ uren per week aan handmatige work',
        'Realtime data synchronisatie',
        'Nauwkeurigere candidate matching',
        'Schaal je operaties zonder extra kosten'
      ],
      caseStudy: {
        title: 'Generieke casus',
        result: '40% efficiency gain',
        description: 'Our automation and AI tools helped agencies reduce manual work by 40% while improving candidate quality.'
      }
    }
  };

  const currentService = serviceData[service || ''];

  if (!currentService) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Service niet gevonden</h1>
          <Link to="/diensten" className="text-brand-yellow font-bold hover:underline">
            Terug naar diensten
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = currentService.icon;

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                <IconComponent size={32} strokeWidth={2.5} />
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-4 leading-tight">
                {currentService.title}
              </h1>
              <p className="text-2xl text-slate-600 mb-8 font-medium">
                {currentService.subtitle}
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                {currentService.description}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                Plan een gesprek
                <ArrowRight size={24} />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 lg:h-full">
              <img 
                src={currentService.hero_image} 
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-gray py-20 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-slate-900 mb-16 text-center">Hoe we te werk gaan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentService.process.map((step: any, idx: number) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-yellow text-slate-900 rounded-xl flex items-center justify-center font-black text-lg mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-8">Wat je ervan meepakt</h2>
              <ul className="space-y-6">
                {currentService.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-slate-900" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-gray rounded-3xl p-12 border border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Case study</p>
              <h3 className="text-4xl font-black text-slate-900 mb-2">{currentService.caseStudy.result}</h3>
              <p className="text-xl font-bold text-slate-900 mb-6">{currentService.caseStudy.title}</p>
              <p className="text-slate-600 mb-8">{currentService.caseStudy.description}</p>
              <Link to="/cases" className="text-brand-yellow font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Bekijk alle cases <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white rounded-3xl p-12 mb-12">
        <div className="container mx-auto px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Klaar om te groeien?</h2>
          <p className="text-lg text-slate-300 mb-10">
            Laten we bespreken hoe {currentService.title} jouw recruitment kan transformeren.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
            Neem contact op
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Back to Services */}
      <div className="container mx-auto px-6 text-center">
        <Link to="/diensten" className="text-slate-900 font-bold text-lg flex items-center gap-2 justify-center hover:translate-x-1 transition-transform border-b-2 border-brand-yellow pb-1 inline-block">
          Terug naar alle diensten <ArrowRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
