import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 text-center px-6">
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-8 max-w-md">
        Deze pagina bestaat niet (meer). Waarschijnlijk een typefout in het adres of een verplaatste pagina.
      </p>
      <Link to="/" className="bg-brand-yellow text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors">
        Terug naar de homepage
      </Link>
    </div>
  );
};

export default NotFound;
