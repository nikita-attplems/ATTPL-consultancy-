"use client";

import { ServiceHeroData } from "@/types/ServiceHeroData";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

interface HeroProps {
  data: ServiceHeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#0B1B3A]">
            Home
          </Link>

          <span>/</span>

          <Link href="/marketplace" className="hover:text-[#0B1B3A]">
            Marketplace
          </Link>

          <span>/</span>

          <span className="font-medium text-yellow-500">
            {data.title}
          </span>
        </div>

        {/* Badge */}
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          {data.badge}
        </span>

        {/* Title */}
        <h1 className="mt-8 text-5xl font-bold leading-tight text-[#0B1B3A] md:text-6xl">
          {data.title}
        </h1>

        {/* Description */}
        <div className="mt-10 max-w-5xl space-y-8 text-xl leading-10 text-slate-600">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {data.highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-500" />
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap gap-5">
          <Link
            href={data.primaryButton.href}
            className="rounded-xl bg-[#0B1B3A] px-8 py-4 font-semibold text-white transition hover:bg-blue-900"
          >
            {data.primaryButton.text}
          </Link>

          <Link
            href={data.secondaryButton.href}
            className="group flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-[#0B1B3A] transition hover:border-yellow-400 hover:text-yellow-600"
          >
            {data.secondaryButton.text}
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Bottom Divider */}
      <svg
        viewBox="0 0 1440 120"
        className="block w-full text-[#0B1B3A]"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,70L180,60C360,50,540,90,720,85C900,80,1080,45,1260,60L1440,70L1440,120L0,120Z"
        />
      </svg>
    </section>
  );
}