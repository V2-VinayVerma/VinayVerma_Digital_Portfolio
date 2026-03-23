import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[8000] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#020D1D]/80 backdrop-blur-xl border-b border-[#0C2A3F] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent pt-6 pb-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold font-mono-custom tracking-wider">
              <span className="text-[#00E5FF]">{'<'}</span>
              <span className="text-[#00E5FF]">VV</span>
              <span className="text-[#00E5FF]">{`/>`}</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`${
                    location.pathname === link.href 
                    ? 'border border-[#00E5FF]/50 bg-[#00E5FF]/30 text-[#00E5FF] px-4 py-2 rounded-lg' 
                    : 'text-[#8BA3B8] hover:text-white px-2 py-2'
                  } text-sm font-mono-custom font-semibold transition-all duration-300`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#00E5FF] hover:text-[#00BBD4] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#090d14]/95 backdrop-blur-md absolute w-full top-full left-0 border-b border-cyan-900/30">
          <div className="px-4 pt-4 pb-6 space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${
                  location.pathname === link.href 
                  ? 'text-[#00E5FF]' 
                  : 'text-[#8BA3B8] hover:text-[#00E5FF]'
                } block text-base font-mono-custom transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
