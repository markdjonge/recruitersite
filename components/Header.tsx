import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  // Helper to check active state roughly
  const isActive = (path: string) => location.pathname === path ? 'text-brand-yellow' : 'text-slate-900 hover:text-brand-yellow';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo - LinkedUp Custom SVG */}
        <Link to="/" className="flex items-center gap-1 group select-none" onClick={closeMenu}>
            <div className="relative flex items-center">
              <span className="text-3xl font-black text-slate-900 tracking-tighter">Linked</span>
              <div className="relative">
                <span className="text-3xl font-black text-brand-yellow tracking-tighter group-hover:brightness-110 transition-all">Up</span>
                <svg className="absolute -top-1 -right-4 w-5 h-5 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/diensten" className={`text-base font-bold transition-colors ${isActive('/diensten')}`}>Onze diensten</Link>
          <Link to="/cases" className={`text-base font-bold transition-colors ${isActive('/cases')}`}>Cases</Link>
          <Link to="/over-ons" className={`text-base font-bold transition-colors ${isActive('/over-ons')}`}>Over ons</Link>
        </nav>

        {/*{/* Right Side - Phone & CTA */}
        <div className="hidden md:flex items-center gap-6">
           <a href="tel:0887624010" className="text-slate-900 font-bold hover:underline decoration-brand-yellow decoration-2 underline-offset-4 hidden xl:block">
             020 – 123 45 67
           </a>
           <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
             Contact opnemen
           </Link>
        </div> */}

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[80px] left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-6 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <Link to="/diensten" className="text-xl font-bold text-slate-900" onClick={closeMenu}>Onze diensten</Link>
          <Link to="/cases" className="text-xl font-bold text-slate-900" onClick={closeMenu}>Cases</Link>
          <Link to="/over-ons" className="text-xl font-bold text-slate-900" onClick={closeMenu}>Over ons</Link>
          <Link to="/contact" className="bg-brand-yellow text-slate-900 text-center py-4 rounded-full font-bold mt-4" onClick={closeMenu}>
             Contact opnemen
           </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
