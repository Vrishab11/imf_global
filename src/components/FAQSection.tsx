import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const faqs = [
  {
    question: "Which country is best for studying abroad?",
    answer:
      "The best country depends on your academic goals, budget, and career plans. Popular options include the USA, UK, Canada, Australia, and Germany, each offering excellent education and career opportunities.",
  },
  {
    question: "What are the requirements for a student visa?",
    answer:
      "The requirements vary by country but generally include an acceptance letter from a university, proof of funds, a valid passport, and language proficiency test scores (IELTS, TOEFL, etc.).",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Yes, many countries allow international students to work part-time while studying. The number of hours you can work depends on the country’s visa regulations.",
  },
  {
    question: "How much does it cost to study abroad?",
    answer:
      "The cost varies based on the country, university, and program. It includes tuition fees, living expenses, and travel costs. Scholarships and education loans are available to help manage expenses.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function openStatus(idx : any) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Left: Heading & Description */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-yellow-600 text-2xl font-bold mb-6 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-800 text-lg">
            We understand that studying abroad comes with many questions. To make your journey smoother, we’ve compiled answers to some of the most commonly asked questions about university applications, visas, financial aid, and more. If you need further assistance, our expert counselors are always here to help!
          </p>
        </div>

        {/* Right: FAQ List */}
        <div className="flex-1 flex flex-col gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`relative rounded-xl shadow-sm transition flex flex-col bg-white p-6 border border-transparent hover:border-yellow-500`}
                style={{
                  boxShadow: isOpen
                    ? "0 4px 32px 0 rgba(25,42,89,.06)"
                    : "0 2px 8px 0 rgba(25,42,89,.06)",
                }}
                onClick={() => openStatus(idx)}
              >
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    aria-label="Toggle FAQ"
                    className={`w-10 h-10 flex items-center justify-center border-2 rounded-full text-yellow-500 ${
                      isOpen ? "bg-white" : "bg-white"
                    } transition`}
                  >
                    {isOpen ? (
                      <FaCaretUp className="w-10 h-10 text-yellow-500" fill="currentColor" />
                    ) : (
                      <FaCaretDown className="w-10 h-10 text-yellow-500" />
                    )}
                  </button>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                    {isOpen && (
                      <p className="text-gray-500 text-lg">{faq.answer}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
