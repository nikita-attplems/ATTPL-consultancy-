"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  badge: "Frequently Asked Questions",



  faqs: [
    {
      question: "Who can use Corporate Advisory services?",
      answer:
        "Our services are designed for startups, SMEs, enterprises, organizations and business owners seeking strategic guidance.",
    },
    {
      question: "How do I request a consultation?",
      answer:
        "Simply submit your requirements through the service form, and our team will connect you with the appropriate advisory expert.",
    },
    {
      question: "Do you provide industry-specific consultants?",
      answer:
        "Yes. ATTPL Marketplace connects businesses with professionals experienced across healthcare, construction, manufacturing, technology, education and many other industries.",
    },
    {
      question: "Can I receive ongoing advisory support?",
      answer:
        "Yes. We provide continuous advisory support and long-term business consulting based on your organization's goals and growth plans.",
    },
    {
      question: "How are consultants selected?",
      answer:
        "Consultants are matched based on your business requirements, industry, project scope and the expertise needed for successful outcomes.",
    },
  ],
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {faqData.badge}
          </span>

          
        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-4">
          {faqData.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-yellow-400"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="pr-6 text-lg font-semibold text-[#0B1B3A]">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-yellow-400 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="px-7 pb-7 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
