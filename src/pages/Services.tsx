const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - eager load */}
      <div className="relative bg-[url('/images/services.webp')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="text-7xl font-bold text-white px-12 py-4 z-10 rounded">SERVICES</h1>
      </div>
      
      <div className="flex align-middle justify-center pt-10">
        <h2 className="text-gray-800 tracking-wide text-3xl font-semibold mb-6 uppercase text-center">
          Comprehensive Study Abroad Support & Guidance
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-1 md:pl-20 pr-20 pb-10 pt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pl-3 md:pl-10 pb-5">
          {[
            { src: "/images/1.webp", title: "Study Abroad Consultation", desc: "Guidance on choosing the right course, university, and country." },
            { src: "/images/2.webp", title: "University Applications & Admissions", desc: "Step-by-step support for applying to top institutions worldwide." },
            { src: "/images/3.webp", title: "Pre-Departure & Post-Arrival Support", desc: "Ensuring a hassle-free transition to studying or working abroad." }
          ].map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pl-3 md:pl-10">
          {[
            { src: "/images/4.webp", title: "Work Visa Assistance", desc: "Helping professionals secure job placements and necessary work permits." },
            { src: "/images/5.webp", title: "Visa Processing & Documentation", desc: "Expert assistance to ensure a smooth visa approval process." },
            { src: "/images/6.webp", title: "Scholarship & Financial Aid Guidance", desc: "Helping students explore funding options for their education." }
          ].map((item, i) => (
            <ServiceCard key={i + 3} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Extracted component (better for lazy loading + tree shaking)
const ServiceCard = ({ src, title, desc }: { src: string; title: string; desc: string }) => (
  <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
    <img 
      src={src} 
      alt={title} 
      className="w-full h-72 object-cover rounded-t-2xl" 
      loading="lazy"
      decoding="async"
    />
    <div className="w-full text-center mt-2 pb-5">
      <h4 className="font-medium text-xl">{title}</h4>
      <p className="text-gray-700">{desc}</p>
    </div>
  </div>
)

export default Services
