import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';
import { trackConversion } from '../services/ga4Service';
import { trackEvent } from '../services/ga4Service';
import { contactInfo } from '../data/contact';
import CalendlyEmbed from './CalendlyEmbed';
import { initCalendlyTracking, CALENDLY_URL_GENERAL } from '../services/calendlyService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  // Bot-bescherming: honeypot-veld (onzichtbaar voor mensen)
  const [honeypot, setHoneypot] = useState('');
  // Bot-bescherming: tijdstip waarop het formulier geladen is
  const formLoadedAt = React.useRef<number>(Date.now());

  useEffect(() => {
    initCalendlyTracking();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot-check 1: honeypot ingevuld? Dan is het een bot.
    // Bot-check 2: binnen 3 seconden verzonden? Dan is het vrijwel zeker een bot.
    const elapsedMs = Date.now() - formLoadedAt.current;
    if (honeypot !== '' || elapsedMs < 3000) {
      // Stilletjes afwijzen: toon wél een succesmelding zodat bots niet merken dat ze geblokkeerd zijn.
      console.warn('Inzending geblokkeerd (spam-bescherming).');
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const webhookUrl = 'https://automation.linkedup.online/webhook/488010b6-178a-490a-9f1a-b218669cf39f';

      // Haal een eventueel eerder gemaakte marktscan op zodat we die kunnen meesturen
      let marketScan = null;
      try {
        const stored = localStorage.getItem('linkedup_market_scan');
        if (stored) {
          marketScan = JSON.parse(stored);
        }
      } catch (storageErr) {
        console.error('Kon opgeslagen scan niet lezen:', storageErr);
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_form',
          timestamp: new Date().toISOString(),
          ...formData,
          marketScan
        })
      });

      if (response.ok) {
        trackConversion('contact_form_submission');
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', company: '', phone: '' });
        // Scan is nu meegestuurd, dus we kunnen hem uit de browser verwijderen
        localStorage.removeItem('linkedup_market_scan');
        setTimeout(() => setSubmitSuccess(false), 5000);
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

  const resetForm = () => {
    setSubmitSuccess(false);
    setFormData({ name: '', email: '', company: '', phone: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
           <h2 className="text-5xl font-black text-slate-900 mb-6">Plan je gratis strategiesessie.</h2>
           <p className="text-xl text-slate-600">
             Kies direct een moment in de agenda, of neem contact op via telefoon, mail of het formulier.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
           <a
             href={`tel:${contactInfo.phoneHref}`}
             className="group bg-brand-gray p-8 rounded-2xl flex items-center gap-6 hover:bg-brand-yellow transition-colors"
           >
             <div className="bg-brand-yellow group-hover:bg-slate-900 p-4 rounded-full transition-colors">
               <Phone size={28} className="text-slate-900 group-hover:text-brand-yellow transition-colors" />
             </div>
             <div>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Bel ons</p>
               <p className="text-xl font-black text-slate-900">{contactInfo.phone}</p>
             </div>
           </a>
           <a
             href={`mailto:${contactInfo.email}`}
             className="group bg-brand-gray p-8 rounded-2xl flex items-center gap-6 hover:bg-brand-yellow transition-colors"
           >
             <div className="bg-brand-yellow group-hover:bg-slate-900 p-4 rounded-full transition-colors">
               <Mail size={28} className="text-slate-900 group-hover:text-brand-yellow transition-colors" />
             </div>
             <div>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Mail ons</p>
               <p className="text-xl font-black text-slate-900 break-all">{contactInfo.email}</p>
             </div>
           </a>
        </div>

        {/* Calendly agenda als hoofdactie */}
        <div className="mb-12">
           <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Plan direct een gesprek</h3>
              <p className="text-slate-600">Kies hieronder een moment dat jou uitkomt. Eén klik, direct geregeld.</p>
           </div>
           <CalendlyEmbed url={CALENDLY_URL_GENERAL} />
        </div>

        <div className="flex items-center gap-6 mb-12">
           <div className="flex-grow h-px bg-slate-200"></div>
           <p className="text-slate-500 font-bold uppercase text-sm tracking-wider whitespace-nowrap">
             Of stuur een bericht via het formulier
           </p>
           <div className="flex-grow h-px bg-slate-200"></div>
        </div>

        <div className="bg-brand-gray p-8 md:p-12 rounded-[3rem] shadow-sm">
           {submitSuccess ? (
              <div className="text-center py-12">
                 <div className="flex justify-center mb-6">
                    <div className="bg-brand-yellow p-4 rounded-full">
                       <Check size={48} className="text-slate-900" strokeWidth={3} />
                    </div>
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 mb-4">Bedankt!</h3>
                 <p className="text-xl text-slate-600">
                    We hebben je aanvraag ontvangen en nemen snel contact op.
                 </p>
              </div>
           ) : submitError ? (
              <div className="text-center py-12">
                 <h3 className="text-2xl font-black text-slate-900 mb-4">Oeps!</h3>
                 <p className="text-lg text-slate-600 mb-8">
                    Er is iets misgegaan. Probeer het later opnieuw of neem direct contact op.
                 </p>
                 <button
                    onClick={() => setSubmitError(false)}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all"
                 >
                    Terug naar formulier
                 </button>
              </div>
           ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-6">
                    <div>
                       <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Naam</label>
                       <input
                         type="text"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         placeholder="Je naam"
                         className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow focus:ring-0 transition-colors"
                         required
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Bedrijf</label>
                       <input
                         type="text"
                         name="company"
                         value={formData.company}
                         onChange={handleChange}
                         placeholder="Bedrijfsnaam"
                         className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow focus:ring-0 transition-colors"
                         required
                       />
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div>
                       <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">E-mail</label>
                       <input
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="naam@bedrijf.nl"
                         className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow focus:ring-0 transition-colors"
                         required
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Telefoon</label>
                       <input
                         type="tel"
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder="085-0045749"
                         className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow focus:ring-0 transition-colors"
                       />
                    </div>
                 </div>

                 {/* Honeypot-veld: onzichtbaar voor mensen, bots vullen dit vaak wel in */}
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

                 <div className="md:col-span-2 pt-4">
                    <button
                       type="submit"
                       disabled={isSubmitting}
                       className="w-full bg-slate-900 text-white font-bold text-xl py-5 rounded-full hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       {isSubmitting ? 'Versturen...' : 'Aanvraag versturen'} <ArrowRight />
                    </button>
                    <p className="text-center text-slate-500 text-sm mt-6">
                       Wij respecteren je privacy. Geen spam, beloofd.
                    </p>
                 </div>
              </form>
           )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
