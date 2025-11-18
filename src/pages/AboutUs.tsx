import Statistics from "../components/Statistics"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[url('/images/about_us.jpg')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <section
        id="about"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 bg-white"
      >
        <div className="justify-center hidden lg:flex mr-40 mt-16 ml-40">
          <img
            src="/images/graduation.jpg"
            alt="Graduation"
            className="rounded-xl shadow-lg w-[90%] max-w-[350px] h-[500px] object-cover"
          />
        </div>

        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-6 uppercase">
            About Company
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className='mb-5 mt-2 text-black text-xl md:text-2xl font-bold'>
              Achieve Your Dream Of Studying Abroad With Expert Guidance
            </p>
            <p className="text-gray-800 leading-relaxed text-base md:text-l md:mb-8">
              At IMF global horizons we are passionate about helping students achieve their dream of studying abroad. With years of experience in international education, we provide expert guidance, personalized counseling, and end-to-end support to make your journey seamless.
              From university selection to visa assistance and pre-departure preparation, we ensure that every step of your study abroad process is smooth and stress-free. Our mission is to empower students with the right opportunities, resources, and support to build a successful global career.
            </p>
          </div>
          <Statistics />
        </div>
      </section>
      <section
        id="why-choose-us"
        className="flex flex-col lg:flex-row items-center justify-center gap-12 scroll-mt-24 py-16 bg-white"
      >
        {/* Left Column: Text & Features */}
        <div className="flex-1 flex flex-col px-6 lg:pl-20">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-4 uppercase">
            Why Choose Us
          </h2>
          <div className="max-w-xl">
            <p className="mb-6 text-gray-800 text-lg">
              We are committed to making your study abroad journey smooth, stress-free, and successful. With our expert guidance and personalized approach, we ensure you receive the best opportunities to study at top universities worldwide.
            </p>
            {/* Features List */}
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="shrink-0 border-2 border-yellow-600 rounded-md w-2 h-2 mr-4 mt-3"></div>
                <div>
                  <span className="text-yellow-500 font-bold text-xl">Expert Guidance:</span>
                  <p className="text-gray-700">Our founders and team have in-depth industry knowledge and experience.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 border-2 border-yellow-600 rounded-md w-2 h-2 mr-4 mt-3"></div>
                <div>
                  <span className="text-yellow-500 font-bold text-xl">Personalized Approach:</span>
                  <p className="text-gray-700">We provide customized solutions tailored to your academic and career goals.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="shrink-0 border-2 border-yellow-600 rounded-md w-2 h-2 mr-4 mt-3"></div>
                <div>
                  <span className="text-yellow-500 font-bold text-xl">Strong Global Network:</span>
                  <p className="text-gray-700">We collaborate with top universities, employers, and partners worldwide.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="hidden flex-1 md:flex flex-col lg:flex-row items-center justify-center gap-6 lg:pr-20">
          <div className="w-[340px] h-[410px] mb-6 lg:mb-0 relative">
            <img src="/images/graduation.jpg" alt="Graduation" className="w-full h-full rounded-xl object-cover shadow-lg" />
            <div className="absolute w-[340px] bottom-0 bg-yellow-600 bg-opacity-90 text-white font-bold text-xl align-middle justify-center px-6 py-4 rounded-b-xl">
              5000+ Trusted Customers
            </div>
          </div>
          <div className="w-[220px] h-[260px] hidden lg:block">
            <img src="/images/services.jpg" alt="Campus Walk" className="w-full h-full rounded-xl object-cover shadow" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs
