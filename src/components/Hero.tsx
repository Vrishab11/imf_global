import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="bg-[url('/images/mobile_hero.jpg')] md:bg-[url('/images/night.jpg')] bg-cover bg-center relative min-h-[85vh] md:min-h-screen flex items-center justify-start md:justify-center overflow-hidden lg:pl-14"
      style={{
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-900/50 to-transparent"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10 w-full">
        <div className="max-w-4xl w-full pl-0 sm:pl-4 md:pl-0">
          {/* Subtitle Badge */}
          <div
            className={`inline-block mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
              }`}
          >
            <span className="bg-yellow-600 text-slate-900 px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg">
              Your Most Trusted Partners
            </span>
          </div>

          {/* Main Heading with Staggered Animation */}
          <h1 className="text-white mb-4 sm:mb-6">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-32'
                }`}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
                Beyond Borders,
              </span>
            </div>
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-32'
                }`}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
                Towards Brighter
              </span>
            </div>
            <div
              className={`transition-all duration-1000 delay-700 ${isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-32'
                }`}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
                Futures.
              </span>
            </div>
          </h1>

          {/* Description */}
          <p
            className={`text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-900 drop-shadow-md ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
              }`}
          >
            Step into a world of opportunities with expert guidance, seamless university applications, and personalized support for your study abroad journey
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-1100 ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
              }`}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              Learn More
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`flex absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white text-sm drop-shadow-lg">Scroll Down</span>
          <ChevronRight className="w-5 h-5 text-yellow-600 rotate-90 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;