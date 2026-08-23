import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { companyDetails } from '../../data/siteContent';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = ['home', 'about', 'products', 'distribution', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About Us', path: '#about', id: 'about' },
    { name: 'Products', path: '#products', id: 'products' },
    { name: 'Distribution', path: '#distribution', id: 'distribution' },
    { name: 'Contact Us', path: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-[#f4efe6]/95 backdrop-blur-md shadow-sm border-[#e8dcc4] py-2" : "bg-[#f4efe6] border-transparent py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo-mark-clean.png" alt="Noor Al Amani Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
            <div className="flex flex-col justify-center">
              <img src="/logo-text-clean.png" alt="Noor Al Amani" className="h-6 md:h-8 object-contain origin-left" />
              <span className="text-[0.65rem] md:text-xs text-gray-600 font-semibold tracking-widest uppercase mt-0.5">Goods Wholesaler L.L.C</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={cn(
                  "font-medium text-lg transition-colors hover:text-primary",
                  activeSection === link.id ? "text-primary font-bold" : "text-gray-700"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${companyDetails.phone}`} className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors text-sm">
              <Phone className="w-4 h-4" />
              {companyDetails.phoneDisplay}
            </a>
          </div>

          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-[#f4efe6] z-40 md:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-neutral-100",
          isMobileMenuOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 border-transparent pointer-events-none"
        )}
      >
        <nav className="flex flex-col p-6 gap-6 text-lg bg-[#f4efe6] shadow-inner min-h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "font-medium transition-colors border-b border-neutral-100 pb-4 hover:text-primary",
                activeSection === link.id ? "text-primary font-bold border-primary" : "text-gray-700"
              )}
            >
              {link.name}
            </a>
          ))}
          <a href={`tel:${companyDetails.phone}`} className="flex items-center gap-3 text-primary font-semibold mt-4 bg-primary/5 p-4 rounded-lg">
            <Phone className="w-5 h-5 text-secondary" />
            {companyDetails.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
