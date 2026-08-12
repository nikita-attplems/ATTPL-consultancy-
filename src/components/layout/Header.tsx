
"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-2 text-center">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full overflow-hidden">
            <Image
              src="/logo/logo-crop.gif"
              alt="ATTPL Logo"
              width={112}
              height={112}
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Company */}
        <h1 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
          ATTPL HOLDCO
        </h1>

        {/* Consultancy Platform */}
        <h2 className="mt-1 text-sm sm:text-base md:text-lg font-semibold text-slate-700">
          ATTPL Consultancy & Strategic Advisory Network™
        </h2>

        {/* Hindi + English Tagline */}
        <div className="mt-1 flex justify-center flex-wrap gap-2 text-sm sm:text-base md:text-lg font-semibold">

          <span className="text-[#0B1F3A]">
            परामर्श और रणनीतिक मार्गदर्शन
          </span>

          <span className="text-slate-300">
            •
          </span>

          <span className="text-[#C9A227]">
            Trusted Consultancy
          </span>

        </div>

        {/* Description */}
        <p className="mt-3 max-w-4xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">

          <span className="font-semibold text-[#0B1F3A]">
            ATTPL Consultancy & Strategic Advisory Network™
          </span>{" "}
          connects businesses, organizations, professionals, leaders,
          institutions, and strategic partners with trusted consultancy
          and advisory services—helping organizations make informed
          decisions, improve performance, manage projects, and achieve
          sustainable growth.

        </p>

        {/* Notice */}
        <div className="mt-4 flex justify-center">

          <div className="rounded-full bg-[#F8F1DD] border border-[#C9A227]/40 px-4 py-2 text-xs sm:text-sm text-[#0B1F3A]">

            One Client • One Advisory Profile • One Partner Network •
            One Consultancy Marketplace™

          </div>

        </div>

      </div>
    </header>
  );
}

