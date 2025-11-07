import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 50);
      setIsSticky(scrollPosition > heroHeight - 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Header Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <ul className="flex flex-wrap items-center gap-4">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <a href="mailto:info@imfglobal.com" className="hover:text-yellow-500 transition">info@imfglobal.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="hidden md:inline">IMF Global Horizons, Pallath Square, Kalamassery Rd, Ernakulam</span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a href="https://www.facebook.com" className="hover:text-yellow-500 transition">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com" className="hover:text-yellow-500 transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-yellow-500 transition">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isSticky ? 'bg-white shadow-lg' : isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" onClick={() => navigate('/')} className="text-2xl font-bold text-gray-900">
                <img src="/logo/IMF-logo.png" alt="" width={130}/>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => navigate(link.href)}
                  className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-600 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone:</p>
                  <div className='flex flex-col'>
                    <a href="tel:+917034111687" className="text-sm font-semibold text-gray-900 hover:text-yellow-600">
                      +91 7034111687
                    </a>
                    <a href="tel:+917034111687" className="text-sm font-semibold text-gray-900 hover:text-yellow-600">
                      +91 7034111688
                    </a>
                  </div>
                </div>
              </div>
              
              <a
                href="/contact"
                onClick={() => navigate('/contact')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-yellow-600 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="container mx-auto px-4 py-4 space-y-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => navigate(link.href)}
                className="block text-gray-700 hover:text-yellow-600 font-medium py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <nav>
            <div className="pt-4 border-t">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-yellow-600" />
                <a href="tel:+917034111687" className="text-gray-900 font-semibold">
                  +91 7034111687
                </a>
                <a href="tel:+917034111687" className="text-gray-900 font-semibold">
                  +91 7034111688
                </a>
              </div>
              
              <a
                href="/contact"
                onClick={() => navigate('/contact')}
                className="block text-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-medium transition"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;