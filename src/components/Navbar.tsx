
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Resume', path: '/resume' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-standard",
        isScrolled 
          ? "backdrop-blur-md bg-brand-gray/80 border-b border-brand-purple/20" 
          : "bg-transparent"
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-heading font-bold text-foreground"
          >
            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">SAIRA </span>
            <span className="text-brand-purple">ATTA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "transition-standard font-medium relative py-2",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-purple after:origin-bottom-right after:transition-transform",
                  "hover:text-brand-purple hover:after:scale-x-100 hover:after:origin-bottom-left",
                  location.pathname === item.path 
                    ? "text-brand-purple after:scale-x-100" 
                    : "text-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-brand-purple transition-standard"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-lg bg-brand-gray/95 border-b border-brand-purple/20",
          mobileMenuOpen ? "max-h-[70vh]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 px-6 py-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg py-2 transition-standard",
                location.pathname === item.path 
                  ? "text-brand-purple font-medium" 
                  : "text-foreground hover:text-brand-purple"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
