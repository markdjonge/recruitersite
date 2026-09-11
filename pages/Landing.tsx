import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  Calendar,
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  Star
} from 'lucide-react';
import { contactInfo } from '../data/contact';
import { trackConversion } from '../services/ga4Service';
import { initMetaPixel, trackMetaLead, trackMetaSchedule } from '../services/metaPixelService';
import SEO from '../components/SEO';

// ============================================
// TESTVERSIE LANDINGSPAGINA (Meta Ads)
// Pas teksten gerust aan - alles is dummy content
// ============================================

// TODO: vervang door je echte Calendly/Cal.com link
const MEETING_URL = 'https://cal.com/jouw-linkedin-link/kennismaking';

const Landing: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Bot-bescherming
  const [honeypot, setHoneypot] = useState('');
  const formLoadedAt = useRef<number>(Date.now());

  // UTM-parameters voor campagne-tracking
  const utmParams = useRef<Record<string, string>>({});

  useEffect(() => {
    // Meta Pixel initialiseren (werkt pas als META_PIXEL_ID in index.html staat)
    if (window.META_PIXEL_ID) {
      initMetaPixel(window.META_PIXEL_ID);
    }

    // UTM-parameters uit de URL halen en bewaren
    const params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
      const value = params.get(key);
      if (value) utmParams.current[key] = value;
    });
    try {
      sessionStorage.setItem('linkedup_utm', JSON.stringify(utmParams.current));
    } catch {
      // sessie-opslag niet beschikbaar; geen probleem
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot-checks (honeypot + te snel verzonden)
    const elapsedMs = Date.now() - formLoadedAt.current;
    if (honeypot !== '' || elapsedMs < 3000) {
      console.warn('Inzending geblokkeerd (spam-bescherming).');
      setSubmitSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const webhookUrl = 'https://automation.linkedup.online/webhook/488010b6-178a-490a-9f1a-b218669cf39f';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'landing_form',
          timestamp: new Date().toISOString(),
          ...formData,
          utm: utmParams.current
        })
      });

      if (response.ok) {
        trackConversion('landing_form_submission');
        trackMetaLead();
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', company: '', phone: '' });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Webhook error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'Wat kost jullie dienst?',
      a: 'Wij werken op basis van no cure no pay: je betaalt alleen per positieve reactie van een hiring manager. Er zijn geen opstartkosten en geen vaste maandlasten. Geen resultaat = geen kosten.'
    },
    {
      q: 'Hoe snel zie ik resultaat?',
      a: 'Binnen 2 dagen na de start heb je de eerste leads. Wij benaderen hiring managers met openstaande vacatures onder onze eigen naam (LinkedUp) en sturen positieve reacties direct naar je door.'
    },
    {
      q: 'Zit ik ergens aan vast?',
      a: 'Nee. Door het no cure no pay-model zit je nergens aan vast: je betaalt uitsluitend voor daadwerkelijke resultaten. Stoppen kan op elk moment.'
    },
    {
      q: 'Voor welke recruitment niches werken jullie?',
      a: 'Vrijwel elke niche: van techniek en zorg tot marketing, sales en developers. In de gratis strategiesessie kijken we samen naar het marktpotentieel in jouw niche.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <SEO
        title="Gratis Strategiesessie - Meer opdrachtgevers voor jouw agency | LinkedUp"
        description="Vraag een gratis strategiesessie aan en ontdek hoe LinkedUp jouw recruitment agency helpt met leadgeneratie: meer opdrachtgevers en betere kandidaten."
      />

      {/* ===== Minimale header (geen menu = geen afleiding) ===== */}
      <header className="bg-white py-5 border-b border-slate-100">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-1 select-none">
            <span className="text-2xl font-black text-slate-900 tracking-tighter">Linked</span>
            <span className="text-2xl font-black text-brand-yellow tracking-tighter">Up</span>
          </div>
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-yellow transition-colors"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">{contactInfo.phone}</span>
          </a>
        </div>
      </header>

      {/* ===== Hero + formulier (boven de vouw) ===== */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Tekst links */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow text-slate-900 text-sm font-bold mb-6">
                <Target size={16} />
                <span>Voor recruitment agencies</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Wij vinden opdrachtgevers. <span className="text-brand-yellow">Jij plaatst kandidaten.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                LinkedUp helpt recruitment agencies aan een voorspelbare stroom van nieuwe opdrachten en gekwalificeerde kandidaten. Geen koude acquisitie meer – wij doen het voorwerk.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'No cure no pay: betaal alleen per positieve reactie',
                  'Eerste leads binnen 2 dagen na start',
                  'Geen opstartkosten, geen risico',
                  'Wij benaderen hiring managers onder onze eigen naam'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200">
                    <Check size={20} className="text-brand-yellow flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Social proof cijfers (testdata) */}
              <div className="flex gap-8 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-black text-brand-yellow">50+</p>
                  <p className="text-sm text-slate-400">Agencies geholpen</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-brand-yellow">1.200+</p>
                  <p className="text-sm text-slate-400">Gesprekken ingepland</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-brand-yellow">4,9/5</p>
                  <p className="text-sm text-slate-400 flex items-center gap-1">
                    <Star size={14} className="text-brand-yellow fill-brand-yellow" /> Klantscore
                  </p>
                </div>
              </div>
            </div>

            {/* Formulier rechts */}
            <div id="lp-form" className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl scroll-mt-8">
              {submitSuccess ? (
                <div className="text-center py-10">
                  <div className="flex justify-center mb-6">
                    <div className="bg-brand-yellow p-4 rounded-full">
                      <Check size={40} className="text-slate-900" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-3">Aanvraag ontvangen!</h3>
                  <p className="text-slate-600 mb-6">
                    We nemen binnen 24 uur contact met je op. Wil je niet wachten?
                  </p>
                  <a
                    href={MEETING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMetaSchedule()}
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
                  >
                    <Calendar size={18} /> Plan direct een gesprek
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black mb-2">Vraag je gratis strategiesessie aan</h2>
                  <p className="text-slate-600 mb-6 text-sm">
                    Ontdek hoeveel opdrachten er in jouw niche voor het oprapen liggen.
                  </p>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 text-sm font-medium">
                      Er ging iets mis. Probeer het opnieuw of bel ons op {contactInfo.phone}.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Je naam *"
                      required
                      className="w-full bg-brand-gray border-2 border-transparent p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Zakelijk e-mailadres *"
                      required
                      className="w-full bg-brand-gray border-2 border-transparent p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Naam van je agency *"
                      required
                      className="w-full bg-brand-gray border-2 border-transparent p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefoonnummer (optioneel)"
                      className="w-full bg-brand-gray border-2 border-transparent p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow transition-colors"
                    />

                    {/* Honeypot: onzichtbaar voor mensen */}
                    <div
                      aria-hidden="true"
                      style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, overflow: 'hidden' }}
                    >
                      <label>
                        Website
                        <input
                          type="text"
                          name="website"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-yellow text-slate-900 font-black text-lg py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Versturen...' : 'Vraag gratis sessie aan'} <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-slate-400 text-xs flex items-center justify-center gap-1">
                      <ShieldCheck size={14} /> 100% vrijblijvend. Wij verkopen je data nooit door.
                    </p>
                  </form>

                  <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500 mb-3">Liever direct een moment inplannen?</p>
                    <a
                      href={MEETING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackMetaSchedule()}
                      className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-brand-yellow transition-colors"
                    >
                      <Calendar size={18} /> Plan een gesprek in mijn agenda
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Hoe het werkt ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Zo werkt het</h2>
          <p className="text-center text-slate-600 mb-14 max-w-2xl mx-auto">
            In drie stappen naar een volle pipeline met opdrachten en kandidaten.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} className="text-slate-900" />,
                title: '1. Strategiesessie',
                text: 'We analyseren jouw niche en bepalen welke opdrachtgevers en kanalen het meeste opleveren.'
              },
              {
                icon: <Users size={28} className="text-slate-900" />,
                title: '2. Wij gaan aan de slag',
                text: 'Ons team benadert hiring managers en sourcet kandidaten. Jij ontvangt warme leads in je inbox.'
              },
              {
                icon: <TrendingUp size={28} className="text-slate-900" />,
                title: '3. Jij sluit de deal',
                text: 'Jij voert de gesprekken en plaatst kandidaten. Wij houden de pipeline gevuld.'
              }
            ].map((step, i) => (
              <div key={i} className="bg-brand-gray p-8 rounded-2xl text-center">
                <div className="bg-brand-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="font-black text-lg mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonial (testdata) ===== */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-brand-yellow fill-brand-yellow" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-relaxed">
            "Testimonial placeholder: binnen drie maanden hadden we vijf nieuwe opdrachtgevers. De strategiesessie alleen was al goud waard."
          </blockquote>
          <p className="font-bold text-slate-900">Naam Klant</p>
          <p className="text-sm text-slate-500">Eigenaar, Recruitment Agency (test)</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-brand-gray transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Laatste CTA ===== */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Klaar voor meer opdrachten?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Vraag vandaag nog je gratis strategiesessie aan en ontdek het marktpotentieel in jouw niche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-brand-yellow text-slate-900 font-black px-10 py-4 rounded-full hover:bg-yellow-400 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Vraag gratis sessie aan <ArrowRight size={20} />
            </button>
            <a
              href={MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMetaSchedule()}
              className="bg-white/10 border border-white/20 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={20} /> Plan direct een gesprek
            </a>
          </div>
        </div>
      </section>

      {/* ===== Minimale footer ===== */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} {contactInfo.company} · KvK {contactInfo.kvk}</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-brand-yellow transition-colors flex items-center gap-2">
              <Phone size={14} /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-yellow transition-colors flex items-center gap-2">
              <Mail size={14} /> {contactInfo.email}
            </a>
            <Link to="/" className="hover:text-brand-yellow transition-colors">Naar de website</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
