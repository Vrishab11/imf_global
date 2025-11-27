import Statistics from "../components/Statistics"
import FAQSection from "../components/FAQSection";

import { FaGlobeAmericas } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { MdSentimentVerySatisfied } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <div className="relative bg-[url('/images/about_us.jpg')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0"></div>
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
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-2 uppercase">
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
        className="flex flex-col lg:flex-row items-center justify-center gap-12 scroll-mt-24 md:pr-30 bg-white"
      >
        <div className="flex flex-col px-5 md:px-10 lg:pl-20">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-4 uppercase">
            Why Choose Us
          </h2>
          <div className="max-w-xl">
            <p className="mb-6 text-gray-800 text-lg">
              We are committed to making your study abroad journey smooth, stress-free, and successful. With our expert guidance and personalized approach, we ensure you receive the best opportunities to study at top universities worldwide.
            </p>
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
      <section
        id="mission"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 bg-white"
      >
        <div className="justify-center hidden lg:flex mr-40 mt-16 ml-40">
          <img
            src="/faces/MIF3.jpg"
            alt="MIF"
            className="rounded-xl shadow-lg w-[90%] max-w-[650px] h-[400px] object-cover"
          />
        </div>

        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-2 uppercase">
            OUR MISSION
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className="text-gray-800 leading-relaxed text-base md:text-l md:mb-8">
              Our mission is to empower students and professionals with the right resources, guidance, and opportunities to pursue international education and career advancement. We believe in creating a future where talent knows no boundaries and where every individual can access quality education and global work opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-12 bg-white">
        <div className="w-[90vw] min-h-[200px] md:max-w-6xl md:min-h-[340px] rounded-2xl bg-yellow-600 flex flex-row justify-between items-stretch">

          <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 relative">
            <div className="mb-5">
              <div><FaGlobeAmericas size={40} color="white" /></div>
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">20+</div>
            <div className="text-[12px] md:text-2xl text-white font-medium">Countries</div>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-3/5 w-px bg-white/30"></div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 relative">
            <div className="mb-5">
              <div>< RiVisaFill size={50} color="white" /></div>
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">1000+</div>
            <div className="text-[12px] md:text-2xl text-white font-medium">universities</div>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-3/5 w-px bg-white/30"></div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
            <div className="mb-5">
              <div><MdSentimentVerySatisfied size={40} color="white" /></div>
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-[12px] md:text-2xl text-white font-medium">Customer Satisfaction</div>
          </div>
        </div>
      </section>
      <section
        id="imtiaz"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 md:pl-10 md:pr-30 bg-white"
      >
        <div className="justify-center hidden lg:flex mr-40 mt-16 ml-40">
          <img
            src="/faces/Imthi2.jpg"
            alt="MIF"
            className="rounded-xl shadow-lg w-[90%] max-w-[650px] h-[400px] object-cover"
          />
        </div>

        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-2 uppercase">
            Imtiaz Ismail
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className="text-black font-bold text-l mb-6">
              Chief Executive Officer (CEO)
            </p>
            <p className="text-gray-800 leading-relaxed text-base md:text-l md:mb-8">
              Our mission is to empower students and professionals with the right resources, guidance, and opportunities to pursue international education and career advancement. We believe in creating a future where talent knows no boundaries and where every individual can access quality education and global work opportunities.
            </p>
          </div>
        </div>
      </section>
      <section
        id="neethu"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 md:pl-40 md:pr-30 bg-white"
      >
        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-2 uppercase">
            Neethu Poulose
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className="text-black font-bold text-l mb-6">
              Chief Financial Officer (CFO)
            </p>
            <p className="text-gray-800 leading-relaxed text-base md:text-l md:mb-8">
              As Head of operations,my role is to ensure our plans move beyond the boardroom and into results-driven Action.Good today isn’t good enough tomorrow.
            </p>
          </div>
        </div>

        <div className="justify-center hidden lg:flex mr-40 mt-16 ml-40">
          <img
            src="/faces/Neethu5.jpg"
            alt="MIF"
            className="rounded-xl shadow-lg w-[90%] max-w-[650px] h-[400px] object-cover"
          />
        </div>
      </section>
      <section
        id="Francis"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 md:pl-30 md:pr-30 bg-white"
      >
        <div className="justify-center hidden lg:flex mr-30 mt-16 ml-20">
          <img
            src="/faces/Francis3.jpg"
            alt="MIF"
            className="rounded-xl shadow-lg w-[90%] max-w-[650px] h-[400px] object-cover"
          />
        </div>

        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-2 uppercase">
            Francis K Siby
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className="text-black font-bold text-l mb-6">
              Chief Marketing Officer (CMO)
            </p>
            <p className="text-gray-800 leading-relaxed text-base md:text-l md:mb-8">
              Leadership, to me, is about purpose, people, and progress. At IMF Global Horizons, we’re not just building a company — we’re creating a movement driven by vision, values, and the grace of God. Every step we take is towards empowering individuals to cross borders and reach their full potential.
            </p>
          </div>
        </div>
      </section>
      <section
        id="mohit"
        className="flex flex-col lg:flex-row items-center justify-center align-middle gap-12 scroll-mt-24 py-10 md:pl-40 md:pr-30 bg-white"
      >
        <div className="flex flex-col md:mt-16 px-5 md:pl-10 lg:pr-40">
          <h2 className="text-yellow-600 text-left tracking-wide text-2xl font-semibold mb-2 uppercase">
            Mohit Thomas
          </h2>
          <div className="max-w-xl mx-auto md:text-justify">
            <p className="text-black font-bold text-l mb-6">
              Chief Operating Officer (COO)
            </p>
            <p className="text-gray-800 leading-relaxed text-base md:text-l md:mb-8">
              At IMF Global Horizons, I believe leadership is not about holding a title but about taking responsibility. My approach combines strategic foresight with empathetic engagement, ensuring every decision aligns with our mission to empower global dreamers. We’re not just opening doors to opportunities abroad—we’re guiding lives through them. Success, to me, means building bridges that last and communities that thrive
            </p>
          </div>
        </div>

        <div className="justify-center hidden lg:flex mr-40 mt-16 ml-40">
          <img
            src="/faces/Mohit1.jpg"
            alt="MIF"
            className="rounded-xl shadow-lg w-[90%] max-w-[650px] h-[400px] object-cover"
          />
        </div>
      </section>
      <section
        id="team"
        className="flex flex-col items-center justify-center align-middle gap-12 scroll-mt-24 py-10  bg-white"
      >
        <div className="flex flex-col md:mt-16 px-5">
          <h2 className="text-yellow-600 text-center tracking-wide text-3xl font-semibold mb-2 uppercase">
            Our Team
          </h2>
          <p className="text-gray-800 leading-relaxed text-base md:text-l md:mt-6 text-justify md:w-3xl">
            At IMF Global Horizons, our strength comes from our people. Each member of our team brings a unique blend of expertise, passion, and vision—united by a deep commitment to guiding students and families toward international success. We believe in collaboration, integrity, and a hands-on approach that turns challenges into opportunities. Together, we’re more than advisors; we are mentors, problem-solvers, and advocates for every dreamer who walks through our doors. Every milestone we help achieve is a testament to our shared dedication and the strong, supportive community we’ve built.
          </p>
        </div>

        <div className="justify-center flex md:mr-40 mt-1 md:ml-40">
          <img
            src="/faces/Group6.jpg"
            alt="MIF"
            className="rounded-xl shadow-lg w-[90%] max-w-[650px] h-[400px] object-cover"
          />
        </div>
      </section>
      <section>
        <FAQSection />
      </section>
    </div>
  )
}

export default AboutUs
