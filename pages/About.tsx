import React from 'react';
import { ArrowRight, Trophy, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9]">
                   Wij zijn<br/>LinkedUp.
                </h1>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                   Wij geloven dat recruitment agencies het beste zijn in één ding: <strong>de perfecte match maken</strong>. Maar te vaak gaat kostbare tijd verloren aan koude acquisitie en eindeloos zoeken naar kandidaten.
                </p>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                   Daarom hebben wij LinkedUp opgericht. Wij zijn jouw externe motor voor business development en sourcing. Zodat jij kunt doen waar je goed in bent.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" className="rounded-2xl mt-12 shadow-xl" alt="Office vibe" />
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-xl" alt="Meeting" />
             </div>
        </div>

        {/* Team */}
        <div className="mb-24">
            <h2 className="text-4xl font-black mb-8 text-slate-900">Maak kennis met ons team.</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-slate-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Team member</h3>
                    <p className="text-slate-600 mb-4">Functie</p>
                    <div className="w-12 h-1 bg-brand-yellow mx-auto"></div>
                </div>
                <div className="text-center">
                    <div className="bg-slate-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Team member</h3>
                    <p className="text-slate-600 mb-4">Functie</p>
                    <div className="w-12 h-1 bg-brand-yellow mx-auto"></div>
                </div>
                <div className="text-center">
                    <div className="bg-slate-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Team member</h3>
                    <p className="text-slate-600 mb-4">Functie</p>
                    <div className="w-12 h-1 bg-brand-yellow mx-auto"></div>
                </div>
            </div>
        </div>

        {/* Values */}
        <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black mb-16 text-center">Onze kernwaarden.</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900">
                           <Trophy size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Resultaatgericht</h3>
                        <p className="text-slate-400 leading-relaxed">Wij meten ons succes aan jouw succes. Geen vage beloftes, maar leads en kandidaten.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900">
                           <Zap size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Snelheid</h3>
                        <p className="text-slate-400 leading-relaxed">De markt wacht niet. Wij schakelen snel en zorgen voor directe impact op je pipeline.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900">
                           <Heart size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Partnership</h3>
                        <p className="text-slate-400 leading-relaxed">Wij zijn geen leverancier, maar een partner. We denken mee over de lange termijn.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
