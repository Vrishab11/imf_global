import { ChevronRight } from 'lucide-react';

const Statistics = () => {
  return (
    <section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

      {/* Stat 1 */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#EAB308"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#EAB308"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${28 * 2 * Math.PI}`}
              strokeDashoffset={`${28 * 2 * Math.PI * (1 - 0.99)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-900">99%</span>
          </div>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold text-gray-900">
            Visa Approval<br />Rate
          </h3>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#EAB308"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#EAB308"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${28 * 2 * Math.PI}`}
              strokeDashoffset={`${28 * 2 * Math.PI * (1 - 0.98)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-900">98%</span>
          </div>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold text-gray-900">
            University<br />Acceptance Rate
          </h3>
        </div>
      </div>

    </div>

    {/* Contact Button */}
    <div className="flex justify-center mt-10">
      <a href="/contact"
        className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Contact Us
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </div>
</section>

  );
};

export default Statistics;