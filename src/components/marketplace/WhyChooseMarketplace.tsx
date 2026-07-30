"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const comparisonData = [
  {
    traditional: "Searching multiple service providers individually",
    attpl: "One unified marketplace for all business needs",
  },
  {
    traditional: "Unverified consultants and vendors",
    attpl: "Verified professionals and trusted partners",
  },
  {
    traditional: "Managing different contacts and follow-ups",
    attpl: "Single platform with streamlined coordination",
  },
  {
    traditional: "Limited industry-specific expertise",
    attpl: "Specialized experts across multiple industries",
  },
  {
    traditional: "Time-consuming service discovery",
    attpl: "Quick expert matching and solution discovery",
  },
  {
    traditional: "Fragmented business support",
    attpl: "End-to-end consulting and business ecosystem",
  },
];

export default function WhyChooseMarketplace() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
         

          <h2 className="mt-6 text-4xl font-bold text-[#0B1B3A] md:text-5xl">
            A Better Way to Connect with Business Experts
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Compare the traditional approach with the ATTPL Marketplace
            experience and discover a faster, smarter, and more reliable way to
            access professional business solutions.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="border-r border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-700">
                Traditional Approach
              </h3>
            </div>

            <div className="bg-yellow-500 p-6 text-center">
              <h3 className="text-2xl font-bold text-white">
                ATTPL Marketplace
              </h3>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-slate-200"
            >
              {/* Left */}
              <div className="flex items-center gap-4 border-r border-slate-200 p-6">
                <FaTimesCircle className="text-lg text-red-500" />

                <p className="text-slate-600">{item.traditional}</p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4 bg-blue-50/40 p-6">
                <FaCheckCircle className="text-lg text-green-600" />

                <p className="font-medium text-[#0B1B3A]">{item.attpl}</p>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}
