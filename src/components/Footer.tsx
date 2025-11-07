import { Facebook, Instagram, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    'study abroad counseling',
    'university application process',
    'Pre-departure Guidance',
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-100 pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="mb-4">
              <img 
                src="/logo/IMF-logo.png" 
                alt="IMF Global Horizons" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your journey to success begins with the right guidance. Dream big, explore beyond, and achieve more
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com" 
                className="w-10 h-10 rounded-full bg-white hover:bg-yellow-600 flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com" 
                className="w-10 h-10 rounded-full bg-white hover:bg-yellow-600 flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white hover:bg-yellow-600 flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <Globe className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-gray-900 font-bold text-lg mb-4">Services</h5>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="/services" 
                    className="text-gray-600 hover:text-yellow-600 transition-colors text-sm flex items-start"
                  >
                    <span className="text-yellow-600 mr-2">□</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-gray-900 font-bold text-lg mb-4">Quick Link</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-yellow-600 transition-colors text-sm flex items-start"
                  >
                    <span className="text-yellow-600 mr-2">□</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h5 className="text-gray-900 font-bold text-lg mb-4">Address:</h5>
            <div className="space-y-4 flex align-middle">
              <MapPin className="w-12 h-12 text-yellow-600" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Building No. 5/257A8, Basement Floor, Pallath Square, Kalamassery P.O, Ernakulam
              </p>
              <div className="relative">
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 justify-items-center">
          <div className="flex flex-col md:flex-row justify-between items-right gap-4">
            <p className="text-gray-600 text-sm">
              copyright©2025 designed by empire ae
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/918129648612"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;