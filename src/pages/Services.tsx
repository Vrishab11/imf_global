

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[url('/images/services.jpg')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="text-7xl font-bold text-white px-12 py-4 z-10 rounded">SERVICES</h1>
      </div>
      <div className="flex align-middle justify-center pt-10">
        <h2 className="text-gray-800 tracking-wide text-3xl font-semibold mb-6 uppercase text-center">
          Comprehensive Study Abroad Support & Guidence
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-1 md:pl-20 pr-20 pb-10 pt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pl-3 md:pl-10 pb-5">
          <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
            <img src="/images/1.jpg" alt="" className="w-full h-72 object-cover rounded-t-2xl" />
            <div className="w-full text-center mt-2 pb-5">
              <h4 className="font-medium text-xl">Study Abroad Consultation</h4>
              <p className="text-gray-700">Guidance on choosing the right course, university, and country.</p>
            </div>
          </div>
          <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
            <img src="/images/2.jpg" alt="" className="w-full h-72 object-cover rounded-t-2xl" />
            <div className="w-full text-center mt-2 pb-5">
              <h4 className="font-medium text-xl">University Applications & Admissions</h4>
              <p className="text-gray-700">Step-by-step support for applying to top institutions worldwide.</p>
            </div>
          </div>
          <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
            <img src="/images/3.jpg" alt="" className="w-full h-72 object-cover rounded-t-2xl" />
            <div className="w-full text-center mt-2 pb-5">
              <h4 className="font-medium text-xl">Pre-Departure & Post-Arrival Support</h4>
              <p className="text-gray-700">Ensuring a hassle-free transition to studying or working abroad..</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pl-25 md:pl-10">
          <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
            <img src="/images/4.jpg" alt="" className="w-full h-72 object-cover rounded-t-2xl" />
            <div className="w-full text-center mt-2 pb-5">
              <h4 className="font-medium text-xl">Work Visa Assistance</h4>
              <p className="text-gray-700">Helping professionals secure job placements and necessary work permits.</p>
            </div>
          </div>
          <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
            <img src="/images/5.jpg" alt="" className="w-full h-72 object-cover rounded-t-2xl" />
            <div className="w-full text-center mt-2 pb-5">
              <h4 className="font-medium text-xl">Visa Processing & Documentation</h4>
              <p className="text-gray-700">Expert assistance to ensure a smooth visa approval process.</p>
            </div>
          </div>
          <div className="w-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
            <img src="/images/6.jpg" alt="" className="w-full h-72 object-cover rounded-t-2xl" />
            <div className="w-full text-center mt-2 pb-5">
              <h4 className="font-medium text-xl">Scholarship & Financial Aid Guidance</h4>
              <p className="text-gray-700">Helping students explore funding options for their education.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services