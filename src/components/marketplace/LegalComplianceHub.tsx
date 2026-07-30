"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

type Service = {
  category: string;
  title: string;
  description: string;
  highlight: string;
  image: string;
};

const services: Service[] = [
  {
    category: "Corporate Legal",
    title: "Business Legal Advisory",
    description:
      "Expert legal consultation for contracts, agreements, business structuring and corporate governance.",
    highlight: "Legal Experts",
    image: "/marketplace/cr.jpg",
  },
  {
    category: "CA & Accounting",
    title: "Accounting & Financial Planning",
    description:
      "Professional accounting, audits, bookkeeping, financial reporting and strategic advisory.",
    highlight: "CA Services",
    image: "/marketplace/ca.jpg",
  },
  {
    category: "GST & Taxation",
    title: "GST Registration & Tax Filing",
    description:
      "GST registration, return filing, tax planning and complete compliance management.",
    highlight: "100% Compliance",
    image: "/marketplace/gst.jpg",
  },
  {
    category: "Company Registration",
    title: "Start & Register Your Business",
    description:
      "Private Limited, LLP, OPC, MSME, Startup India and complete incorporation services.",
    highlight: "Business Setup",
    image: "/marketplace/companyreg.jpg",
  },
  {
    category: "Legal Documentation",
    title: "Contracts & Documentation",
    description:
      "Professional drafting, agreements, legal notices, verification and documentation support.",
    highlight: "Verified Documents",
    image: "/marketplace/legaldoc.jpg",
  },
  {
    category: "Compliance",
    title: "Regulatory Compliance",
    description:
      "ROC filings, annual compliance, statutory requirements and ongoing regulatory assistance.",
    highlight: "Year Round Support",
    image: "/marketplace/complaince.jpg",
  },
];

export default function LegalComplianceHub() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ---------------- Hero ---------------- */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Legal • CA • Compliance
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Legal & Compliance
              <span className="block text-blue-600">
                Support Made Simple
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Connect with verified legal professionals, Chartered
              Accountants and compliance experts for business registration,
              taxation, accounting and complete corporate advisory services.
            </p>

            <button className="mt-10 flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Hire CA & Legal Experts
              <FiArrowRight />
            </button>

          </div>

          {/* Hero Right */}

          <div className="relative">

            <div className="overflow-hidden rounded-[30px] shadow-2xl">

              <Image
                src="/marketplace/legal.jpg"
                alt="Legal Services"
                width={900}
                height={700}
                className="h-[560px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">

              <p className="text-sm uppercase tracking-widest text-slate-500">
                Trusted Network
              </p>

              <h4 className="mt-2 text-3xl font-bold text-slate-900">
                500+
              </h4>

              <p className="text-slate-600">
                Verified Professionals
              </p>

            </div>

          </div>

        </div>

        {/* ---------------- Services ---------------- */}

        <div className="mt-32">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <h3 className="text-5xl font-bold text-slate-900">
              Explore Professional Services
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Everything your business needs for legal, taxation,
              accounting and regulatory compliance.
            </p>

          </div>

          <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">

            {/* PART 2 CONTINUES FROM HERE */}
                        {services.map((service, index) => (
              <article
                key={index}
                className={`group transition-all duration-500 hover:-translate-y-3 ${
                  index % 2 !== 0 ? "xl:mt-24" : ""
                }`}
              >
                {/* Image */}
                <div
                  className="overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0 0,100% 0,100% 82%,82% 100%,0 100%)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="h-[290px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="pt-5">

                  {/* Category */}
                  <span className="inline-flex rounded bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-blue-700">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h4 className="mt-4 text-2xl font-bold leading-tight text-slate-900 transition group-hover:text-blue-600">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Highlight */}
                  <div className="mt-6 text-4xl font-bold leading-none text-blue-600">
                    {service.highlight}
                  </div>


                </div>
              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}