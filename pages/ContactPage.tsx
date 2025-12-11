import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wide">Adres</p>
              <p className="text-slate-900 font-medium leading-relaxed">
                LinkedUp<br />
                Meidoornpad 42<br />
                9713NP Groningen
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wide">Email</p>
              <a href="mailto:info@linkedup.online" className="text-slate-900 hover:text-brand-yellow font-bold transition-colors break-all">
                info@linkedup.online
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wide">Bedrijfsgegevens</p>
              <p className="text-slate-900 font-medium">
                KvK: 89715748
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
