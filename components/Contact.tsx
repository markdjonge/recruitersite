import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const webhookUrl = 'https://automation.linkedup.online/webhook/488010b6-178a-490a-9f1a-b218669cf39f';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_form',
          timestamp: new Date().toISOString(),
          ...formData
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', company: '', phone: '' });
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
           <h2 className="text-5xl font-black text-slate-900 mb-6">Start met groeien.</h2>
           <p className="text-xl text-slate-600">
             Klaar om de volgende stap te zetten? Laat je gegevens achter voor een vrijblijvende strategiesessie.
           </p>
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
                         placeholder="06 12345678"
                         className="w-full bg-white border-2 border-slate-200 p-4 rounded-xl font-medium focus:outline-none focus:border-brand-yellow focus:ring-0 transition-colors"
                       />
                    </div>
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
