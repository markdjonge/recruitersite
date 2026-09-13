import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Target, Users, Bot, ArrowRight, Check } from 'lucide-react';
import { cases } from '../data/cases';
import SEO from '../components/SEO';

const ServiceDetail: React.FC = () => {
  const { service } = useParams<{ service: string }>();

  const serviceData: { [key: string]: any } = {
    leadgeneratie: {
      title: 'Leadgeneratie',
      subtitle: 'Warme leads van potentiële opdrachtgevers in jouw niche',
      icon: Target,
      description: 'Wij benaderen proactief hiring managers met openstaande vacatures in jouw niche, en wel onder onze eigen naam: LinkedUp. Geen koude acquisitie meer voor jou: je betaalt alleen per positieve reactie (no cure no pay) en hebt binnen 2 dagen je eerste leads.',
      hero_image: 'https://cdn.builder.io/api/v1/image/assets%2F5eb3e8a359f44db3a3a5b677dd5748f4%2F674d3a30bcb4424dbc5b5bf5fea291f2?format=webp&width=800',
      process: [
        { title: 'Markt mapping', description: 'Wij analyseren jouw doelmarkt en identificeren hiring managers met openstaande vacatures.' },
        { title: 'Outbound onder onze naam', description: 'Wij benaderen hiring managers namens LinkedUp via LinkedIn, e-mail en telefoon.' },
        { title: 'Warme leads binnen 2 dagen', description: 'Positieve reacties sturen wij direct door aan jou. De eerste leads heb je binnen 2 dagen.' }
      ],
      benefits: [
        'No cure no pay: betaal alleen per positieve reactie',
        'Geen opstartkosten',
        'Eerste leads binnen 2 dagen na start',
        'Wij benaderen hiring managers onder onze eigen naam'
      ],
      pillar: [
        {
          title: 'Wat is leadgeneratie voor recruitment agencies?',
          paragraphs: [
            'Leadgeneratie voor recruitment agencies is het systematisch vinden en benaderen van organisaties met openstaande vacatures: jouw potentiële opdrachtgevers. Waar recruitment marketing zich richt op het aantrekken van kandidaten, draait leadgeneratie om de commerciële kant van jouw bureau: nieuwe opdrachten binnenhalen.',
            'De meeste recruitment agencies groeien via hun eigen netwerk en mond-tot-mondreclame. Dat werkt, tot het stopt. Wie structureel wil groeien, heeft een voorspelbare stroom van gesprekken met hiring managers nodig. Precies dat leveren wij: wij mappen jouw markt, identificeren bedrijven met actieve vacatures en benaderen de juiste hiring managers onder onze eigen naam. Positieve reacties sturen wij direct naar je door.'
          ]
        },
        {
          title: 'Waarom koude acquisitie voor recruiters steeds minder werkt',
          paragraphs: [
            'Hiring managers worden dagelijks bestookt met generieke salesberichten. Het resultaat: responspercentages dalen en acquisitie kost steeds meer tijd. Tijd die jij liever besteedt aan gesprekken met kandidaten en klanten.',
            'Effectieve leadgeneratie voor recruiters draait om timing en relevantie: de juiste organisatie benaderen op het moment dat er een vacature openstaat, met een bericht dat aansluit bij hun situatie. Dat is precies waar onze aanpak op is gebouwd: datagedreven, persoonlijk en onder onze naam, zodat jouw merk nooit beschadigt.'
          ]
        },
        {
          title: 'No cure no pay: leadgeneratie zonder risico',
          paragraphs: [
            'Wij werken op basis van no cure no pay. Dat betekent: je betaalt alleen voor daadwerkelijke resultaten: een positieve reactie van een hiring manager. Geen opstartkosten, geen vaste maandlasten, geen risico.',
            'Na de start heb je binnen 2 dagen je eerste leads. Zo simpel is het. Lees meer over hoe dit precies werkt op onze pagina over no cure no pay leadgeneratie.'
          ],
          link: { to: '/no-cure-no-pay-leadgeneratie', label: 'Alles over no cure no pay' }
        },
        {
          title: 'Voor welke recruitment agencies werkt dit?',
          paragraphs: [
            'Onze aanpak werkt voor agencies in vrijwel elke niche: van techniek, zorg en finance tot legal, IT, logistiek, marketing, sales en development. Of je nu een jong bureau bent dat zijn eerste opdrachtgevers zoekt, of een gevestigde speler die wil opschalen: een voorspelbare instroom van gesprekken met hiring managers is de basis van groei.',
            'Benieuwd naar het potentieel in jouw niche? Doe de gratis marktscan op onze homepage en krijg direct een indicatieve inschatting van het aantal openstaande vacatures in jouw markt.'
          ]
        }
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
      hero_image: 'https://cdn.builder.io/api/v1/image/assets%2F5eb3e8a359f44db3a3a5b677dd5748f4%2F674d3a30bcb4424dbc5b5bf5fea291f2?format=webp&width=800',
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
        id: 'sourcing-finance',
        title: 'Fuuse',
        result: '30+ Interviews',
        description: 'Voor Fuuse hebben we de sourcing van Financial en Business Controllers volledig geoptimaliseerd.'
      }
    },
    'automation-ai': {
      title: 'Automation & AI',
      subtitle: 'Automatiseer je recruitment tech stack',
      icon: Bot,
      description: 'Automatiseer je recruitment tech stack. Van het syncen van "Open to Work" profielen naar je ATS tot AI-matching en het spotten van sales kansen bij klanten.',
      hero_image: 'https://cdn.builder.io/api/v1/image/assets%2F5eb3e8a359f44db3a3a5b677dd5748f4%2F674d3a30bcb4424dbc5b5bf5fea291f2?format=webp&width=800',
      process: [
        { title: 'LinkedIn & ATS Sync', description: 'Automatische synchronisatie tussen LinkedIn en je recruitment platform.' },
        { title: 'Open vacature detectie', description: 'AI-systeem dat open vacatures detecteert bij je klanten.' },
        { title: 'AI Kandidaat Matching', description: 'Intelligente matching op basis van skills en ervaring.' }
      ],
      benefits: [
        'Bespaar tot 15+ uren per week aan handmatig werk',
        'Realtime data synchronisatie',
        'Nauwkeurigere candidate matching',
        'Schaal je operaties zonder extra kosten'
      ],
      caseStudy: {
        id: 'full-service-sales',
        title: 'Rendement Recruiters',
        result: '40 nieuwe plaatsingen',
        description: 'Wij pakken de volledige funnel op: van lead tot match. Resultaat: 40 succesvolle plaatsingen in 12 maanden tijd.'
      }
    },
    'full-service': {
      title: 'Full Service',
      subtitle: 'Volledige funnel: van lead tot match',
      icon: Target,
      description: 'Wij pakken de volledige funnel op: van lead tot match. Wij sourcen zowel opdrachtgevers als kandidaten, zodat jij je volledig op matchen kunt focussen.',
      hero_image: 'https://cdn.builder.io/api/v1/image/assets%2F5eb3e8a359f44db3a3a5b677dd5748f4%2F674d3a30bcb4424dbc5b5bf5fea291f2?format=webp&width=800',
      process: [
        { title: 'Leads en kandidaten sourcing', description: 'Wij benaderen proactief opdrachtgevers en identificeren toptalent tegelijkertijd.' },
        { title: 'Parallel pipeline building', description: 'Maandelijks 25+ warme leads en 150+ gekwalificeerde kandidaten op dezelfde profielen.' },
        { title: 'Matchingfocus', description: 'Jij focust je op matchen terwijl wij de pijpleiding vullen.' }
      ],
      benefits: [
        'Breekt de klassieke kip-ei discussie',
        'Consistente instroom van beide zijden',
        'Opdrachten vervuld binnen 4-6 weken',
        'Schaal zonder back-office overhead'
      ],
      caseStudy: {
        id: 'full-service-sales',
        title: 'Rendement Recruiters',
        result: '40 nieuwe plaatsingen',
        description: 'Voor Rendement Recruiters hebben we de klassieke kip-ei discussie doorbroken. Waar veel bureaus moeten kiezen tussen sales of sourcing, hebben wij beide processen parallel opgezet.'
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
      <SEO
        title={`${currentService.title} voor Recruitment Agencies | LinkedUp`}
        description={`${currentService.subtitle}. ${currentService.description}`}
        path={`/diensten/${service}`}
      />
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start md:items-center mb-12">
            <div className="min-w-0">
              <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                <IconComponent size={32} strokeWidth={2.5} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 leading-tight">
                {currentService.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-600 mb-8 font-medium">
                {currentService.subtitle}
              </p>
              <p className="text-base sm:text-lg md:text-base lg:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                {currentService.description}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                Plan een gesprek
                <ArrowRight size={24} />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px] xl:h-full flex-shrink-0">
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
              <Link to={`/cases/${currentService.caseStudy.id}`} className="text-brand-yellow font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Bekijk case <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar content (alleen bij diensten met uitgebreide content) */}
      {currentService.pillar && (
        <section className="mb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center">
              Alles over leadgeneratie voor recruitment agencies
            </h2>
            <div className="space-y-14">
              {currentService.pillar.map((block: any, idx: number) => (
                <div key={idx} className={idx % 2 === 1 ? 'bg-brand-gray rounded-3xl p-8 md:p-10' : ''}>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-5">{block.title}</h3>
                  {block.paragraphs.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="text-lg text-slate-600 leading-relaxed mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                  {block.link && (
                    <Link to={block.link.to} className="inline-flex items-center gap-2 mt-4 text-slate-900 font-bold border-b-2 border-brand-yellow pb-1 hover:translate-x-1 transition-transform">
                      {block.link.label} <ArrowRight size={20} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
