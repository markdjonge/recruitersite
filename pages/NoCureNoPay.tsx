import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowRight, Check, X, ChevronDown, ShieldCheck, Zap, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { contactInfo } from '../data/contact';

const faqs = [
  {
    q: 'Wat is no cure no pay leadgeneratie?',
    a: 'No cure no pay leadgeneratie betekent dat je alleen betaalt voor resultaat. Bij LinkedUp is dat resultaat een positieve reactie van een hiring manager: iemand met een openstaande vacature die aangeeft met jouw bureau in gesprek te willen. Geen reactie? Dan betaal je niets.'
  },
  {
    q: 'Wanneer precies betaal ik?',
    a: 'Je betaalt uitsluitend per positieve reactie van een hiring manager die wij onder onze eigen naam hebben benaderd. Er zijn geen opstartkosten en geen vaste maandlasten. De eerste leads heb je binnen 2 dagen na de start.'
  },
  {
    q: 'Wat als de lead uiteindelijk geen klant wordt?',
    a: 'Je betaalt voor de positieve reactie, niet voor de uiteindelijke deal. Wij leveren warme, relevante leads; het gesprek en de opdracht zijn aan jou. Doordat wij gericht benaderen op actieve vacatures, is de kwaliteit van de reacties hoog.'
  },
  {
    q: 'Zit ik ergens aan vast?',
    a: 'Nee. Er zijn geen contracten met looptijd. Stoppen kan op elk moment; je betaalt alleen voor de positieve reacties die al zijn opgeleverd.'
  }
];

const NoCureNoPay: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-20">
      <SEO
        title="No Cure No Pay Leadgeneratie voor Recruitment Agencies | LinkedUp"
        description="No cure no pay leadgeneratie voor recruitment agencies: betaal alleen per positieve reactie van een hiring manager. Geen opstartkosten, eerste leads binnen 2 dagen."
        path="/no-cure-no-pay-leadgeneratie"
      />
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })}
        </script>
      </Head>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow text-slate-900 text-sm font-bold mb-8">
            <ShieldCheck size={16} />
            <span>Zonder risico groeien</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            No cure no pay leadgeneratie voor recruitment agencies
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Je betaalt alleen per positieve reactie van een hiring manager. Geen opstartkosten, geen vaste lasten, geen risico. En binnen 2 dagen je eerste leads.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-xl">
            Plan een vrijblijvend gesprek <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Wat betekent het */}
      <section className="bg-brand-gray py-20 mb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Wat betekent no cure no pay bij leadgeneratie?</h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              Traditionele leadgeneratie-partijen rekenen vaste retainers of opstartkosten, ongeacht het resultaat. Wij vinden dat raar. Je huurt ons in voor één ding: <strong className="text-slate-900">gesprekken met organisaties die recruiters nodig hebben</strong>.
            </p>
            <p>
              Daarom werkt LinkedUp voor leadgeneratie volledig op basis van no cure no pay. Wij benaderen hiring managers met openstaande vacatures in jouw niche, onder onze eigen naam. Zodra iemand positief reageert, sturen wij die reactie direct naar je door. Pas dán betaal je.
            </p>
          </div>
        </div>
      </section>

      {/* Zo werkt het */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">Zo werkt het in de praktijk</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap size={24} className="text-slate-900" />,
              title: '1. Start zonder kosten',
              text: 'Geen opstartkosten, geen contracten. We bepalen samen jouw niche en ideale opdrachtgever, en wij gaan direct aan de slag.'
            },
            {
              icon: <ShieldCheck size={24} className="text-slate-900" />,
              title: '2. Wij benaderen, jij wacht niet',
              text: 'Wij benaderen hiring managers onder onze eigen naam. Binnen 2 dagen na start komen de eerste positieve reacties binnen.'
            },
            {
              icon: <Check size={24} className="text-slate-900" />,
              title: '3. Betaal per positieve reactie',
              text: 'Elke positieve reactie sturen wij direct naar je door. Daar betaal je voor, niets anders. Geen reactie = geen kosten.'
            }
          ].map((step, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vergelijking */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 text-center">No cure no pay vs. vaste retainer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-gray rounded-3xl p-8 border border-slate-200">
              <h3 className="font-black text-lg text-slate-500 mb-6">Traditionele leadgeneratie</h3>
              <ul className="space-y-4">
                {[
                  'Opstartkosten of vaste maandretainer',
                  'Betalen ongeacht resultaat',
                  'Lange contracten met opzegtermijn',
                  'Risico ligt volledig bij jou'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <X size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-yellow/20 rounded-full blur-3xl"></div>
              <h3 className="font-black text-lg text-brand-yellow mb-6 relative z-10">LinkedUp: no cure no pay</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  'Geen opstartkosten',
                  'Betaal alleen per positieve reactie',
                  'Stoppen wanneer je wilt',
                  'Risico ligt bij ons, zo hoort het'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-yellow flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 text-center">Veelgestelde vragen over no cure no pay</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-brand-gray transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`flex-shrink-0 ml-4 text-brand-yellow transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Groeien zonder risico?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
            Plan een vrijblijvend gesprek en ontdek hoeveel opdrachtgevers er in jouw niche voor het oprapen liggen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
              Plan een gesprek <ArrowRight size={20} />
            </Link>
            <a href={`tel:${contactInfo.phoneHref}`} className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
              <Phone size={20} /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoCureNoPay;
