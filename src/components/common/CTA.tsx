"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-10 lg:flex-row lg:px-14">

          {/* Left */}

          <div className="max-w-3xl">


            <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] md:text-4xl">
              Find the Right Consultant for Your Business?
            </h2>

            <p className="mt-3 text-lg leading-7 text-slate-500">
              Access verified legal professionals, Chartered Accountants,
              consultants and industry experts across multiple business sectors.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-wrap gap-4">

            <Link
  href="/marketplace"
  className="rounded-xl bg-[#1B2435] px-7 py-3 font-semibold text-white transition "
>
  Explore Marketplace
</Link>
<Link
  href="/service-form"
  className="group flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-[#0B1B3A] transition hover:border-yellow-400 hover:text-yellow-600"
>
  Contact Expert
  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
</Link>

          </div>

        </div>

      </div>
    </section>
  );
}