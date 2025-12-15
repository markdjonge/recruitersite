import React from 'react';
import Contact from '../components/Contact';
import { contactInfo } from '../data/contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="py-12 bg-white hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-gray p-6 rounded-xl">
              <p className="text-sm font-bold text-slate-900 uppercase mb-3 tracking-wider">Adres</p>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                {contactInfo.company}<br />
                {contactInfo.address.street}<br />
                {contactInfo.address.postalCode} {contactInfo.address.city}
              </p>
            </div>
            <div className="bg-brand-gray p-6 rounded-xl">
              <p className="text-sm font-bold text-slate-900 uppercase mb-3 tracking-wider">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-slate-900 hover:text-brand-yellow font-bold text-sm transition-colors break-all">
                {contactInfo.email}
              </a>
            </div>
            <div className="bg-brand-gray p-6 rounded-xl">
              <p className="text-sm font-bold text-slate-900 uppercase mb-3 tracking-wider">Bedrijfsgegevens</p>
              <p className="text-slate-600 font-medium text-sm">
                KvK: {contactInfo.kvk}
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
