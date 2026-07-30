"use client";

import { FaCheckCircle } from "react-icons/fa";

import { ServiceOverviewData } from "@/types/ServiceOverviewData";

interface Props {
  data: ServiceOverviewData;
}

export default function AboutService({ data }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {data.sectionBadge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0B1B3A] md:text-5xl">
            {data.sectionTitle}
          </h2>

        </div>

        {/* Content */}

        <div className="mt-20 grid items-start gap-20 lg:grid-cols-[1.4fr_0.9fr]">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-semibold leading-snug text-[#0B1B3A]">
              {data.heading}
            </h3>

            <div className="mt-8 space-y-7">

              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-9 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <h4 className="text-xl font-semibold text-[#0B1B3A]">
              Key Advisory Areas
            </h4>

            <div className="mt-8 space-y-5">

              {data.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-yellow-500" />

                  <span className="text-slate-700">
                    {point}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}