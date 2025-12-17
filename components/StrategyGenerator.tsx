import React, { useState } from 'react';
import { generateLeadStrategy, StrategyResult } from '../services/geminiService';
import { Loader2, Search, Briefcase, Users, CheckCircle2, BarChart3, ExternalLink } from 'lucide-react';
import { trackEvent, trackConversion } from '../services/ga4Service';

const StrategyGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateLeadStrategy(niche);
      setResult(data);
      trackConversion('market_scan_generated', 1);

      // Send to webhook (optional)
      const webhookUrl = 'https://automation.linkedup.online/webhook/488010b6-178a-490a-9f1a-b218669cf39f';
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'market_scan',
              timestamp: new Date().toISOString(),
              niche: niche,
              result: data
            })
          });
        } catch (webhookErr) {
          console.error('Webhook error:', webhookErr);
        }
      }
    } catch (err) {
      setError('Analyse mislukt. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="market-scan" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Graphic */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow text-slate-900 text-sm font-bold mb-8">
                <Search size={16} />
                <span>Gratis Marktscan</span>
              </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Test onze marktkennis.
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Voer uw specialisme in. Onze AI genereert direct een schatting van het <strong>marktvolume (aantal vacatures)</strong>, de type bedrijven die wij benaderen en de sourcing kanalen die wij inzetten.
            </p>

            <form onSubmit={handleGenerate} className="space-y-4">
               <div>
                  <label className="text-sm font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">Uw Specialisme / Niche</label>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      placeholder="Bijv. Solar Monteurs of Legal Interim..."
                      className="flex-1 bg-white/10 border border-white/20 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent placeholder-slate-500 transition-all text-lg"
                    />
                    <button
                      type="submit"
                      disabled={loading || !niche.trim()}
                      className="bg-brand-yellow hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px]"
                    >
                      {loading ? <Loader2 className="animate-spin" size={24} /> : 'Scan Markt'}
                    </button>
                  </div>
               </div>
            </form>
            {error && <p className="text-red-400 mt-4 font-medium">{error}</p>}
          </div>

          <div className="relative">
            {/* Placeholder state */}
            {!result && !loading && (
              <div className="h-full border-2 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center p-10 text-center min-h-[400px]">
                 <BarChart3 className="text-slate-700 mb-4" size={48} />
                 <p className="text-slate-500 font-medium max-w-xs">Vul uw niche in. Wij tonen direct hoeveel openstaande vacatures er nu in de markt zijn.</p>
              </div>
            )}
            
            {/* Loading state */}
            {loading && (
               <div className="h-full bg-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[400px]">
                 <Loader2 className="animate-spin text-brand-yellow mb-4" size={48} />
                 <p className="text-white font-bold text-xl">Markt volume berekenen...</p>
                 <div className="space-y-2 mt-4 opacity-70">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={14} className="text-brand-yellow" />
                        <span>Scannen van vacaturebanken...</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={14} className="text-brand-yellow" />
                        <span>Analyseren van hiring managers in {niche}...</span>
                    </div>
                 </div>
               </div>
            )}

            {/* Results state */}
            {result && (
              <div className="bg-white rounded-3xl p-8 text-slate-900 animate-slide-up shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <div className="w-32 h-32 bg-brand-yellow rounded-full blur-2xl"></div>
                </div>

                <div className="mb-6 border-b border-slate-100 pb-6 relative z-10">
                  <p className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-2">Markt Analyse</p>
                  <h3 className="text-2xl font-black mb-1">{result.headline}</h3>
                </div>

                {/* Vacancy Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                    {result.vacancyStats?.map((stat, i) => (
                        <div key={i} className="bg-slate-900 text-white p-3 rounded-lg text-center flex flex-col items-center justify-center shadow-lg">
                            <span className="text-xs text-slate-400 font-bold uppercase mb-1">{stat.platform}</span>
                            <span className="text-lg md:text-xl font-black text-brand-yellow">{stat.count}</span>
                            <span className="text-[10px] text-slate-500">Vacatures</span>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
                   <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-3 text-slate-900">
                        <Briefcase size={18} className="text-brand-yellow" />
                        <h4 className="font-bold text-sm uppercase">Potentiële klanten:</h4>
                      </div>
                      <ul className="space-y-3">
                        {result.clients.map((s, i) => (
                          <li key={i} className="text-sm font-medium text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0 flex items-start gap-2">
                             <span className="text-brand-yellow font-bold">•</span>
                             {s}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-3 text-slate-900">
                        <Users size={18} className="text-brand-yellow" />
                        <h4 className="font-bold text-sm uppercase">Sourcing kanalen:</h4>
                      </div>
                      <ul className="space-y-3">
                        {result.candidates.map((s, i) => (
                          <li key={i} className="text-sm font-medium text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0 flex items-start gap-2">
                             <span className="text-brand-yellow font-bold">•</span>
                             {s}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
                   <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-sm uppercase text-slate-900 mb-4">Hiring Managers - Kleine Bedrijven</h4>
                      <ul className="space-y-3">
                        {result.hiringManagers?.smallBusinesses?.map((s, i) => (
                          <li key={i} className="text-sm font-medium text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0 flex items-start gap-2">
                             <span className="text-brand-yellow font-bold">•</span>
                             {s}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 italic">1-50 personeelsleden</p>
                   </div>
                   <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-sm uppercase text-slate-900 mb-4">Hiring Managers - Grote Bedrijven</h4>
                      <ul className="space-y-3">
                        {result.hiringManagers?.largeCompanies?.map((s, i) => (
                          <li key={i} className="text-sm font-medium text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0 flex items-start gap-2">
                             <span className="text-brand-yellow font-bold">•</span>
                             {s}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 italic">100+ personeelsleden</p>
                   </div>
                </div>

                <div className="bg-brand-gray p-6 rounded-2xl border border-slate-200 relative z-10">
                   <p className="text-xs font-bold text-slate-400 uppercase mb-2">
                     Advies
                   </p>
                   <p className="text-slate-900 font-bold leading-relaxed italic text-sm">
                     "{result.opportunity}"
                   </p>
                   <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col justify-between items-center gap-4">
                      <a href="#contact" onClick={() => trackEvent('market_scan_cta_click')} className="w-full text-center bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                        Help mij deze business binnenhalen <ExternalLink size={16} />
                      </a>
                      <p className="text-xs text-slate-400 text-center">
                          *Cijfers zijn een real-time markt indicatie.
                      </p>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyGenerator;
