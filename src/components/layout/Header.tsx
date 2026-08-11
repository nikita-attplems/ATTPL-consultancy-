import Image from "next/image";

export default function Header() {
  return (
    <div className="text-center px-4 py-2 border-b border-sky-100 bg-white">

      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/imgs/ATTPL-Group-Logo.gif"
          alt="ATTPL"
          width={85}
          height={85}
          priority
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
        ATTPL HOLDCO
      </h1>

<h1 className="mt-1 text-xl md:text-xl font-bold tracking-tight text-slate-900">
        ATTPL HEALTHCARE MARKETPLACE & HEALTHTECH ECOSYSTEM

      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-1 text-xs md:text-base">
        Choose ATTPL for the Best Service
      </p>

      {/* Tagline
      <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed max-w-2xl mx-auto">
        One Citizen • One Business • One Government • One Investor • One HealthHub
      </p> */}

      {/* Description */}
      <p className="text-sm text-slate-600 mt-3 font-medium">
  ATTPL means- तुरंत “Instant” — The World’s First Instant Enterprise  Ecosystem.
</p>
      {/* Note */}
      <div className="mt-4 inline-block rounded-full bg-sky-50 px-4 py-2">
        <p className="text-xs text-sky-700">
          You can skip optional fields and continue anytime.
        </p>
      </div>

    </div>
  );
}