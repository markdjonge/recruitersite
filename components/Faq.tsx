import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Let op: deze vragen/antwoorden staan ook als FAQPage JSON-LD in index.html.
// Bij aanpassen: beide gelijk houden voor maximale GEO-impact.

export const faqItems = [
  {
    question: 'Wat is leadgeneratie voor recruitment agencies?',
    answer: 'Leadgeneratie voor recruitment agencies is het actief vinden en benaderen van organisaties met openstaande vacatures (opdrachtgevers) en het sourcen van geschikte kandidaten. LinkedUp doet dit volledig voor recruitment agencies: wij leveren warme leads met hiring managers en gekwalificeerde kandidaten, zodat recruiters zich kunnen focussen op gesprekken en plaatsingen.'
  },
  {
    question: 'Hoe kom ik als recruitment agency aan meer opdrachtgevers?',
    answer: 'De meeste agencies zijn afhankelijk van hun eigen netwerk en koude acquisitie. LinkedUp neemt de commerciële acquisitie over: wij mappen jouw doelmarkt, identificeren hiring managers met actieve vacatures en benaderen hen onder onze eigen naam. Positieve reacties sturen wij direct naar jou door. Zo ontstaat een voorspelbare stroom van gesprekken met potentiële opdrachtgevers.'
  },
  {
    question: 'Wat kost leadgeneratie voor een recruitmentbureau?',
    answer: 'Voor leadgeneratie werkt LinkedUp op basis van no cure no pay: je betaalt alleen per positieve reactie van een hiring manager. Er zijn geen opstartkosten. Wij benaderen hiring managers onder onze eigen naam, dus jouw bureau loopt geen enkel risico. In een gratis strategiesessie maken we een concreet voorstel op maat voor jouw niche.'
  },
  {
    question: 'Voor welke recruitment niches werkt LinkedUp?',
    answer: 'LinkedUp werkt voor recruitment agencies in vrijwel elke niche, waaronder techniek, zorg, finance, legal, IT, logistiek, marketing, sales en development. Met onze gratis marktscan krijg je direct een indicatieve AI-inschatting van het aantal openstaande vacatures in jouw niche in Nederland.'
  },
  {
    question: 'Hoe snel levert leadgeneratie resultaat op voor mijn agency?',
    answer: 'Zodra de leadgeneratie start, heb je binnen 2 dagen de eerste leads. LinkedUp benadert hiring managers met openstaande vacatures onder onze eigen naam en stuurt positieve reacties direct naar jou door. Jouw team kan daardoor direct aan de slag met warme leads in plaats van koude acquisitie.'
  }
];

const Faq: React.FC = () => {
  // Standaard alles dicht: rustiger beeld. Antwoorden staan altijd in de HTML
  // (alleen visueel ingeklapt) zodat crawlers en AI's alle content kunnen lezen.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Veelgestelde vragen over leadgeneratie voor recruitment agencies
          </h2>
          <p className="text-lg text-slate-600">
            Alles wat je wilt weten voordat je met LinkedUp start.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 ml-4 text-brand-yellow transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
