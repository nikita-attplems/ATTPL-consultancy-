"use client";

import { FaCheckCircle } from "react-icons/fa";

import { ServiceOverviewData } from "@/types/ServiceOverviewData";

interface Props {
  data: ServiceOverviewData;
}

export default function AboutService({ data }: Props) {
  return (
   <section className="bg-background py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
        {data.sectionBadge}
      </span>

      <h2 className="mt-6 text-4xl font-bold text-primary md:text-5xl">
        {data.sectionTitle}
      </h2>

    </div>

    {/* Content */}
    <div className="mt-20 grid items-start gap-20 lg:grid-cols-[1.4fr_0.9fr]">

      {/* Left */}
      <div>

        <h3 className="text-3xl font-semibold leading-snug text-primary">
          {data.heading}
        </h3>

        <div className="mt-8 space-y-7">
          {data.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-9 text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>

      </div>

      {/* Right */}
      <div className="rounded-3xl border border-border bg-surface p-8">

        <h4 className="text-xl font-semibold text-primary">
          Key Advisory Areas
        </h4>

        <div className="mt-8 space-y-5">

          {data.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-gold" />

              <span className="text-text-secondary">
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