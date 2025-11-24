import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bedankt! We nemen contact op.');
    setFormData({ name: '', email: '', company: '', phone: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
           <h2 className="text-5xl font-black text-slate-900 mb-6">Start uw groei.</h2>
           <p className="text-xl text-slate-600">
             Klaar om de volgende stap te zetten? Laat uw gegevens achter voor een vrijblijvende strategiesessie.
           </p>
        </div>

        <div className="bg-brand-gray p-8 md:p-12 rounded-[3rem] shadow-sm">
           <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Naam</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Uw naam"
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
                 <button type="submit" className="w-full bg-slate-900 text-white font-bold text-xl py-5 rounded-full hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3">
                   Aanvraag versturen <ArrowRight />
                 </button>
                 <p className="text-center text-slate-500 text-sm mt-6">
                    Wij respecteren uw privacy. Geen spam, beloofd.
                 </p>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;