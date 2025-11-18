import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative bg-[url('/images/contact_us.jpg')] bg-center bg-cover flex items-center justify-center h-[350px]">
        {/* <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="text-7xl font-bold text-white px-12 py-4 z-10 rounded">Contact Us</h1> */}
      </div>
      
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">Get in Touch</h2>
          <p className="mb-8 text-gray-700 text-xl">
            Get in touch today and take your first step towards a brighter future with IMF Global Horizons!
          </p>

          <div className="mb-6 flex items-start gap-3">
            <AiOutlinePhone className="text-yellow-600 text-2xl mt-0.5" />
            <div>
              <span className="text-yellow-600 font-semibold block">Call For Inquiry</span>
              <div className="font-light text-xl text-gray-900 mt-1">
                +91-7034111687<br />
                +91-7034111688
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-3">
            <AiOutlineMail className="text-yellow-600 text-2xl mt-0.5" />
            <div>
              <span className="text-yellow-600 font-semibold block">Send Us Email</span>
              <div className="font-light text-xl text-gray-900 mt-1">
                <a href="mailto:info@imfglobalhorizons.com" className="hover:underline">
                  info@imfglobalhorizons.com
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-3">
            <AiOutlineEnvironment className="text-yellow-600 text-2xl mt-0.5" />
            <div>
              <span className="text-yellow-600 font-semibold block">Location</span>
              <div className="font-light text-xl text-gray-900 mt-1 leading-tight">
                IMF GLOBAL HORIZONS, Building No. 5/257A8,<br />
                Basement Floor, Pallath Square, FACT Kalamassery Rd,<br />
                Kalamassery P.O, Ernakulam - 683104
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Fill Up The Form</h2>
          <p className="mb-4 text-center text-lg text-gray-600">Your email address will not be published. Required fields are marked *</p>
          <form className="flex flex-col gap-1 md:gap-5">
            <div className="flex flex-col md:flex-row gap-1 md:gap-5">
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="flex-1 border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <input
                type="email"
                placeholder="Your Email*"
                required
                className="flex-1 border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <textarea
              placeholder="Write Your Message"
              rows={5}
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold px-8 py-3 rounded hover:bg-yellow-700 transition"
            >
              Send Us Messages
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;