import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import SEO from '../components/SEO';
import { posts } from '../data/posts';

const Kennisbank: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <SEO
        title="Kennisbank - Artikelen over leadgeneratie voor recruitment | LinkedUp"
        description="Praktische artikelen over leadgeneratie voor recruitment agencies: opdrachtgevers vinden, kosten, koude acquisitie en no cure no pay."
        path="/kennisbank"
      />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Kennisbank.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Praktische artikelen over leadgeneratie voor recruitment agencies. Geen theorie, maar wat werkt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/kennisbank/${post.slug}`}
              className="bg-brand-gray rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <p className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">{post.category}</p>
              <h2 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{post.title}</h2>
              <p className="text-slate-600 mb-8 flex-1 line-clamp-3">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {Math.max(1, Math.round(post.content.map((b: any) => 'text' in b ? b.text : (b.items || []).join(' ')).join(' ').split(/\s+/).length / 200))} min</span>
              </div>
              <span className="text-slate-900 font-bold flex items-center gap-2 border-b-2 border-brand-yellow pb-1 self-start">
                Lees artikel <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kennisbank;
