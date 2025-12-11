import React from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-1 mb-6 select-none">
                <span className="text-2xl font-black text-white tracking-tighter">Linked</span>
                <div className="relative">
                  <span className="text-2xl font-black text-brand-yellow tracking-tighter">Up</span>
                  <svg className="absolute -top-1 -right-3 w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              De partner voor recruitmentbureaus die willen groeien. Datagedreven leadgeneratie met focus op resultaat.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-yellow mb-6 uppercase tracking-wider text-sm">Diensten</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li><Link to="/diensten" className="hover:text-white transition-colors">Leadgeneratie</Link></li>
              <li><Link to="/diensten" className="hover:text-white transition-colors">Sourcing</Link></li>
              <li><Link to="/diensten" className="hover:text-white transition-colors">Automation & AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-yellow mb-6 uppercase tracking-wider text-sm">Over ons</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li><Link to="/cases" className="hover:text-white transition-colors">Cases</Link></li>
              <li><Link to="/over-ons" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-yellow mb-6 uppercase tracking-wider text-sm">Socials</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/90763893/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-yellow hover:text-slate-900 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="py-8 grid md:grid-cols-2 gap-8 border-b border-slate-800 mb-8">
          <div>
            <h4 className="font-bold text-brand-yellow mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300 font-medium">
              <p>
                LinkedUp<br />
                Meidoornpad 42<br />
                9713NP Groningen
              </p>
              <p>
                <a href="mailto:info@linkedup.online" className="hover:text-white transition-colors">info@linkedup.online</a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-brand-yellow mb-4 uppercase tracking-wider text-sm">Bedrijfsgegevens</h4>
            <p className="text-sm text-slate-300 font-medium">KvK: 89715748</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} LinkedUp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
