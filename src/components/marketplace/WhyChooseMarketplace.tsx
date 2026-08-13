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
 <section className="bg-background py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <h2 className="mt-6 text-4xl font-bold text-primary md:text-5xl">
        A Better Way to Connect with Business Experts
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-text-secondary">
        Compare the traditional approach with the ATTPL Marketplace
        experience and discover a faster, smarter, and more reliable way to
        access professional business solutions.
      </p>

    </div>

    {/* Comparison */}
    <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">

      {/* Header */}
      <div className="grid grid-cols-2">

        {/* Traditional */}
        <div className="border-r border-border bg-background p-6 text-center">
          <h3 className="text-2xl font-bold text-text-secondary">
            Traditional Approach
          </h3>
        </div>

        {/* ATTPL */}
        <div className="bg-gold p-6 text-center">
          <h3 className="text-2xl font-bold text-white">
            ATTPL Marketplace
          </h3>
        </div>

      </div>

      {/* Rows */}
      {comparisonData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-2 border-t border-border"
        >

          {/* Left */}
          <div className="flex items-center gap-4 border-r border-border bg-surface p-6">
            <FaTimesCircle className="text-lg text-red-500" />

            <p className="text-text-secondary">
              {item.traditional}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4  p-6">
            <FaCheckCircle className="text-lg text-gold" />

            <p className="font-medium text-primary">
              {item.attpl}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
  );
}
