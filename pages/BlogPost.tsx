import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import SEO from '../components/SEO';
import { posts, ContentBlock } from '../data/posts';
import { openCalendlyPopup } from '../services/calendlyService';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <h2 className="text-3xl font-bold mb-4">Artikel niet gevonden</h2>
        <Link to="/kennisbank" className="text-brand-yellow font-bold underline">Terug naar kennisbank</Link>
      </div>
    );
  }

    // Leestijd automatisch berekenen op basis van de werkelijke content (200 wpm)
  const allText = post.content.map((b) => ('text' in b ? b.text : b.items.join(' '))).join(' ');
  const wordCount = Math.round(allText.split(/\s+/).length);
  const minutes = Math.max(1, Math.round(wordCount / 200));

  const renderBlock = (block: ContentBlock, idx: number) => {
    switch (block.type) {
      case 'p':
        return <p key={idx} className="text-lg text-slate-600 leading-relaxed mb-6">{block.text}</p>;
      case 'h2':
        return <h2 key={idx} className="text-3xl font-black text-slate-900 mt-12 mb-5">{block.text}</h2>;
      case 'h3':
        return <h3 key={idx} className="text-2xl font-black text-slate-900 mt-10 mb-4">{block.text}</h3>;
      case 'ul':
        return (
          <ul key={idx} className="space-y-3 mb-8 bg-brand-gray rounded-2xl p-6">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                <span className="text-brand-yellow font-black mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={idx} className="border-l-4 border-brand-yellow pl-6 py-2 my-8">
            <p className="text-xl font-bold text-slate-900 italic">{block.text}</p>
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-20">
      <SEO
        title={`${post.title} | LinkedUp Kennisbank`}
        description={post.description}
        path={`/kennisbank/${post.slug}`}
      />
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "LinkedUp",
              "logo": {
                "@type": "ImageObject",
                "url": "https://linkedup.online/linkedup-logo.svg"
              }
            }
          })}
        </script>
      </Head>

      <article className="container mx-auto px-6 max-w-3xl">
        <Link to="/kennisbank" className="inline-flex items-center gap-2 text-slate-500 font-bold mb-10 hover:text-brand-yellow transition-colors">
          <ArrowLeft size={20} /> Alle artikelen
        </Link>

        <header className="mb-12">
          <p className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-4">{post.category}</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-5 text-slate-500 font-medium">
            <span className="flex items-center gap-2"><User size={16} /> {post.author}, {post.authorRole}</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {minutes} min leestijd</span>
          </div>
        </header>

        <div className="prose-like">
          {post.content.map(renderBlock)}
        </div>

        {/* CTA onder artikel */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Meer opdrachtgevers, zonder risico.</h2>
          <p className="text-slate-300 mb-6">
            Wij doen de leadgeneratie; jij voert de gesprekken. No cure no pay, eerste leads binnen 2 dagen.
          </p>
          <button
            onClick={() => openCalendlyPopup()}
            className="inline-flex items-center gap-2 bg-brand-yellow text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors"
          >
            Plan direct een gesprek <ArrowRight size={20} />
          </button>
          <p className="text-slate-400 text-sm mt-4">
            Liever geen afspraak? <Link to="/contact" className="underline hover:text-brand-yellow">Laat je gegevens achter via het formulier</Link>
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
