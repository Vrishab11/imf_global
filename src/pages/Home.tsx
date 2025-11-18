import HeroSection from '../components/Hero'

const Home = () => {
  return (
    <div id='top' className="overflow-x-hidden">
      <HeroSection />

      <section
        id="about"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 bg-white"
      >
        <div className="justify-center hidden lg:flex mr-40 mt-16 ml-40">
          <img
            src="/images/graduation.jpg"
            alt="Graduation"
            className="rounded-xl shadow-lg w-[90%] max-w-[300px] object-cover"
          />
        </div>

        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-6 uppercase">
            About Company
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className='mb-5 mt-2 text-black text-xl md:text-3xl font-bold'>
              Achieve Your Dream Of Studying Abroad With Expert Guidance
            </p>
            <p className="text-gray-800 leading-relaxed text-base md:text-2xl md:mb-8">
              Welcome to IMF Global Horizons, your trusted partner in international education and migration services...
              With a team of experienced counselors and a proven track record of successful student placements,
              we ensure a <span className="font-bold text-black">hassle-free and transparent</span> process.
              From selecting the right university to settling into your new home abroad, we make your journey smooth and stress-free.
            </p>
          </div>
        </div>

      </section>


      {/* Services Section */}
      {/* <section id="services" className="scroll-mt-24 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive study abroad support and guidance for your success.
          </p>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section id="gallery" className="scroll-mt-24 py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            View our success stories and memorable moments with students worldwide.
          </p>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="scroll-mt-24 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for expert guidance on your study abroad journey.
          </p>
        </div>
      </section> */}
    </div>
  )
}

export default Home
